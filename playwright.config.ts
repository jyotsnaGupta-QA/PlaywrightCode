import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, devices } from '@playwright/test';

const envFilePath = resolve(process.cwd(), '.env');
if (existsSync(envFilePath)) {
  process.loadEnvFile(envFilePath);
}

export default defineConfig({

  testDir: './tests',

  timeout: 30 * 1000, //30000 ms(30 secs) 
  fullyParallel: false,
  //retries: process.env.CI ? 2 : 0, 
  retries: 1,
  //workers: process.env.CI ? 1 : undefined, 
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],
  use: {
    baseURL: 'https://gocare.msbedrock.com/',
    storageState: 'auth.json',
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure', //headless: false, 
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency 
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary ,
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests 
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});