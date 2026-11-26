import { expect, tagsFor, test } from './fixtures';
import { field, openCatalog, selected, validationMessages } from './catalog-ui';

const absent = 'QAFixtureGarnetAbsent';
const name = 'QAFixtureGarnet';
const malformed = 'QA#Fixture';

test('C8934593 verifies the BMI empty state and guards required and malformed range values', tagsFor('C8934593'), async ({ page, traffic }) => {
  const path = '/SystemConfiguration/BloodPressureMaster.aspx';
  await openCatalog(page, path, ['Medical Data']);
  await expect(page).toHaveTitle('MedFit - Blood Pressure Master');
  await field(page, 'txtbpCategory').fill(absent);
  await expect(field(page, 'txtbpCategory')).toHaveValue(absent);
  traffic.allowOnce(path, 'btnSearch', { txtbpCategory: absent });
  await field(page, 'btnSearch').click();
  await expect(page.getByText('There is no information available for the search performed.', { exact: true })).toBeVisible();
  await openCatalog(page, path, ['Medical Data']);
  traffic.allowOnce(path, 'btnAdd');
  await field(page, 'btnAdd').click();
  const draft = (key: string) => field(page, `gdvBPMaster_ctl03_${key}`);
  const save = draft('lnksave');
  const missing = await validationMessages(page, save);
  for (const label of [/master type/i, /category name/i, /minimum value/i, /maximum value/i]) {
    expect(missing).toEqual(expect.arrayContaining([expect.stringMatching(label)]));
  }
  const type = draft('ddlFooterMasterType');
  await type.selectOption({ label: 'Body Mass Index' });
  await expect(selected(type)).toHaveText('Body Mass Index');
  await draft('txtFooterbpCategory').fill(name);
  await expect(draft('txtFooterbpCategory')).toHaveValue(name);
  for (const key of ['txtFooterMinValue', 'txtFooterMaxValue']) {
    await draft(key).fill(malformed);
    await expect(draft(key)).toHaveValue(malformed);
  }
  const invalid = await validationMessages(page, save);
  for (const label of [/minimum value.*-999\.9999.*999\.9999/i, /maximum value.*-999\.9999.*999\.9999/i, /minimum value greater than the maximum value/i]) {
    expect(invalid).toEqual(expect.arrayContaining([expect.stringMatching(label)]));
  }
  traffic.expectActions('btnSearch', 'btnAdd');
});

test('C8935206 verifies Reminder Type filtering and local required and numeric validation', tagsFor('C8935206'), async ({ page, traffic }) => {
  const path = '/SystemConfiguration/VaccinationReminder.aspx';
  await openCatalog(page, path, ['Medical Data']);
  await expect(page).toHaveTitle('MedFit - Vaccination Reminder Master');
  const type = field(page, 'ddlReminderType');
  const active = page.getByLabel('Show only Active', { exact: true });
  await type.selectOption({ label: 'Reminder Type1' });
  await expect(selected(type)).toHaveText('Reminder Type1');
  await active.check();
  await expect(active).toBeChecked();
  const activeField = await active.evaluate((node: HTMLInputElement) => node.name.split('$').at(-1)!);
  traffic.allowOnce(path, 'btnSearch', { ddlReminderType: await type.inputValue(), [activeField]: 'on' });
  await field(page, 'btnSearch').click();
  await expect(page.getByText('There are no vaccination reminders available for the search performed.', { exact: true })).toBeVisible();
  await openCatalog(page, path, ['Medical Data']);
  traffic.allowOnce(path, 'btnAdd');
  await field(page, 'btnAdd').click();
  const save = field(page, 'gdvVaccinationReminder_ctl03_btnSave');
  const requiredType = 'The Reminder Type is mandatory and cannot be blank.';
  expect(await validationMessages(page, save)).toEqual(expect.arrayContaining([
    requiredType, 'Please enter the frequency in days.',
  ]));
  const frequency = field(page, 'gdvVaccinationReminder_ctl03_txtFooterFrequency');
  await frequency.fill('QA#F');
  await expect(frequency).toHaveValue('QA#F');
  expect(await validationMessages(page, save)).toEqual(expect.arrayContaining([
    requiredType, 'Please enter the E-mail Frequency in days between -999 and 999.',
  ]));
  traffic.expectActions('btnSearch', 'btnAdd');
});

test('C8935211 scopes Code Master to active Gender codes and rejects digits in an abbreviation', tagsFor('C8935211'), async ({ page, traffic }) => {
  const path = '/SystemConfiguration/CodeMaster.aspx';
  await openCatalog(page, path, []);
  await expect(page).toHaveTitle('MedFit - Code Master');
  const description = field(page, 'txtDescription');
  const type = field(page, 'ddlCodeType');
  const active = page.getByLabel('Show only Active', { exact: true });
  const search = field(page, 'btnSearch');
  await description.fill(malformed);
  await expect(description).toHaveValue(malformed);
  traffic.allowOnce(path, 'btnSearch', { txtDescription: malformed, ddlCodeType: await type.inputValue() });
  await search.click();
  await expect(page.getByText('There are no codes available for the search performed.', { exact: true })).toBeVisible();
  await description.fill('');
  await expect(description).toHaveValue('');
  await type.selectOption({ label: 'Gender' });
  await expect(selected(type)).toHaveText('Gender');
  await active.check();
  await expect(active).toBeChecked();
  const activeField = await active.evaluate((node: HTMLInputElement) => node.name.split('$').at(-1)!);
  traffic.allowOnce(path, 'btnSearch', { txtDescription: '', ddlCodeType: await type.inputValue(), [activeField]: 'on' });
  await search.click();
  const grid = field(page, 'gdvCodeMaster');
  const gender = page.getByRole('cell', { name: 'Gender', exact: true });
  const rows = grid.locator('tr').filter({ has: gender }).filter({ hasNot: grid.locator('tr').filter({ has: gender }) });
  await expect.poll(() => rows.count()).toBeGreaterThan(0);
  for (const row of await rows.all()) await expect(row.getByRole('cell', { name: 'Yes', exact: true })).toBeVisible();
  await openCatalog(page, path, []);
  traffic.allowOnce(path, 'btnAdd');
  await field(page, 'btnAdd').click();
  const draft = (key: string) => field(page, `gdvCodeMaster_ctl03_${key}`);
  const save = draft('lnksave');
  const required = await validationMessages(page, save);
  for (const label of [/code type/i, /description/i, /abbreviation/i]) {
    expect(required).toEqual(expect.arrayContaining([expect.stringMatching(label)]));
  }
  await draft('ddlFooterCodeType').selectOption({ label: 'Gender' });
  await expect(selected(draft('ddlFooterCodeType'))).toHaveText('Gender');
  await draft('txtFooterDescription').fill(name);
  await expect(draft('txtFooterDescription')).toHaveValue(name);
  await draft('txtFooterAbbr').fill('QA1');
  await expect(draft('txtFooterAbbr')).toHaveValue('QA1');
  expect(await validationMessages(page, save)).toContain('Please enter only alphabets in the Abbreviation of the code.');
  traffic.expectActions('btnSearch', 'btnSearch', 'btnAdd');
});
