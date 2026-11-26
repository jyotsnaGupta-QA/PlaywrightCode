import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/gocare',
  outputDir: './test-results/gocare',
  timeout: 30_000,
  expect: { timeout: 7_000 },
  retries: 0,
  workers: 1,
  reporter: 'list',
  preserveOutput: 'never',
  use: {
    baseURL: 'https://gocare.msbedrock.com',
    channel: 'chrome',
    headless: false,
    actionTimeout: 8_000,
    acceptDownloads: false,
    serviceWorkers: 'block',
    screenshot: 'off',
    trace: 'off',
    video: 'off',
  },
  projects: [
    { name: 'public', testMatch: '**/*.public.spec.ts' },
    {
      name: 'saved-session',
      testMatch: '**/*.session.spec.ts',
      use: { storageState: 'playwright/.auth/user.json' },
    },
  ],
});
