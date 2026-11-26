import { Locator, Page } from '@playwright/test';

export class FooterNavigationPage {
  private readonly page: Page;
  private readonly helpLink: Locator;
  private readonly contactUsLink: Locator;
  private readonly privacyPolicyLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helpLink = page.getByRole('link', { name: 'Help', exact: true });
    this.contactUsLink = page.getByRole('link', { name: 'Contact Us', exact: true });
    this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy', exact: true });
  }

  async openHelp(): Promise<Page> {
    return this.openPopup(this.helpLink);
  }

  async openContactUs(): Promise<Page> {
    return this.openPopup(this.contactUsLink);
  }

  async openPrivacyPolicy(): Promise<Page> {
    return this.openPopup(this.privacyPolicyLink);
  }

  private async openPopup(link: Locator): Promise<Page> {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      link.click(),
    ]);

    return popup;
  }
}
