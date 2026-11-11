import { Page, Locator, expect } from '@playwright/test';

export class SearchEmployeePage {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly drpCompany: Locator;
  readonly ginNumber: Locator;
  readonly status: Locator;
  readonly category: Locator;
  readonly fitnessStatus: Locator;
  readonly createdByIntlSos: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly advancedSearchLink: Locator;
  readonly searchResults: Locator;
  readonly radioButton: Locator;
  readonly viewExamButton: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('#ctl00_MedtrackContentPlaceHolder_txtFirstName');
    this.lastName = page.locator('#ctl00_MedtrackContentPlaceHolder_txtLastName');
    this.drpCompany = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlCompany');
    this.ginNumber = page.locator('#ctl00_MedtrackContentPlaceHolder_txtGinNumber');
    this.status = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlStatus');
    this.category = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlCategory');
    this.fitnessStatus = page.locator('ctl00_MedtrackContentPlaceHolder_ddlFitnessStatus');
    this.createdByIntlSos = page.locator('#ctl00_MedtrackContentPlaceHolder_chkCreateByISOS');
    this.searchButton = page.locator('#ctl00_MedtrackContentPlaceHolder_btnSearch');
    this.resetButton = page.locator('#ctl00_MedtrackContentPlaceHolder_btnReset');
    this.advancedSearchLink = page.locator('#lnkAdvanceSearch');
    this.searchResults = page.locator('#searchHeading');
    this.radioButton = page.locator('[name="rdoSelect"]');
    this.viewExamButton = page.locator('#ctl00_MedtrackContentPlaceHolder_btnViewExam');
    this.pageHeading = page.locator('//strong[normalize-space()="Search Employees"]');
  }

  async setFirstName(fname: string) {
    await this.firstName.fill(fname);
  }

  async setLastName(lname: string) {
    await this.lastName.fill(lname);
  }

  async setCompany(company: string) {
    await this.drpCompany.selectOption({ label: company });
  }

  async setGIN(gin: string) {
    await this.ginNumber.fill(gin);
  }

  async setStatus(status: string) {
    const options = await this.status.locator('option').allTextContents();
    console.log(options);
    await this.status.selectOption({ label: status });
  }

  async setCategory(category: string) {
    await this.category.selectOption({ label: category });
  }

  async setFitnessStatus(status: string) {
    await this.fitnessStatus.selectOption({ label: status });
  }

  async setCreatedByIntlSos(checked: boolean) {
    if (checked) {
      await this.createdByIntlSos.check();
    } else {
      await this.createdByIntlSos.uncheck();
    }
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async clickReset() {
    await this.resetButton.click();
  }

  async clickAdvancedSearch() {
    await this.advancedSearchLink.click();
  }

  async showSearchResults() {
    const table = this.page.locator('#ctl00_MedtrackContentPlaceHolder_gdvSearchResult');
    await table.waitFor({ state: 'visible', timeout: 10000 });

    if (await table.isVisible()) {
      console.log('Table Exist!');
    } else {
      console.log('Table does not exist!');

      const errorMsg = this.page.locator("//div[@class='ErrorBg']");
      const infoMsg = this.page.locator("//div[@class='InformationBg']");

      if (await errorMsg.isVisible()) {
        console.log('Notification message: ' + await errorMsg.textContent());
      } else if (await infoMsg.isVisible()) {
        console.log('Notification message: ' + await infoMsg.textContent());
      }
    }
  }

  async verifyRecordExists(lastName: string, gin: string) {
    const table = this.page.locator('#ctl00_MedtrackContentPlaceHolder_gdvSearchResult');
    const resultRow = table
      .getByRole('row')
      .filter({ hasText: lastName })
      .filter({ hasText: gin });
    await expect(resultRow).toBeVisible();
  }

  async verifyNoMatchingResults() {
    await expect(this.page.locator('.InformationBg, .ErrorBg')).toContainText(
      'There are no employees available for the search performed.',
    );
  }

  async verifyResetClearedCriteria() {
    await expect(this.lastName).toHaveValue('');
    await expect(this.firstName).toHaveValue('');
    await expect(this.ginNumber).toHaveValue('');
    await expect(this.status.locator('option:checked')).toHaveText('Select Employee Status');
    await expect(this.drpCompany.locator('option:checked')).toHaveText('Select Company');
    await expect(this.category.locator('option:checked')).toHaveText('Select Category');
    //await expect(this.fitnessStatus.locator('option:checked')).toHaveText('Select Fitness Status');
    await expect(this.createdByIntlSos).not.toBeChecked();
  }

  async verifyAdvancedSearchFields() {
    await expect(this.page.getByRole('cell', { name: 'Area', exact: true })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Job Site', exact: true })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Geo Market', exact: true })).toBeVisible();
  }
  async clickRadioButton() {
    await this.radioButton.scrollIntoViewIfNeeded();
    console.log('** Scrolled down to element **');
    await this.radioButton.click();
  }

  async clickViewExam() {
    await this.viewExamButton.click();
  }

  async isMySearchPageExists(): Promise<boolean> {
        try {
            await this.pageHeading.waitFor({ state: 'visible', timeout: 5000 });
            const isVisible = await this.pageHeading.isVisible();
           // log(`My Search Employee page heading visibility: ${isVisible}`);
            return isVisible;
        } catch (error) {
            console.log(`Error checking My Search Employee page heading visibility: ${error}`);
            return false;
        }
    }
}