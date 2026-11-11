import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login and save session', async ({ page, context }) => {
  const loginPage = new LoginPage(page);

  await context.clearCookies();
  await loginPage.goto();
  await loginPage.loginWithEnvCredentials();
  await context.storageState({ path: 'auth.json' });
});

