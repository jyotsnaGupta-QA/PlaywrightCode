import { expect, test } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('GET / returns the application login page', async ({ request }) => {
  const response = await request.get('/');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('text/html');
  expect(await response.text()).toContain('MedTrack Login');
});
