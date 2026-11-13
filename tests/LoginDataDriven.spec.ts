import { expect, test } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { LoginPage } from '../pages/LoginPage';
import { DataProvider } from '../utils/dataProvider';

test.use({ storageState: { cookies: [], origins: [] } });

type LoginScenario = {
    testRailCaseId: string;
    testName: string;
    scenario: 'blankFields' | 'forgotPassword' | 'invalidPassword' | 'invalidCredentials';
    requiresExplicitOptIn?: boolean;
};

const jsonTestData: LoginScenario[] = DataProvider.getTestDataFromJson('testdata/logindata.json');

for (const data of jsonTestData) {
    test(`${data.testRailCaseId} - ${data.testName} @sanity`, async ({ page }) => {
        if (data.requiresExplicitOptIn && process.env.ENABLE_AUTH_FAILURE_TESTS !== 'true') {
            test.skip(true, 'Authentication failure tests require an isolated test account and explicit opt-in.');
        }

        const loginPage = new LoginPage(page);
        await loginPage.goto();

        if (data.scenario === 'blankFields') {
            await loginPage.clearCredentials();
            await loginPage.setCaptcha();
            await loginPage.verifyLoginButtonEnabled();
            await loginPage.clickLogin();
        } else if (data.scenario === 'forgotPassword') {
            await loginPage.clickForgotPassword();
            await expect(page).toHaveURL(/forgot|unlock/i);
        } else {
            const username = data.scenario === 'invalidCredentials'
                ? `invalid-${randomUUID()}@example.invalid`
                : process.env.MEDTRACK_NEGATIVE_USERNAME;
            if (!username) {
                throw new Error('Set MEDTRACK_NEGATIVE_USERNAME to an isolated non-production test account.');
            }

            const password = `Invalid-${randomUUID()}`;
            await loginPage.setUsername(username);
            await loginPage.setPassword(password);
            await loginPage.setCaptcha();
            await loginPage.clickLogin();
            await loginPage.verifyLoginErrorMessage('Your user name or password is incorrect. Please try again.');
        }
    });
}