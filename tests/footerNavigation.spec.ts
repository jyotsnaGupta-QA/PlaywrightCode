import { expect, test } from '@playwright/test';
import { FooterNavigationPage } from '../pages/FooterNavigationPage';

test.use({ storageState: 'playwright/.auth/user.json' });

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Search Employee/i);
});

test('C15239318 - Verify Help Link Navigation @sanity', async ({ page }) => {
  const footerNavigation = new FooterNavigationPage(page);
  const helpPopup = await footerNavigation.openHelp();

  await expect(helpPopup).toHaveURL(/\/HelpFile\/DefaultHelp\/[^/]+\/OnlineHelp\.htm$/i);
  expect(new URL(helpPopup.url()).origin).toBe(new URL(page.url()).origin);

  const tableOfContents = helpPopup.frameLocator('frame[name="TOC"]');
  await expect(tableOfContents.getByRole('link', { name: /Introduction/i }).first()).toBeVisible();

  const helpContent = helpPopup.frameLocator('frame[name="Frame1"]').locator('body');
  await expect(helpContent).not.toContainText(/Requested Resource Not Found/i);
  await expect(helpContent).toContainText(/Introduction|Quick Guide|Help/i);
});

test('C15239319 - Verify Contact Us Link Navigation @sanity', async ({ page }) => {
  const footerNavigation = new FooterNavigationPage(page);
  const contactPopup = await footerNavigation.openContactUs();

  await expect(contactPopup).toHaveURL(/\/StaticContent\/public-contact-us\.html$/i);
  await expect(contactPopup).toHaveTitle(/Contact-Us/i);
});

test('C15239320 - Verify Privacy Policy Link Navigation @sanity', async ({ page }) => {
  const footerNavigation = new FooterNavigationPage(page);
  const privacyPopup = await footerNavigation.openPrivacyPolicy();

  await expect(privacyPopup).toHaveURL(
    /https:\/\/www\.internationalsos\.com\/privacy-centre\/?(?:[?#].*)?$/i,
  );
  await privacyPopup.waitForLoadState('domcontentloaded');
  await expect(privacyPopup).toHaveTitle(/Privacy at International SOS/i);
});
