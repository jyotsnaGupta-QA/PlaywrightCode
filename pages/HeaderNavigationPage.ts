import { Locator, Page } from '@playwright/test';

export class HeaderNavigationPage {
  private readonly myDetailsLink: Locator;
  private readonly changePasswordLink: Locator;

  constructor(page: Page) {
    this.myDetailsLink = page.getByRole('link', { name: /my details/i });
    this.changePasswordLink = page.getByRole('link', { name: /change password/i });
  }

  async openMyDetails() {
    await this.myDetailsLink.click();
  }

  async openChangePassword() {
    await this.changePasswordLink.click();
  }
}
