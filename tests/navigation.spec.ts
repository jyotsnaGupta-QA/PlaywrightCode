import { expect, test } from '@playwright/test';
import { HeaderNavigationPage } from '../pages/HeaderNavigationPage';
import { LoginPage } from '../pages/LoginPage';

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginWithEnvCredentials();
});

test('C15239053 - Open My Details page @sanity', async ({ page }) => {
  const header = new HeaderNavigationPage(page);
  await header.openMyDetails();
  await expect(page).toHaveURL(/viewuser/i);
});

test('C15239310 - Open Change Password page @sanity', async ({ page }) => {
  const header = new HeaderNavigationPage(page);
  await header.openChangePassword();
  await expect(page).toHaveURL(/changepassword/i);
});
