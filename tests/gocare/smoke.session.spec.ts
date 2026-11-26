import type { Page } from '@playwright/test';
import { FooterNavigationPage } from '../../pages/FooterNavigationPage';
import { HeaderNavigationPage } from '../../pages/HeaderNavigationPage';
import { SearchEmployeePage } from '../../pages/SearchEmployeePage';
import { SearchVaccinationPage } from '../../pages/SearchVaccinationPage';
import { expect, tagsFor, test } from './fixtures';

const employee = '/Employee/SearchEmployee.aspx';
const create = '/Employee/CreateEmployee.aspx';
const expirations = '/Employee/MedicalExamExpirations.aspx';
const vaccination = '/Vaccination/SearchEmployeeVaccination.aspx';
const absent = {
  employee: { first: 'Asterfixturecheck', last: 'QAfixturecheck' },
  vaccination: { first: 'QaAtlasMissingNovember', last: 'QaAtlasFictionBramble' },
};
const noMatch = 'There are no employees available for the search performed.';
const content = (page: Page, id: string) => page.locator(`#ctl00_MedtrackContentPlaceHolder_${id}`);
const link = (page: Page, path: string) => page.locator(`a[href$="${path.split('/').at(-1)}" i]`).filter({ visible: true });
const selected = (page: Page, id: string) => content(page, id).locator('option:checked');
const url = (page: Page, path: string) => new URL(path, page.url()).href;

async function openEmployee(page: Page) {
  await page.goto(employee);
  await expect(page).toHaveURL(url(page, employee));
  await expect(page).toHaveTitle(/Search Employee/i);
  return new SearchEmployeePage(page);
}

test('C15239309 expands the employee search criteria', tagsFor('C15239309'), async ({ page, traffic }) => {
  const search = await openEmployee(page);
  await search.clickAdvancedSearch();
  await search.verifyAdvancedSearchFields();
  traffic.expectActions();
});

test('C15289380 returns the expanded employee search to basic criteria', tagsFor('C15289380'), async ({ page, traffic }) => {
  const search = await openEmployee(page);
  const group = ['Area', 'Job Site', 'Geo Market'].map(name => page.getByRole('cell', { name, exact: true }));
  for (const control of group) await expect(control).toBeHidden();
  await expect(search.searchButton).toBeVisible();
  await search.clickAdvancedSearch();
  await search.verifyAdvancedSearchFields();
  await page.getByText('Basic Search', { exact: true }).click();
  for (const control of group) await expect(control).toBeHidden();
  await expect(search.advancedSearchLink).toBeVisible();
  await expect(search.searchButton).toBeVisible();
  traffic.expectActions();
});

test('C15289362 cancels the untouched employee intake draft', tagsFor('C15289362'), async ({ page, traffic }) => {
  await openEmployee(page);
  await link(page, create).click();
  await expect(page).toHaveURL(url(page, create));
  await expect(page).toHaveTitle('MedFit - Create Employee');
  const cancel = page.getByRole('button', { name: 'Cancel', exact: true });
  await expect(cancel).toBeVisible();
  traffic.allowOnce(create, 'btnCancel', { txtFirstName: '', txtLastName: '', txtGINNumber: '', txtPrimaryEmail: '' });
  await cancel.click();
  await expect(page).toHaveURL(url(page, employee));
  traffic.expectActions('btnCancel');
});

test('C8934358 opens Company Search through System Configuration', tagsFor('C8934358'), async ({ page, traffic }) => {
  await openEmployee(page);
  await page.getByRole('link', { name: 'System Configuration', exact: true }).hover();
  await page.getByRole('link', { name: 'Company', exact: true }).filter({ visible: true }).hover();
  const path = '/Company/SearchCompany.aspx';
  await link(page, path).click();
  await expect(page).toHaveURL(url(page, path));
  await expect(page).toHaveTitle('MedFit - Search Company');
  for (const control of ['txtCompanyName', 'ddlOwnerCompany', 'chkIsActive', 'btnSearch', 'btnClearSearch', 'btnAdd']) {
    await expect(content(page, control)).toBeVisible();
  }
  traffic.expectActions();
});

test('C15290403 restores the exam expiration filter defaults locally', tagsFor('C15290403'), async ({ page, traffic }) => {
  await openEmployee(page);
  await link(page, expirations).click();
  await expect(page).toHaveURL(url(page, expirations));
  const defaults = async () => {
    await expect(selected(page, 'ddlCompany')).toHaveText('Select Company');
    await expect(selected(page, 'ddlStatus')).toHaveText('Active');
    await expect(selected(page, 'ddlExpirationPeriod')).toHaveText('Expire in 1 month');
    await expect(content(page, 'txtCustomPeriod')).toBeHidden();
  };
  await defaults();
  await content(page, 'ddlStatus').selectOption({ label: 'Inactive' });
  await content(page, 'ddlExpirationPeriod').selectOption({ label: 'Custom period' });
  await expect(content(page, 'txtCustomPeriod')).toBeVisible();
  await content(page, 'txtCustomPeriod').fill('37');
  await expect(content(page, 'txtCustomPeriod')).toHaveValue('37');
  await expect(selected(page, 'ddlStatus')).toHaveText('Inactive');
  await expect(selected(page, 'ddlExpirationPeriod')).toHaveText('Custom period');
  await content(page, 'btnReset').click();
  await defaults();
  await expect(page).toHaveURL(url(page, expirations));
  traffic.expectActions();
});

test('C8927858 returns the empty result for the scoped absent employee fixture', tagsFor('C8927858'), async ({ page, traffic }) => {
  const search = await openEmployee(page);
  const { first, last } = absent.employee;
  await search.setCompany('MY COMPANY');
  await expect(search.drpCompany).toHaveValue('129');
  await search.setFirstName(first);
  await search.setLastName(last);
  await expect(search.firstName).toHaveValue(first);
  await expect(search.lastName).toHaveValue(last);
  traffic.allowOnce(employee, 'btnSearch', { ddlCompany: '129', txtFirstName: first, txtLastName: last, txtGinNumber: '' });
  await search.clickSearch();
  await expect(page.getByText(noMatch, { exact: true })).toBeVisible();
  await expect(page.locator('[id$="_gdvSearchResult"]:visible')).toHaveCount(0);
  traffic.expectActions('btnSearch');
});

test('C15237380 returns no match for the approved synthetic vaccination names', tagsFor('C15237380'), async ({ page, traffic }) => {
  const search = new SearchVaccinationPage(page);
  await search.goto();
  await expect(page).toHaveURL(url(page, vaccination));
  const { first, last } = absent.vaccination;
  await search.fillSearchCriteria({ firstName: first, lastName: last });
  await expect(content(page, 'txtFirstName')).toHaveValue(first);
  await expect(content(page, 'txtLastName')).toHaveValue(last);
  traffic.allowOnce(vaccination, 'btnSearch', { txtFirstName: first, txtLastName: last, txtGinNumber: '' });
  await search.search();
  await expect(page.getByText(noMatch, { exact: true })).toBeVisible();
  await expect(page.locator('[id$="_gdvSearchResult"]:visible')).toHaveCount(0);
  traffic.expectActions('btnSearch');
});

test('C15239310 opens the change-password form from the header', tagsFor('C15239310'), async ({ page, traffic }) => {
  await openEmployee(page);
  traffic.allowPasswordNavigation();
  await new HeaderNavigationPage(page).openChangePassword();
  await expect.poll(() => new URL(page.url()).pathname).toBe('/UserManagement/ChangePassword.aspx');
  await expect(page).toHaveTitle('MedFit - Change Password');
  traffic.expectActions('lnkChangePassword');
});

test('C15239319 opens the Contact Us popup', tagsFor('C15239319'), async ({ page, traffic }) => {
  await openEmployee(page);
  const popup = await new FooterNavigationPage(page).openContactUs();
  await expect(popup).toHaveURL(url(page, '/StaticContent/public-contact-us.html'));
  await expect(popup).toHaveTitle('Contact-Us');
  await expect(popup.getByText(/^Contact[- ]Us$/i)).toBeVisible();
  traffic.expectActions();
});

test('C15239320 opens the Privacy Policy popup', tagsFor('C15239320'), async ({ page, traffic }) => {
  await openEmployee(page);
  const popup = await new FooterNavigationPage(page).openPrivacyPolicy();
  await expect(popup).toHaveURL(/https:\/\/(?:www\.)?internationalsos\.com\/privacy-centre\/?(?:[?#].*)?$/i);
  await expect(popup).toHaveTitle('Privacy at International SOS');
  await expect(popup.getByRole('heading', { name: /privacy/i }).first()).toBeVisible();
  traffic.expectActions();
});

test('C15289381 opens Service Management without invoking service actions', tagsFor('C15289381'), async ({ page, traffic }) => {
  await openEmployee(page);
  await page.getByRole('link', { name: 'Maintenance', exact: true }).hover();
  const path = '/SystemConfiguration/ServiceManagement.aspx';
  await link(page, path).click();
  await expect(page).toHaveURL(url(page, path));
  await expect(page).toHaveTitle('MedFit - Service Management');
  await expect(page.getByText('Service Management', { exact: true }).filter({ visible: true }).last()).toBeVisible();
  traffic.expectActions();
});

async function openMobileCatalog(page: Page, path: string) {
  await openEmployee(page);
  for (const name of ['System Configuration', 'Company', 'Mobile']) {
    await page.getByRole('link', { name, exact: true }).filter({ visible: true }).hover();
  }
  await link(page, path).click();
  await expect(page).toHaveURL(url(page, path));
}

test('C15289415 resets the local Static Content company validation', tagsFor('C15289415'), async ({ page, traffic }) => {
  const path = '/Company/CompanyMobileStaticContent.aspx';
  await openMobileCatalog(page, path);
  await expect(page).toHaveTitle('MedFit - Mobile Static Content Master');
  const owner = content(page, 'ddlCompanyName');
  await expect(owner.locator('option:checked')).toHaveText('Select Company');
  const unset = await owner.inputValue();
  traffic.allowOnce(path, 'btnSearch', { ddlCompanyName: unset });
  await content(page, 'btnSearch').click();
  const message = page.getByText('The Company is mandatory and cannot be blank.', { exact: true });
  await expect(message).toBeVisible();
  traffic.allowOnce(path, 'btnClearSearch', { ddlCompanyName: unset });
  await content(page, 'btnClearSearch').click();
  await expect(message).toBeHidden();
  await expect(page).toHaveURL(url(page, path));
  await expect(owner).toHaveValue(unset);
  traffic.expectActions('btnSearch', 'btnClearSearch');
});

test('C15289416 clears the Mobile Menu Item draft filter', tagsFor('C15289416'), async ({ page, traffic }) => {
  const path = '/Company/CompanyMenuItem.aspx';
  await openMobileCatalog(page, path);
  await expect(page).toHaveTitle('MedFit - Company Menu Item');
  const owner = content(page, 'ddlCompany');
  await expect(owner.locator('option:checked')).toHaveText('Select Company');
  const unset = await owner.inputValue();
  const name = content(page, 'txtAlternateName');
  await name.fill('QADraft');
  await expect(name).toHaveValue('QADraft');
  traffic.allowOnce(path, 'btnClearSearch', { ddlCompany: unset, txtAlternateName: 'QADraft' });
  await content(page, 'btnClearSearch').click();
  await expect(name).toHaveValue('');
  await expect(page).toHaveURL(url(page, path));
  await expect(owner).toHaveValue(unset);
  traffic.expectActions('btnClearSearch');
});

test('C8935245 opens both welcome-email sections without triggering an action', tagsFor('C8935245'), async ({ page, traffic }) => {
  await openEmployee(page);
  const path = '/Employee/SendWelcomeEmail.aspx';
  await link(page, path).click();
  await expect(page).toHaveURL(url(page, path));
  await expect(page).toHaveTitle('MedFit - Send Welcome E-mail Address');
  for (const id of ['ddlCompany', 'chkAllEmployees', 'btnGetDetails', 'btnSendMail', 'btnCancel',
    'ddlCompanyMobile', 'chkAllMobileCompanies', 'btnGetDetailsMobile', 'btnSendMarketingMail', 'btnCancelMarketing']) {
    await expect(content(page, id)).toBeVisible();
  }
  traffic.expectActions();
});

test('C15289364 cancels the untouched Drop Box upload form', tagsFor('C15289364'), async ({ page, traffic }) => {
  await openEmployee(page);
  await page.getByRole('link', { name: 'Drop Box', exact: true }).hover();
  const path = '/Employee/DropBoxUploadWithMenu.aspx';
  await link(page, path).click();
  await expect(page).toHaveURL(url(page, path));
  await expect(page).toHaveTitle(/MedFit - Drop Box [–-] Upload Medical Reports/);
  const gin = content(page, 'DropBox_txtEmpGIN');
  const owner = content(page, 'DropBox_ddlCompanyName');
  await expect(gin).toHaveValue('');
  await expect(owner.locator('option:checked')).toHaveText('Select Company');
  traffic.allowOnce(path, 'DropBox$btnCancel', { 'DropBox$txtEmpGIN': '', 'DropBox$ddlCompanyName': await owner.inputValue() });
  await content(page, 'DropBox_btnCancel').click();
  await expect(page).toHaveURL(url(page, employee));
  traffic.expectActions('DropBox$btnCancel');
});
