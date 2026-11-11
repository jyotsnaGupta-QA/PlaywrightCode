import { expect, test } from '@playwright/test';
import { env } from 'node:process';
import { LoginPage } from '../pages/LoginPage';
import { SearchEmployeePage } from '../pages/SearchEmployeePage';

test.use({ storageState: { cookies: [], origins: [] } });

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
  await loginPage.setCapcha();
  await loginPage.clickLogin();
  await loginPage.verifyLoginSuccess();
});

test('C8927857: Search employee using valid criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setFirstName('Automation');
  await searchEmployeePage.setGIN('7915');
  await searchEmployeePage.clickSearch();
  await searchEmployeePage.verifyRecordExists('Automation', '7915');
});

test('C8927858: Search employee with invalid criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setFirstName('Mohan');
  await searchEmployeePage.setLastName('Das');
  await searchEmployeePage.clickSearch();
  await searchEmployeePage.verifyNoMatchingResults();
});

test('C15239052: Reset all employee search criteria @sanity', async ({ page }) => {
  const searchEmployeePage = new SearchEmployeePage(page);

  await page.goto('/employee/searchEmployee.aspx');
  await expect(searchEmployeePage.pageHeading).toBeVisible();
  await searchEmployeePage.setLastName('Das');
  await searchEmployeePage.setFirstName('Mohan');
  await searchEmployeePage.setGIN('123');
  await searchEmployeePage.setCompany('ALS');
  await searchEmployeePage.setStatus('Active');
  await searchEmployeePage.setCategory('HCC');
  //await searchEmployeePage.setFitnessStatus('Fit');
  await searchEmployeePage.setCreatedByIntlSos(true);

  await expect(searchEmployeePage.lastName).toHaveValue('Das');
  await expect(searchEmployeePage.firstName).toHaveValue('Mohan');
  await expect(searchEmployeePage.ginNumber).toHaveValue('123');
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
