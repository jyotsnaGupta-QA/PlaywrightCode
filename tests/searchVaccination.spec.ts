import { expect, test } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { LoginPage } from '../pages/LoginPage';
import { SearchVaccinationPage } from '../pages/SearchVaccinationPage';
import { DataProvider } from '../utils/dataProvider';

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

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginWithEnvCredentials();
});

test('C8935292 - Search vaccination records using valid synthetic criteria @sanity', async ({ page }) => {
  const searchVaccinationPage = new SearchVaccinationPage(page);

  await searchVaccinationPage.goto();
  await searchVaccinationPage.verifyPageElements();
  await searchVaccinationPage.fillSearchCriteria({
    firstName: searchFixture.existingSyntheticEmployee.firstName,
    ginNumberOrApplicantId: searchFixture.existingSyntheticEmployee.gin,
  });
  await searchVaccinationPage.search();
  await searchVaccinationPage.verifySearchResults(searchFixture.existingSyntheticEmployee.gin);
});

test('C8935293 - Validate Search COVID-19 Vaccination special characters @sanity', async ({ page }) => {
  const searchVaccinationPage = new SearchVaccinationPage(page);

  await searchVaccinationPage.goto();
  await searchVaccinationPage.search();
  await expect(page.locator('.ErrorBg')).toContainText(
    'Please select at least one search criteria before searching.',
  );

  await searchVaccinationPage.fillSearchCriteria({
    firstName: '@',
  });

  const validationDialogMessage = new Promise<string>((resolve) => {
    page.once('dialog', async (dialog) => {
      resolve(dialog.message());
      await dialog.accept();
    });
  });
  await searchVaccinationPage.search();
  const message = await validationDialogMessage;
  expect(message.toLowerCase()).toContain('valid first name');
});

test('C15237380 - Verify search with no synthetic matching records @sanity', async ({ page }) => {
  const searchVaccinationPage = new SearchVaccinationPage(page);
  const suffix = randomUUID().replace(/[0-9-]/g, '').padEnd(8, 'a').slice(0, 8);

  await searchVaccinationPage.goto();
  await searchVaccinationPage.fillSearchCriteria({
    firstName: `NoMatchFirst${suffix}`,
    lastName: `NoMatchLast${suffix}`,
  });
  await searchVaccinationPage.search();
  await expect(page.locator('.InformationBg, .ErrorBg')).toContainText(
    'There are no employees available for the search performed.',
  );
});
