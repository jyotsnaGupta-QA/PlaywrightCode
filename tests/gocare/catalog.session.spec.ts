import type { Locator } from '@playwright/test';
import { expect, tagsFor, test } from './fixtures';
import { field, openCatalog, selected, url, validationMessages } from './catalog-ui';

const invalidNames = [
  ['C8934374', '/Company/CompanyArea.aspx', 'MedFit - Company Area',
    'gdvCompanyArea', 'ddlFooterCompanyName', 'txtAreaNew', 'lnksave', 'Area'],
  ['C8934379', '/Company/CompanyBusinessArea.aspx', 'MedFit - Company Business Area Description',
    'gdvCompanyBusinessArea', 'ddlCompanyNew', 'txtAreaNew', 'lnkSave', 'Business Area'],
  ['C8934385', '/Company/CompanyGeoMarket.aspx', 'MedFit - Geo Market Master',
    'gdvCompanyGeoMarket', 'ddlFooterCompanyName', 'txtFooterGeoMarket', 'btnSave', 'GeoMarket'],
  ['C8934405', '/Company/CompanyEmpCategory.aspx', 'MedFit - Employee Category Master',
    'gdvCompanyEmpCategory', 'ddlCompanyNew', 'txtCompEmpCatNameNew', 'lnksave', 'Employee Category'],
];

for (const [id, path, title, grid, companyField, nameField, submitField, label] of invalidNames) {
  test(`${id} rejects a malformed ${label} name before any configuration save`, tagsFor(id), async ({ page, traffic }) => {
    await openCatalog(page, path, ['Company']);
    await expect(page).toHaveTitle(title);
    traffic.allowOnce(path, 'btnAdd');
    await field(page, 'btnAdd').click();
    const draft = (key: string) => field(page, `${grid}_ctl03_${key}`);
    await draft(companyField).selectOption({ label: 'MY COMPANY' });
    await expect(draft(companyField)).toHaveValue('129');
    await draft(nameField).fill('QA#Fixture');
    await expect(draft(nameField)).toHaveValue('QA#Fixture');
    expect(await validationMessages(page, draft(submitField))).toContain(`Please enter a valid ${label} Name.`);
    await expect(draft(nameField)).toHaveValue('QA#Fixture');
    traffic.expectActions('btnAdd');
  });
}

test('C8934508 reports no results for the approved absent Widget name',
  tagsFor('C8934508'), async ({ page, traffic }) => {
    const path = '/SystemConfiguration/SearchWidgetConfiguration.aspx';
    await openCatalog(page, path, ['Company', 'Dashboard']);
    await expect(page).toHaveTitle('MedFit - Search Widget Configuration');
    const name = 'QAAtlasAbsentWidgetNovember';
    await field(page, 'txtWidgetName').fill(name);
    await expect(field(page, 'txtWidgetName')).toHaveValue(name);
    traffic.allowOnce(path, 'btnSearch', { txtWidgetName: name });
    await field(page, 'btnSearch').click();
    await expect(page.getByText('There is no widget configuration available for the selected criteria.', { exact: true })).toBeVisible();
    traffic.expectActions('btnSearch');
  });

test('C8934585 filters the global catalog to the exact approved MET name',
  tagsFor('C8934585'), async ({ page, traffic }) => {
    const path = '/SystemConfiguration/SearchGlobalMET.aspx';
    await openCatalog(page, path, ['Exam']);
    const name = 'Dummy Global MET for TEEKAY';
    await field(page, 'txtGlobalMETName').fill(name);
    await expect(field(page, 'txtGlobalMETName')).toHaveValue(name);
    traffic.allowOnce(path, 'btnSearch', { txtGlobalMETName: name });
    await field(page, 'btnSearch').click();
    await expect(page.getByRole('cell', { name, exact: true })).toHaveCount(1);
    traffic.expectActions('btnSearch');
  });

test('C15290407 discards an unsaved Mobile Menu Item draft',
  tagsFor('C15290407'), async ({ page, traffic }) => {
    const path = '/Company/CompanyMenuItem.aspx';
    await openCatalog(page, path, ['Company', 'Mobile']);
    const name = 'gdvCompanyMenuItemContent_ctl03_txtFooterAlternateMenuName';
    const cancel = 'gdvCompanyMenuItemContent_ctl03_btnSaveCancel';
    traffic.allowOnce(path, 'btnAdd');
    await field(page, 'btnAdd').click();
    const draft = 'GarnetFixtureMenu';
    await expect(field(page, name)).toHaveValue('');
    await expect(field(page, 'gdvCompanyMenuItemContent_ctl03_ddlFooterCompanyName')).toBeVisible();
    await expect(field(page, 'gdvCompanyMenuItemContent_ctl03_ddlFooterDefaultName')).toBeVisible();
    await expect(field(page, 'gdvCompanyMenuItemContent_ctl03_btnSave')).toBeVisible();
    await field(page, name).fill(draft);
    await expect(field(page, name)).toHaveValue(draft);
    traffic.allowOnce(path, 'gdvCompanyMenuItemContent$ctl03$btnSaveCancel', {
      'gdvCompanyMenuItemContent$ctl03$txtFooterAlternateMenuName': draft,
    });
    await field(page, cancel).click();
    await expect(field(page, name)).toBeHidden();
    await expect(field(page, 'btnSearch')).toBeVisible();
    await expect(page).toHaveURL(url(page, path));
    traffic.expectActions('btnAdd', 'gdvCompanyMenuItemContent$ctl03$btnSaveCancel');
  });

type ClientValidator = HTMLElement & {
  controltovalidate?: string;
  evaluationfunction?: (validator: ClientValidator) => boolean;
  errormessage?: string;
  enabled?: boolean;
};

async function clientValidators(input: Locator) {
  return input.evaluate(element => {
    const items = (window as Window & { Page_Validators?: ClientValidator[] }).Page_Validators ?? [];
    return items.filter(item => item.controltovalidate === element.id && item.enabled !== false)
      .map(item => ({ valid: item.evaluationfunction?.(item), message: item.errormessage ?? '' }));
  });
}

test('C15290214 verifies the inclusive email-frequency bounds without saving',
  tagsFor('C15290214'), async ({ page, traffic }) => {
    const path = '/SystemConfiguration/VaccinationReminder.aspx';
    await openCatalog(page, path, ['Medical Data']);
    traffic.allowOnce(path, 'btnAdd');
    await field(page, 'btnAdd').click();
    const type = field(page, 'gdvVaccinationReminder_ctl03_ddlFooterReminderType');
    const frequency = field(page, 'gdvVaccinationReminder_ctl03_txtFooterFrequency');
    await type.selectOption({ label: 'Reminder Type1' });
    await expect(selected(type)).toHaveText('Reminder Type1');
    await expect(frequency).toHaveAttribute('maxlength', '4');
    await frequency.fill('-1000');
    await expect(frequency).toHaveValue('-100');
    for (const value of ['-1000', '-999', '999', '1000']) {
      // Exercise the local validator separately from the browser's input-length limit.
      await frequency.evaluate((input: HTMLInputElement, draft) => { input.value = draft; }, value);
      await expect(frequency).toHaveValue(value);
      const checked = await clientValidators(frequency);
      expect(checked).toHaveLength(2);
      if (Math.abs(Number(value)) === 999) {
        expect(checked.map(result => result.valid)).toEqual([true, true]);
      } else {
        expect(checked.filter(result => result.valid === false).map(result => result.message))
          .toContain('Please enter the E-mail Frequency in days between -999 and 999.');
      }
    }
    traffic.expectActions('btnAdd');
  });

test('C15290370 rejects reversed Medical Center hours without submitting', tagsFor('C15290370'), async ({ page, traffic }) => {
  const path = '/SystemConfiguration/SearchMedicalCenter.aspx';
  await openCatalog(page, path, ['Exam']);
  traffic.allowOnce(path, 'btnAdd');
  await field(page, 'btnAdd').click();
  await expect(page).toHaveURL(url(page, '/SystemConfiguration/MedicalCenterMaster.aspx'));
  const opening = field(page, 'txtOpentime');
  const closing = field(page, 'txtCloseTime');
  await opening.fill('18:00');
  await closing.fill('09:00');
  await expect(opening).toHaveValue('18:00');
  await expect(closing).toHaveValue('09:00');
  const before = [...await clientValidators(opening), ...await clientValidators(closing)];
  expect(before.filter(result => result.valid === false).map(result => result.message))
    .toContain('The Opening hours for a medical center cannot be greater than the Closing hours.');
  await opening.fill('09:00');
  await closing.fill('18:00');
  await expect(opening).toHaveValue('09:00');
  await expect(closing).toHaveValue('18:00');
  const after = [...await clientValidators(opening), ...await clientValidators(closing)];
  expect(after.map(result => result.valid)).toEqual([true, true, true]);
  traffic.expectActions('btnAdd');
});

test('C15290213 rejects a reversed BMI range and accepts the corrected draft values', tagsFor('C15290213'), async ({ page, traffic }) => {
  const path = '/SystemConfiguration/BloodPressureMaster.aspx';
  await openCatalog(page, path, ['Medical Data']);
  traffic.allowOnce(path, 'btnAdd');
  await field(page, 'btnAdd').click();
  const draft = (key: string) => field(page, `gdvBPMaster_ctl03_${key}`);
  await draft('ddlFooterMasterType').selectOption({ label: 'Body Mass Index' });
  await expect(selected(draft('ddlFooterMasterType'))).toHaveText('Body Mass Index');
  await draft('txtFooterbpCategory').fill('QAFixtureGarnet');
  await expect(draft('txtFooterbpCategory')).toHaveValue('QAFixtureGarnet');
  const minimum = draft('txtFooterMinValue');
  const maximum = draft('txtFooterMaxValue');
  await minimum.fill('10');
  await maximum.fill('5');
  await expect(minimum).toHaveValue('10');
  await expect(maximum).toHaveValue('5');
  expect(await validationMessages(page, draft('lnksave')))
    .toContain('You have entered the minimum value greater than the maximum value. Please correct it.');
  await expect(minimum).toHaveValue('10');
  await minimum.fill('5');
  await maximum.fill('10');
  await expect(minimum).toHaveValue('5');
  await expect(maximum).toHaveValue('10');
  const result = [...await clientValidators(minimum), ...await clientValidators(maximum)];
  expect(result.length).toBeGreaterThan(0);
  expect(result.every(entry => entry.valid === true)).toBe(true);
  traffic.expectActions('btnAdd');
});

test('C8934360 validates required Company values and malformed Company Name locally', tagsFor('C8934360'), async ({ page, traffic }) => {
  const path = '/Company/SearchCompany.aspx';
  await openCatalog(page, path, ['Company']);
  traffic.allowOnce(path, 'btnAdd');
  await field(page, 'btnAdd').click();
  const form = '/Company/CreateCompany.aspx';
  await expect(page).toHaveURL(url(page, form));
  const name = field(page, 'txtCompanyName');
  const submit = field(page, 'cmdSubmit');
  await expect(name).toHaveValue('');
  expect(await validationMessages(page, submit)).toEqual(expect.arrayContaining([
    'The Company is mandatory and cannot be blank.',
    'The Access Rights for a company is mandatory and cannot be blank.',
    'Local Doctor Association is mandatory and cannot be blank.',
  ]));
  await expect(page).toHaveURL(url(page, form));
  await name.fill('QA_ATLAS_Company');
  await expect(name).toHaveValue('QA_ATLAS_Company');
  expect(await validationMessages(page, submit)).toContain('Please enter a valid Company Name.');
  await expect(page).toHaveURL(url(page, form));
  traffic.expectActions('btnAdd');
});

test('C8934436 finds no company MET under exact Global MET criteria and an absent name', tagsFor('C8934436'), async ({ page, traffic }) => {
  const path = '/Company/SearchMET.aspx';
  await openCatalog(page, path, ['Company']);
  await expect(page).toHaveTitle('MedFit - Search MET');
  const owner = field(page, 'ddlCompany');
  const global = field(page, 'ddlGlobalMET');
  const filter = field(page, 'txtISOSMETName');
  await owner.selectOption({ label: 'MY COMPANY' });
  await expect(owner).toHaveValue('129');
  await global.selectOption({ label: 'Dummy Global MET for TEEKAY' });
  const globalId = await global.inputValue();
  expect(globalId).not.toBe('');
  for (const name of ['QAFixtureGarnetAbsent', '']) {
    await filter.fill(name);
    await expect(filter).toHaveValue(name);
    await expect(selected(global)).toHaveText('Dummy Global MET for TEEKAY');
    await expect(owner).toHaveValue('129');
    traffic.allowOnce(path, 'btnSearch', { ddlCompany: '129', ddlGlobalMET: globalId, txtISOSMETName: name });
    await field(page, 'btnSearch').click();
    await expect(page.getByText('There are no METs available for the search performed.', { exact: true })).toBeVisible();
  }
  traffic.expectActions('btnSearch', 'btnSearch');
});

test('C8934589 returns the approved Fit catalog row under the Active filter', tagsFor('C8934589'), async ({ page, traffic }) => {
  const path = '/SystemConfiguration/FitnessConclusionMaster.aspx';
  await openCatalog(page, path, ['Exam']);
  await expect(page).toHaveTitle('MedFit - Fitness Conclusion Master');
  const draft = field(page, 'txtFCName');
  const flag = field(page, 'chkActive');
  const row = page.locator('tr:has(> td:text-is("Fit")):visible');
  await expect(flag).not.toBeChecked();
  await draft.fill('Fit');
  await expect(draft).toHaveValue('Fit');
  traffic.allowOnce(path, 'btnSearch', { txtFCName: 'Fit' });
  await field(page, 'btnSearch').click();
  await expect.poll(() => row.count()).toBeGreaterThan(0);
  await flag.check();
  await expect(draft).toHaveValue('Fit');
  traffic.allowOnce(path, 'btnSearch', { txtFCName: 'Fit', chkActive: 'on' });
  await field(page, 'btnSearch').click();
  await expect.poll(() => row.count()).toBeGreaterThan(0);
  await expect.poll(() => row.locator('> td:text-is("Yes")').count()).toBeGreaterThan(0);
  await expect(flag).toBeChecked();
  traffic.expectActions('btnSearch', 'btnSearch');
});
