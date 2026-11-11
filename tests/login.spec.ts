
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

let loginPage: LoginPage;
const config = new TestConfig();

test.beforeEach(async ({ page }) => {
    await page.goto(config.appUrl);
    loginPage = new LoginPage(page);
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test('user login test', async ({ page }) => {

    await loginPage.verifyLoginSuccess();
});