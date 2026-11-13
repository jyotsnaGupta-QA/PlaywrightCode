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
    this.fitnessStatus = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlFitnessStatus');
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

  async verifyRecordExists(lastName: string, gin: string) {
    const table = this.page.locator('#ctl00_MedtrackContentPlaceHolder_gdvSearchResult');
    const resultRow = table
      .getByRole('row')
      .filter({ hasText: lastName })
      .filter({ hasText: gin });
    await expect(resultRow).toHaveCount(1);
    await expect(resultRow).toBeVisible();
  }

  async verifyCertificateExpiryDateColumn() {
    const table = this.page.locator('#ctl00_MedtrackContentPlaceHolder_gdvSearchResult');
    await expect(table.getByRole('columnheader', { name: 'Certificate Expiry Date', exact: true })).toBeVisible();
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
    await this.radioButton.click();
  }

  async clickViewExam() {
    await this.viewExamButton.click();
  }

}