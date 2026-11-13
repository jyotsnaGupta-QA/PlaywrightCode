
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.use({ storageState: { cookies: [], origins: [] } });

test('C8928019 - login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginWithEnvCredentials();
});