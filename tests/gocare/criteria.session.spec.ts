import type { Locator, Page } from '@playwright/test';
import { SearchVaccinationPage } from '../../pages/SearchVaccinationPage';
import { DataProvider } from '../../utils/dataProvider';
import { expect, tagsFor, test } from './fixtures';

const employees = '/Employee/SearchEmployee.aspx';
const vaccinations = '/Vaccination/SearchEmployeeVaccination.aspx';
const expirations = '/Employee/MedicalExamExpirations.aspx';
const team = '/UserManagement/SearchUsers.aspx';
const createUser = '/UserManagement/CreateUser.aspx';
const widgets = '/SystemConfiguration/SearchWidgetConfiguration.aspx';
const company = '/Company/SearchCompany.aspx';
const createEmployee = '/Employee/CreateEmployee.aspx';
const data = DataProvider.getTestDataFromJson('testdata/gocare-ui-draft-datasets.json').cases;

const field = (page: Page, key: string) => page.locator(`#ctl00_MedtrackContentPlaceHolder_${key}`);
const chosen = (locator: Locator) => locator.locator('option:checked');
const url = (page: Page, path: string) => new URL(path, page.url()).href;

async function enter(page: Page, path: string) {
  await page.goto(employees);
  await expect(page).toHaveURL(url(page, employees));
  await page.goto(path);
  await expect(page).toHaveURL(url(page, path));
}

async function choose(locator: Locator, label: string) {
  await locator.selectOption({ label });
  await expect(chosen(locator)).toHaveText(label);
}

async function optionValue(locator: Locator, label: string) {
  const value = await locator.getByRole('option', { name: label, exact: true }).getAttribute('value');
  if (!value) throw new Error('The approved GoCare option has no select value');
  return value;
}

async function matchDialog(page: Page, trigger: Locator, message: string) {
  const shown = page.waitForEvent('dialog').then(async dialog => {
    const text = dialog.message().trim();
    await dialog.dismiss();
    return text;
  });
  await trigger.click();
  expect(await shown).toBe(message);
}

test('C15290409 validates malformed GIN and an impossible DOB before vaccination search', tagsFor('C15290409'), async ({ page, traffic }) => {
    const search = new SearchVaccinationPage(page);
    for (const { key, value, message } of [
      { key: 'txtGinNumber', value: '79X#QA', message: 'Please enter a valid GIN number.' },
      { key: 'calDateOfBirth_txtDate', value: '31-Feb-2020', message: 'Please enter a valid date. For example: 07-Nov-1981' },
    ]) {
      await search.goto();
      await expect(page).toHaveURL(url(page, vaccinations));
      await expect(field(page, 'txtGinNumber')).toHaveValue('');
      await expect(field(page, 'calDateOfBirth_txtDate')).toHaveValue('');
      await field(page, key).fill(value);
      await expect(field(page, key)).toHaveValue(value);
      await matchDialog(page, field(page, 'btnSearch'), message);
      await expect(page).toHaveURL(url(page, vaccinations));
    }
    traffic.expectActions();
  });

test('C15290410 requires Status even with the approved expiration company selected', tagsFor('C15290410'), async ({ page, traffic }) => {
    await enter(page, expirations);
    await expect(chosen(field(page, 'ddlCompany'))).toHaveText('Select Company');
    await expect(chosen(field(page, 'ddlStatus'))).toHaveText('Active');
    await expect(chosen(field(page, 'ddlExpirationPeriod'))).toHaveText('Expire in 1 month');
    await choose(field(page, 'ddlCompany'), 'MY COMPANY');
    await expect(field(page, 'ddlCompany')).toHaveValue('129');
    await choose(field(page, 'ddlStatus'), 'Select Employee Status');
    await expect(chosen(field(page, 'ddlCompany'))).toHaveText('MY COMPANY');
    await matchDialog(page, field(page, 'btnSearchCount'), 'The Status is mandatory and cannot be blank.');
    await expect(page).toHaveURL(url(page, expirations));
    traffic.expectActions();
  });

test('C15290413 retains the brand when the vaccination dose changes', tagsFor('C15290413'), async ({ page, traffic }) => {
    await new SearchVaccinationPage(page).goto();
    await expect(page).toHaveURL(url(page, vaccinations));
    const dose = field(page, 'ddlVaccineType');
    const brand = field(page, 'ddlVaccineBrand');
    await expect(chosen(dose)).toHaveText('Select Vaccination Name');
    await expect(chosen(brand)).toHaveText('Select Vaccination Brand Name');
    await choose(dose, 'Covid-19 1st Shot');
    await choose(brand, 'Moderna');
    await expect(chosen(dose)).toHaveText('Covid-19 1st Shot');
    await choose(dose, 'Covid-19 2nd Shot');
    await expect(chosen(brand)).toHaveText('Moderna');
    traffic.expectActions();
  });

test('C15290446 populates company-scoped vaccination criteria locally', tagsFor('C15290446'), async ({ page, traffic }) => {
    const draft = data.C15290446;
    await new SearchVaccinationPage(page).goto();
    await expect(page).toHaveURL(url(page, vaccinations));
    const area = field(page, 'ddlArea');
    const category = field(page, 'ddlCategory');
    await expect(area.locator('option')).toHaveCount(1);
    await expect(category.locator('option')).toHaveCount(1);
    traffic.allowVaccinationCriteria();
    await choose(field(page, 'ddlCompany'), draft.company.label);
    await expect(field(page, 'ddlCompany')).toHaveValue(String(draft.company.id));
    await expect.poll(() => area.locator('option').count()).toBeGreaterThan(1);
    await expect.poll(() => category.locator('option').count()).toBeGreaterThan(1);
    await expect(chosen(area)).toHaveText('Select Company Area');
    await expect(chosen(category)).toHaveText('Select Category');
    await choose(field(page, 'ddlAssignmentCountry'), draft.assignmentCountry);
    await choose(field(page, 'ddlStatus'), draft.employeeStatus);
    await expect(chosen(field(page, 'ddlCompany'))).toHaveText(draft.company.label);
    await expect(chosen(field(page, 'ddlAssignmentCountry'))).toHaveText(draft.assignmentCountry);
    traffic.expectActions('Category', 'CompanyArea');
  });

test('C15290447 scopes Widget choices and retains the selected health item', tagsFor('C15290447'), async ({ page, traffic }) => {
    const draft = data.C15290447;
    await enter(page, widgets);
    const item = field(page, 'ddlHealthCheckItemName');
    const initial = await item.locator('option').count();
    traffic.allowOnce(widgets, 'ddlCompanyName', { ddlCompanyName: String(draft.company.id) });
    await choose(field(page, 'ddlCompanyName'), draft.company.label);
    await choose(field(page, 'ddlUserPreference'), draft.relation);
    await choose(field(page, 'ddlWidgetType'), draft.initialType);
    await expect.poll(() => item.locator('option').count()).toBeLessThan(initial);
    await choose(item, draft.healthCheckItem);
    await choose(field(page, 'ddlWidgetCategory'), draft.category);
    await expect(chosen(item)).toHaveText(draft.healthCheckItem);
    await choose(field(page, 'ddlWidgetType'), draft.changedType);
    await expect(chosen(item)).toHaveText(draft.healthCheckItem);
    await expect(chosen(field(page, 'ddlCompanyName'))).toHaveText(draft.company.label);
    await expect(chosen(field(page, 'ddlUserPreference'))).toHaveText(draft.relation);
    await expect(chosen(field(page, 'ddlWidgetCategory'))).toHaveText(draft.category);
    traffic.expectActions('ddlCompanyName');
  });

test('C15290448 retains independent Team Member access filter criteria', tagsFor('C15290448'), async ({ page, traffic }) => {
    const draft = data.C15290448;
    await enter(page, team);
    const fields = [
      ['ddlUserRole', 'Select Role Type', draft.userRole],
      ['ddlCompany', 'Select Company', draft.company.label],
      ['ddlLocked', 'Select Lock Status', draft.lockStatus],
      ['ddlCorporate', 'Select AD/Corporate Account Status', draft.corporateAccountStatus],
    ];
    for (const [id, placeholder] of fields) await expect(chosen(field(page, id))).toHaveText(placeholder);
    for (const [id, , value] of fields) await choose(field(page, id), value);
    for (const [id, , value] of fields) await expect(chosen(field(page, id))).toHaveText(value);
    traffic.expectActions();
  });

test('C15290449 returns the scoped empty state for an absent active company', tagsFor('C15290449'), async ({ page, traffic }) => {
    const draft = data.C15290449;
    await enter(page, company);
    await choose(field(page, 'ddlOwnerCompany'), draft.owner.label);
    await expect(field(page, 'ddlOwnerCompany')).toHaveValue(String(draft.owner.id));
    await field(page, 'txtCompanyName').fill(draft.companyName);
    await field(page, 'chkIsActive').check();
    await expect(field(page, 'chkIsActive')).toBeChecked();
    traffic.allowOnce(company, 'btnSearch', {
      ddlOwnerCompany: String(draft.owner.id), txtCompanyName: draft.companyName, chkIsActive: 'on',
    });
    await field(page, 'btnSearch').click();
    await expect(page.getByText('There are no companies available for the search performed.', { exact: true })).toBeVisible();
    await expect(page).toHaveURL(url(page, company));
    await expect(field(page, 'txtCompanyName')).toHaveValue(draft.companyName);
    traffic.expectActions('btnSearch');
  });

test('C15290450 initializes the unsaved Team Member form for two supported roles', tagsFor('C15290450'), async ({ page, traffic }) => {
    await enter(page, createUser);
    const role = field(page, 'ddlRoleList');
    await expect(chosen(role)).toHaveText('Select Role Type');
    const details = ['txtUserName', 'ddlADAccount', 'ddlOwnerCompany', 'btnSubmit'];
    for (const id of details) await expect(field(page, id)).toBeHidden();
    for (const name of data.C15290450.roles) {
      traffic.allowOnce(createUser, 'ddlRoleList', { ddlRoleList: await optionValue(role, name) });
      await choose(role, name);
      for (const id of details) await expect(field(page, id)).toBeVisible();
    }
    traffic.expectActions('ddlRoleList', 'ddlRoleList');
  });

test('C15290445 retains the exact synthetic employee intake draft', tagsFor('C15290445'), async ({ page, traffic }) => {
    const draft = data.C15290445;
    await enter(page, createEmployee);
    for (const [key, label] of [
      ['ddlCompany', draft.company.label], ['ddlType', draft.status],
      ['ddlTitle', draft.title], ['ddlSex', draft.gender], ['ddlCountry', draft.country],
      ['ddlAssignmentCountry', draft.assignmentCountry],
    ]) {
      await choose(field(page, key), label);
    }
    await expect(field(page, 'ddlCompany')).toHaveValue(String(draft.company.id));
    const fields = [
      ['txtLastName', draft.lastName], ['txtFirstName', draft.firstName],
      ['calDateOfBirth_txtDate', draft.dateOfBirth], ['txtSecondaryEmail', draft.secondaryEmail],
      ['txtAddress', draft.address], ['txtPostalCode', draft.postalCode],
      ['txtPhone', draft.phone], ['txtTown', draft.town], ['txtFaxNo', draft.fax],
      ['txtNotes', draft.notes], ['txtAddInfoDetails', draft.additionalInformation],
    ];
    for (const [key, value] of fields) {
      await field(page, key).fill(value);
      await expect(field(page, key)).toHaveValue(value);
    }
    await expect(field(page, 'txtGINNumber')).toHaveValue('');
    await expect(field(page, 'txtPrimaryEmail')).toHaveValue('');
    await enter(page, createEmployee);
    await choose(field(page, 'ddlNationality'), draft.nationality);
    await choose(field(page, 'ddlMaritalStatus'), draft.maritalStatus);
    traffic.expectActions();
  });

test('C15289363 exits an empty and an unsaved Team Member draft', tagsFor('C15289363'), async ({ page, traffic }) => {
    for (const note of ['', 'Garnet fixture draft', '']) {
      await enter(page, createUser);
      await expect(page).toHaveTitle('MedFit - Create Team Member');
      await expect(chosen(field(page, 'ddlRoleList'))).toHaveText('Select Role Type');
      const notes = field(page, 'txtAddInfoDetails');
      await expect(notes).toHaveValue('');
      if (note) await notes.fill(note);
      await expect(notes).toHaveValue(note);
      traffic.allowOnce(createUser, 'btnCancel', { txtAddInfoDetails: note });
      await field(page, 'btnCancel').click();
      await expect(page).toHaveURL(url(page, team));
    }
    traffic.expectActions('btnCancel', 'btnCancel', 'btnCancel');
  });

test('C15290406 clears the Job Title draft and unchecks Active without searching', tagsFor('C15290406'), async ({ page, traffic }) => {
    const path = '/Company/CompanyJobTitle.aspx';
    await enter(page, path);
    const name = field(page, 'txtTitle');
    const flag = page.getByLabel('Show only Active', { exact: true });
    await expect(chosen(field(page, 'ddlCompany'))).toHaveText('Select Company');
    await expect(name).toHaveValue('');
    await expect(flag).not.toBeChecked();
    const draft = 'GarnetFixtureTitle';
    await name.fill(draft);
    await flag.check();
    await expect(flag).toBeChecked();
    await expect(name).toHaveValue(draft);
    traffic.allowOnce(path, 'btnClearSearch', { txtTitle: draft });
    await field(page, 'btnClearSearch').click();
    await expect(name).toHaveValue('');
    await expect(flag).not.toBeChecked();
    await expect(page).toHaveURL(url(page, path));
    traffic.expectActions('btnClearSearch');
  });

test('C15290412 makes thresholds and units available only for a Numeric health item', tagsFor('C15290412'), async ({ page, traffic }) => {
    const path = '/SystemConfiguration/SearchHealthCheckItem.aspx';
    await enter(page, path);
    traffic.allowOnce(path, 'btnAdd');
    await field(page, 'btnAdd').click();
    const numeric = ['tbxMin', 'tbxMax', 'tbxInternationalUnit', 'chkDisplayUOM'];
    for (const id of numeric) await expect(field(page, id)).toBeDisabled();
    const itemType = field(page, 'ddlItemtype');
    traffic.allowOnce(path, 'ddlItemtype', { ddlItemtype: await optionValue(itemType, 'Numeric') });
    await choose(itemType, 'Numeric');
    for (const id of numeric) await expect(field(page, id)).toBeEnabled();
    await field(page, 'tbxMin').fill('5');
    await field(page, 'tbxMax').fill('10');
    await expect(field(page, 'tbxMin')).toHaveValue('5');
    await expect(field(page, 'tbxMax')).toHaveValue('10');
    traffic.allowOnce(path, 'ddlItemtype', { ddlItemtype: await optionValue(itemType, 'Boolean') });
    await choose(itemType, 'Boolean');
    for (const id of numeric) await expect(field(page, id)).toBeDisabled();
    traffic.expectActions('btnAdd', 'ddlItemtype', 'ddlItemtype');
  });

for (const row of [
  {
    id: 'C15290404', path: team,
    values: [['txtFirstName', 'Garnet'], ['txtLastName', 'Fixture'], ['txtUserName', 'garnetfixture']],
    status: 'ddlAccountStatus', selected: 'Enabled', placeholder: 'Select User Status',
  },
  {
    id: 'C15290405', path: vaccinations,
    values: [['txtFirstName', 'Garnet'], ['txtLastName', 'Fixture'], ['txtTown', 'Garnet']],
    status: 'ddlStatus', selected: 'Inactive', placeholder: 'Select Employee Status',
  },
]) {
  test(`${row.id} restores the initial search criteria without querying records`,
    tagsFor(row.id), async ({ page, traffic }) => {
      await enter(page, row.path);
      const status = field(page, row.status);
      await expect(chosen(status)).toHaveText(row.placeholder);
      for (const [key, value] of row.values) {
        await expect(field(page, key)).toHaveValue('');
        await field(page, key).fill(value);
      }
      await choose(status, row.selected);
      for (const [key, value] of row.values) await expect(field(page, key)).toHaveValue(value);
      await field(page, 'btnReset').click();
      for (const [key] of row.values) await expect(field(page, key)).toHaveValue('');
      await expect(chosen(status)).toHaveText(row.placeholder);
      await expect(page).toHaveURL(url(page, row.path));
      traffic.expectActions();
    });
}

type CatalogRow = {
  route: string;
  field: string;
  value: string;
  company?: string;
  companyControl?: string;
};

for (const id of ['C15290452', 'C15290453'] as const) {
  const rows: CatalogRow[] = data[id].rows;
  for (const row of rows) {
    test(`${id} retains draft criteria while toggling Active on ${row.route}`,
      tagsFor(id), async ({ page, traffic }) => {
        await enter(page, row.route);
        const flag = page.getByLabel(/show only active/i);
        await expect(flag).not.toBeChecked();
        if (row.company && row.companyControl) await choose(field(page, row.companyControl), row.company);
        const criterion = field(page, row.field);
        const dropdown = row.field.startsWith('ddl');
        if (dropdown) await choose(criterion, row.value);
        else await criterion.fill(row.value);
        for (const checked of [true, false]) {
          await flag.setChecked(checked);
          await expect(flag).toBeChecked({ checked });
          if (dropdown) await expect(chosen(criterion)).toHaveText(row.value);
          else await expect(criterion).toHaveValue(row.value);
          if (row.company && row.companyControl) {
            await expect(chosen(field(page, row.companyControl))).toHaveText(row.company);
          }
        }
        traffic.expectActions();
      });
  }
}
