import { expect, test } from '@playwright/test';
import { env } from 'node:process';
import { randomUUID } from 'node:crypto';
import { LoginPage } from '../pages/LoginPage';
import { SearchEmployeePage } from '../pages/SearchEmployeePage';
import { DataProvider } from '../utils/dataProvider';

test.use({ storageState: { cookies: [], origins: [] } });

type EmployeeSearchFixture = {
  existingSyntheticEmployee: {
    firstName: string;
    lastName: string;
    gin: string;
  };
};

const searchFixture: EmployeeSearchFixture = DataProvider.getTestDataFromJson(
  'testdata/employee-search.json',
);

test.beforeEach(async ({ page }) => {
  const username = env.MEDTRACK_USERNAME?.trim();
  const password = env.MEDTRACK_PASSWORD;

  if (!username || !password) {
    throw new Error('Set MEDTRACK_USERNAME and MEDTRACK_PASSWORD to run Search Employee tests.');
  }

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.setUsername(username);
  await loginPage.setPassword(password);
  await loginPage.setCaptcha();
  await loginPage.clickLogin();
  await loginPage.verifyLoginSuccess();
});

test('C8927857 - Search employee using valid synthetic criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setFirstName(searchFixture.existingSyntheticEmployee.firstName);
  await searchEmployeePage.setGIN(searchFixture.existingSyntheticEmployee.gin);
  await searchEmployeePage.clickSearch();
  await searchEmployeePage.verifyRecordExists(
    searchFixture.existingSyntheticEmployee.lastName,
    searchFixture.existingSyntheticEmployee.gin,
  );
});

test('C8927858 - Search employee with synthetic non-matching criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);
  const suffix = randomUUID().replace(/[0-9-]/g, '').padEnd(8, 'a').slice(0, 8);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setFirstName(`NoMatchFirst${suffix}`);
  await searchEmployeePage.setLastName(`NoMatchLast${suffix}`);
  await searchEmployeePage.clickSearch();
  await searchEmployeePage.verifyNoMatchingResults();
});

test('C9404218 - Search results include the Certificate Expiry Date column @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setFirstName(searchFixture.existingSyntheticEmployee.firstName);
  await searchEmployeePage.setGIN(searchFixture.existingSyntheticEmployee.gin);
  await searchEmployeePage.clickSearch();
  await searchEmployeePage.verifyCertificateExpiryDateColumn();
});

test('C15239052: Reset all employee search criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setLastName('QAReset');
  await searchEmployeePage.setFirstName('QAReset');
  await searchEmployeePage.setGIN('987');
  await searchEmployeePage.setCompany('ALS');
  await searchEmployeePage.setStatus('Active');
  await searchEmployeePage.setCategory('HCC');
  //await searchEmployeePage.setFitnessStatus('Fit');
  await searchEmployeePage.setCreatedByIntlSos(true);

  await expect(searchEmployeePage.lastName).toHaveValue('QAReset');
  await expect(searchEmployeePage.firstName).toHaveValue('QAReset');
  await expect(searchEmployeePage.ginNumber).toHaveValue('987');
  await expect(searchEmployeePage.status.locator('option:checked')).toHaveText('Active');
  await expect(searchEmployeePage.drpCompany.locator('option:checked')).toHaveText('ALS');
  await expect(searchEmployeePage.category.locator('option:checked')).toHaveText('HCC');
  //await expect(searchEmployeePage.fitnessStatus.locator('option:checked')).toHaveText('Fit');
  await expect(searchEmployeePage.createdByIntlSos).toBeChecked();

  await searchEmployeePage.clickReset();
  await searchEmployeePage.verifyResetClearedCriteria();
});

test('C15239309: Expand additional employee search criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.clickAdvancedSearch();
  await searchEmployeePage.verifyAdvancedSearchFields();
});
