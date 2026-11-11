import { Page, Locator, expect } from '@playwright/test';
import { log } from 'node:console';

export class LoginPage {

    private readonly page: Page;
    //locators
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly capchaText: Locator;
    private readonly capchaInputField: Locator;
    private readonly loginSubmit: Locator;
    private readonly logout: Locator;
    private readonly txtErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator('#ctl00_MedtrackContentPlaceHolder_UserName');
        this.password = page.locator('#ctl00_MedtrackContentPlaceHolder_Password');
        this.capchaText = page.locator('#captchaText');
        this.capchaInputField = page.locator('#captchaInput');
        this.loginSubmit = page.locator('#ctl00_MedtrackContentPlaceHolder_bLogin');
        this.logout = page.locator('#ctl00_loginView_btnLogout');
        this.txtErrorMessage = page.locator("//div[@class='ErrorBg']");
    }

    async goto() {
        await this.page.goto('/');
        await expect(this.username).toBeVisible();
    }

    //action methods
    async setUsername(username: string) {
        await this.username.fill(username);
    }

    async setPassword(password: string) {
        await this.password.fill(password);
    }
    async setCapcha(_capchaInputField?: string) {
        const captchaText = await this.capchaText.textContent();
        const numbers = captchaText?.match(/\d+/g);

        if (!numbers || numbers.length < 2) {
            throw new Error('The login CAPTCHA did not contain a readable addition problem.');
        }

        const answer = Number(numbers[0]) + Number(numbers[1]);
        //await this.capchaInputField.fill(String(answer));
        await this.capchaInputField.pressSequentially(String(answer));
        await this.capchaInputField.press('Tab');
    }
    async clickLogin() {
        await this.page.locator('body').click();
        await this.loginSubmit.click();
    }
    async verifyLoginSuccess() {
    //await expect(this.page.locator("text=MedFit - Search Employee")).toBeVisible();
    await expect(this.page).toHaveTitle(/Search Employee/i);  }
     async getloginErrorMessage(){
        const errorMessage=await this.txtErrorMessage.textContent();
        log(`Error message is: ${errorMessage}`);
        return errorMessage!.trim();
    }
    async clickLogout() {
        await this.logout.click();
    }


}