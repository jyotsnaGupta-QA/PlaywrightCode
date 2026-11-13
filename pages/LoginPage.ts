import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly captchaText: Locator;
    private readonly captchaInput: Locator;
    private readonly loginSubmit: Locator;
    private readonly logout: Locator;
    private readonly errorMessage: Locator;
    private readonly forgotPasswordLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator('#ctl00_MedtrackContentPlaceHolder_UserName');
        this.password = page.locator('#ctl00_MedtrackContentPlaceHolder_Password');
        this.captchaText = page.locator('#captchaText');
        this.captchaInput = page.locator('#captchaInput');
        this.loginSubmit = page.locator('#ctl00_MedtrackContentPlaceHolder_bLogin');
        this.logout = page.locator('#ctl00_loginView_btnLogout');
        this.errorMessage = page.locator("//div[@class='ErrorBg']");
        this.forgotPasswordLink = page.getByRole('link', { name: /forgot.*password.*unlock/i });
    }

    async goto() {
        await this.page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await expect(this.username).toBeVisible({
        timeout: 30000
    });
    }

    async setUsername(username: string) {
        await this.username.fill(username);
    }

    async setPassword(password: string) {
        await this.password.fill(password);
    }

    async setCaptcha() {
        const captchaText = await this.captchaText.textContent();
        const numbers = captchaText?.match(/\d+/g);

        if (!numbers || numbers.length < 2) {
            throw new Error('The login CAPTCHA did not contain a readable addition problem.');
        }

        const answer = Number(numbers[0]) + Number(numbers[1]);
        await this.captchaInput.click();
        await this.captchaInput.pressSequentially(String(answer));
        await this.captchaInput.press('Tab');
    }

    async clickLogin() {
        await this.loginSubmit.click();
    }

    async clearCredentials() {
        await this.username.fill('');
        await this.password.fill('');
    }

    async verifyLoginButtonEnabled() {
        await expect(this.loginSubmit).toBeEnabled();
    }

    async clickForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    async loginWithEnvCredentials() {
        const username = process.env.MEDTRACK_USERNAME;
        const password = process.env.MEDTRACK_PASSWORD;

        if (!username || !password) {
            throw new Error('Set MEDTRACK_USERNAME and MEDTRACK_PASSWORD in .env to run the login test.');
        }

        await this.setUsername(username);
        await this.setPassword(password);
        await this.setCaptcha();
        await this.clickLogin();
        await this.verifyLoginSuccess();
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveTitle(/Search Employee/i);
    }

    async verifyLoginErrorMessage(message: string) {
        await expect(this.errorMessage).toHaveText(message);
    }

    async clickLogout() {
        await this.logout.click();
    }

}