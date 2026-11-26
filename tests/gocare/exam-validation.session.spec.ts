import type { Page } from '@playwright/test';
import { expect, tagsFor, test } from './fixtures';

const employee = '/Employee/SearchEmployee.aspx';
const reviewed = '/MedicalExam/SearchReviewedExams.aspx';
const expirations = '/Employee/MedicalExamExpirations.aspx';
const globalMET = '/SystemConfiguration/SearchGlobalMET.aspx';
const companyMET = '/Company/SearchMET.aspx';
const field = (page: Page, key: string) => page.locator(`#ctl00_MedtrackContentPlaceHolder_${key}`);

async function open(page: Page, path: string) {
  await page.goto(employee);
  await expect(page).toHaveURL(new URL(employee, page.url()).href);
  await page.goto(path);
  await expect(page).toHaveURL(new URL(path, page.url()).href);
}

async function validate(page: Page, control: string, expected: string) {
  const message = page.waitForEvent('dialog').then(async dialog => {
    const text = dialog.message().trim();
    await dialog.dismiss();
    return text;
  });
  await field(page, control).click();
  expect(await message).toBe(expected);
}

function relativeDate(offset: number) {
  const zone = 'Asia/Kolkata';
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: zone }).format(new Date());
  const date = new Date(`${today}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + offset);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(date).replaceAll(' ', '-');
}


test('C15290212 rejects malformed and impossible reviewed-exam search dates', tagsFor('C15290212'), async ({ page, traffic }) => {
  await open(page, reviewed);
  const from = field(page, 'calFromDate_txtDate');
  const to = field(page, 'calToDate_txtDate');
  const warning = 'Please enter a valid date. For example: 07-Nov-1981';
  await from.fill('not-a-date');
  await to.fill(relativeDate(-1));
  await expect(from).toHaveValue('not-a-date');
  await expect(to).toHaveValue(relativeDate(-1));
  await validate(page, 'btnSearch', warning);
  await from.fill(relativeDate(-2));
  await to.fill('31-Feb-2026');
  await expect(to).toHaveValue('31-Feb-2026');
  await validate(page, 'btnSearch', warning);
  await expect(page).toHaveURL(new URL(reviewed, page.url()).href);
  traffic.expectActions();
});

test('C15290371 clears both reviewed-exam dates without running Search', tagsFor('C15290371'), async ({ page, traffic }) => {
  await open(page, reviewed);
  const from = field(page, 'calFromDate_txtDate');
  const to = field(page, 'calToDate_txtDate');
  await expect(from).toHaveValue('');
  await expect(to).toHaveValue('');
  const first = relativeDate(-2);
  const last = relativeDate(-1);
  await from.fill(first);
  await to.fill(last);
  await expect(from).toHaveValue(first);
  await expect(to).toHaveValue(last);
  traffic.allowOnce(reviewed, 'btnReset', { 'calFromDate$txtDate': first, 'calToDate$txtDate': last });
  await field(page, 'btnReset').click();
  await expect(from).toHaveValue('');
  await expect(to).toHaveValue('');
  await expect(page).toHaveURL(new URL(reviewed, page.url()).href);
  traffic.expectActions('btnReset');
});

test('C15290408 scopes and clears reminder criteria without generating output', tagsFor('C15290408'), async ({ page, traffic }) => {
  const path = '/MedicalExam/GenerateReminderAndHealthPassport.aspx';
  await open(page, path);
  const keys = ['ddlCountry', 'ddlArea', 'ddlBusinessArea', 'ddlJobSite', 'ddlGeoMarket',
    'ddlCategory', 'calFromDate_txtDate', 'calToDate_txtDate', 'btnGetDetails'];
  const company = field(page, 'ddlCompany');
  const from = field(page, 'calFromDate_txtDate');
  const to = field(page, 'calToDate_txtDate');
  await expect(company.locator('option:checked')).toHaveText('Select Company');
  for (const key of keys) await expect(field(page, key)).toBeDisabled();
  traffic.allowOnce(path, 'ddlCompany', { ddlCompany: '129' });
  await company.selectOption({ label: 'MY COMPANY' });
  await expect(company).toHaveValue('129');
  for (const key of keys) await expect(field(page, key)).toBeEnabled();
  const first = relativeDate(-2);
  const last = relativeDate(-1);
  await from.fill(first);
  await to.fill(last);
  await expect(from).toHaveValue(first);
  await expect(to).toHaveValue(last);
  traffic.allowOnce(path, 'btnCancel', { ddlCompany: '129', 'calFromDate$txtDate': first, 'calToDate$txtDate': last });
  await field(page, 'btnCancel').click();
  await expect(page).toHaveURL(new URL(path, page.url()).href);
  await expect(company.locator('option:checked')).toHaveText('Select Company');
  await expect(from).toHaveValue('');
  await expect(to).toHaveValue('');
  for (const key of keys) await expect(field(page, key)).toBeDisabled();
  traffic.expectActions('ddlCompany', 'btnCancel');
});

test('C15290411 finds the Global MET and verifies its absence in the approved company mapping', tagsFor('C15290411'), async ({ page, traffic }) => {
  const name = 'Dummy Global MET for TEEKAY';
  await open(page, globalMET);
  await field(page, 'txtGlobalMETName').fill(name);
  await expect(field(page, 'txtGlobalMETName')).toHaveValue(name);
  traffic.allowOnce(globalMET, 'btnSearch', { txtGlobalMETName: name });
  await field(page, 'btnSearch').click();
  await expect(page.getByRole('cell', { name, exact: true })).toHaveCount(1);
  await open(page, companyMET);
  await field(page, 'ddlCompany').selectOption({ label: 'MY COMPANY' });
  await expect(field(page, 'ddlCompany')).toHaveValue('129');
  await field(page, 'ddlGlobalMET').selectOption({ label: name });
  await expect(field(page, 'ddlGlobalMET').locator('option:checked')).toHaveText(name);
  await expect(field(page, 'txtISOSMETName')).toHaveValue('');
  const value = await field(page, 'ddlGlobalMET').inputValue();
  expect(value).not.toBe('');
  traffic.allowOnce(companyMET, 'btnSearch', { ddlCompany: '129', ddlGlobalMET: value, txtISOSMETName: '' });
  await field(page, 'btnSearch').click();
  await expect(page.getByText('There are no METs available for the search performed.', { exact: true })).toBeVisible();
  traffic.expectActions('btnSearch', 'btnSearch');
});

test('C15290180 validates the custom expiration period at and outside both bounds', tagsFor('C15290180'), async ({ page, traffic }) => {
  await open(page, expirations);
  await field(page, 'ddlCompany').selectOption({ label: 'MY COMPANY' });
  await expect(field(page, 'ddlCompany')).toHaveValue('129');
  await expect(field(page, 'ddlStatus').locator('option:checked')).toHaveText('Active');
  await field(page, 'ddlExpirationPeriod').selectOption({ label: 'Custom period' });
  const days = field(page, 'txtCustomPeriod');
  await expect(days).toBeVisible();
  for (const value of ['', '-1', '501']) {
    await days.fill(value);
    await expect(days).toHaveValue(value);
    await validate(page, 'btnSearchCount', value ? 'Please enter a valid number (From 0 to 500).' : 'Custom Period cannot be empty.');
  }
  for (const value of ['0', '500']) {
    await days.fill(value);
    const checks = await days.evaluate(input => {
      type Validator = HTMLElement & { controltovalidate?: string; evaluationfunction?: (v: Validator) => boolean; enabled?: boolean };
      const app = window as Window & { Page_Validators?: Validator[] };
      return (app.Page_Validators ?? []).filter(v => v.controltovalidate === input.id && v.enabled !== false)
        .map(v => v.evaluationfunction?.(v));
    });
    expect(checks).toEqual([true, true, true]);
  }
  traffic.expectActions();
});
