import { test } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { LoginPage } from '../pages/LoginPage';

const authStatePath = 'playwright/.auth/user.json';

test.use({ storageState: { cookies: [], origins: [] } });

test('Login and save session', async ({ page, context }) => {
  const loginPage = new LoginPage(page);

  await context.clearCookies();
  await loginPage.goto();
  await loginPage.loginWithEnvCredentials();
  await mkdir(dirname(authStatePath), { recursive: true });
  await context.storageState({ path: authStatePath });
});

