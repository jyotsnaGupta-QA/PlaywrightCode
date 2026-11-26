import type { Page } from '@playwright/test';
import { expect, tagsFor, test } from './fixtures';

const employee = '/Employee/SearchEmployee.aspx';
const intake = '/Employee/CreateEmployee.aspx';
const field = (page: Page, key: string) => page.locator(`#ctl00_MedtrackContentPlaceHolder_${key}`);

async function openDraft(page: Page) {
  await page.goto(employee);
  await expect(page).toHaveTitle(/Search Employee/i);
  await page.getByRole('link', { name: 'Create New Employee', exact: true }).click();
  await expect.poll(() => new URL(page.url()).pathname).toBe(intake);
  await expect(page).toHaveTitle('MedFit - Create Employee');
}

async function verifyValidation(page: Page, expected: string[]) {
  const result = page.waitForEvent('dialog').then(async dialog => {
    const lines = dialog.message().trim().split(/\r?\n/);
    await dialog.dismiss();
    return lines;
  });
  await field(page, 'btnSubmit').click();
  expect(await result).toEqual(expected);
  await expect.poll(() => new URL(page.url()).pathname).toBe(intake);
}

test('C15239583 validates the nine mandatory fields on blank employee intake',
  tagsFor('C15239583'), async ({ page, traffic }) => {
    await openDraft(page);
    await verifyValidation(page, [
      'The Employee Status is mandatory and cannot be blank.',
      'The Employee Title is mandatory and cannot be blank.',
      'The Last Name is mandatory and cannot be blank.',
      'The First Name is mandatory and cannot be blank.',
      'The Gender of the employee is mandatory and cannot be blank.',
      'The Date of Birth is mandatory and cannot be blank.',
      'The Company is mandatory and cannot be blank.',
      'The Employee GIN is mandatory and cannot be blank.',
      'The Primary E-mail Address is mandatory and cannot be blank.',
    ]);
    traffic.expectActions();
  });

test('C8927853 rejects a malformed employee GIN and primary email before submission',
  tagsFor('C8927853'), async ({ page, traffic }) => {
    await openDraft(page);
    for (const [id, label] of [['ddlType', 'Active'], ['ddlTitle', 'Mr'], ['ddlSex', 'Male'], ['ddlCompany', 'MY COMPANY']]) {
      const input = field(page, id);
      await input.selectOption({ label });
      await expect(input.locator('option:checked')).toHaveText(label);
    }
    await expect(field(page, 'ddlCompany')).toHaveValue('129');
    const relation = field(page, 'ddlRelation');
    if (await relation.isEnabled()) await relation.selectOption({ label: 'Employee' });
    await expect(relation.locator('option:checked')).toHaveText('Employee');
    for (const [id, value] of [
      ['txtLastName', 'QAfixture'], ['txtFirstName', 'Aster'], ['calDateOfBirth_txtDate', '12-Feb-1982'],
      ['txtGINNumber', '9%&654321'], ['txtPrimaryEmail', 'abc#mail.com'],
    ]) {
      const input = field(page, id);
      await input.fill(value);
      await expect(input).toHaveValue(value);
    }
    await verifyValidation(page, ['Please enter a valid GIN number.', 'Please enter a valid Primary E-mail Address.']);
    traffic.expectActions();
  });
