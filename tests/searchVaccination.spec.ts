import { expect, test } from '@playwright/test';
import { SearchVaccinationPage } from '../pages/SearchVaccinationPage';

test('C8935292: Search vaccination records using valid criteria @sanity', async ({ page }) => {
  const searchVaccinationPage = new SearchVaccinationPage(page);

  await searchVaccinationPage.goto();
  await searchVaccinationPage.verifyPageElements();
  await searchVaccinationPage.fillSearchCriteria({
    firstName: "Automation",
    ginNumberOrApplicantId: '7915',
  });
  await searchVaccinationPage.search();
  await searchVaccinationPage.verifySearchResults('7915');
});

test('C8935293: Validate Search COVID-19 Vaccination special characters @sanity', async ({ page }) => {
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

test('C15237380: Verify search with no matching records @sanity', async ({ page }) => {
  const searchVaccinationPage = new SearchVaccinationPage(page);

  await searchVaccinationPage.goto();
  await searchVaccinationPage.fillSearchCriteria({
    firstName: 'Mohan',
    lastName: 'Das',
  });
  await searchVaccinationPage.search();
  await expect(page.locator('.InformationBg, .ErrorBg')).toContainText(
    'There are no employees available for the search performed.',
  );
});
