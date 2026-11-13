import { expect, Locator, Page } from '@playwright/test';

export type EmployeeFormData = {
  employeeStatus: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  maritalStatus: string;
  dateOfBirth: string;
  company: string;
  ginNumber: string;
  primaryEmail: string;
};

export class CreateEmployeePage {
  readonly page: Page;
  private readonly pageTitle: Locator;
  private readonly employeeStatus: Locator;
  private readonly title: Locator;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly gender: Locator;
  private readonly maritalStatus: Locator;
  private readonly dateOfBirth: Locator;
  private readonly company: Locator;
  private readonly ginNumber: Locator;
  private readonly primaryEmail: Locator;
  private readonly submitButton: Locator;
  private readonly successMessage: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('#divMainHeading');
    this.employeeStatus = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlType');
    this.title = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlTitle');
    this.firstName = page.locator('#ctl00_MedtrackContentPlaceHolder_txtFirstName');
    this.lastName = page.locator('#ctl00_MedtrackContentPlaceHolder_txtLastName');
    this.gender = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlSex');
    this.maritalStatus = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlMaritalStatus');
    this.dateOfBirth = page.locator('#ctl00_MedtrackContentPlaceHolder_calDateOfBirth_txtDate');
    this.company = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlCompany');
    this.ginNumber = page.locator('#ctl00_MedtrackContentPlaceHolder_txtGINNumber');
    this.primaryEmail = page.locator('#ctl00_MedtrackContentPlaceHolder_txtPrimaryEmail');
    this.submitButton = page.locator('#ctl00_MedtrackContentPlaceHolder_btnSubmit');
    this.successMessage = page.locator('.SuccessBg');
    this.errorMessage = page.locator('.ErrorBg');
  }

  async goto() {
    await this.page.goto('/employee/createEmployee.aspx');
    await expect(this.pageTitle).toBeVisible();
  }

  async fillEmployeeForm(data: EmployeeFormData) {
    await this.employeeStatus.selectOption({ label: data.employeeStatus });
    await this.title.selectOption({ label: data.title });
    await this.gender.selectOption({ label: data.gender });
    await this.maritalStatus.selectOption({ label: data.maritalStatus });
    await this.company.selectOption({ label: data.company });
    await this.lastName.fill(data.lastName);
    await this.firstName.fill(data.firstName);
    await this.dateOfBirth.fill(data.dateOfBirth);
    await this.ginNumber.fill(data.ginNumber);
    await this.primaryEmail.fill(data.primaryEmail);
  }

  async verifyEmployeeForm(data: EmployeeFormData) {
    await expect(this.firstName).toHaveValue(data.firstName);
    await expect(this.lastName).toHaveValue(data.lastName);
    await expect(this.dateOfBirth).toHaveValue(data.dateOfBirth);
    await expect(this.ginNumber).toHaveValue(data.ginNumber);
    await expect(this.primaryEmail).toHaveValue(data.primaryEmail);
    await expect(this.employeeStatus.locator('option:checked')).toHaveText(data.employeeStatus);
    await expect(this.title.locator('option:checked')).toHaveText(data.title);
    await expect(this.gender.locator('option:checked')).toHaveText(data.gender);
    await expect(this.maritalStatus.locator('option:checked')).toHaveText(data.maritalStatus);
    await expect(this.company.locator('option:checked')).toHaveText(data.company);
  }

  async submit() {
    await this.submitButton.click();
  }

  async verifyCreationSucceeded() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText(/success|created/i);
  }

  async verifyCreationRejected() {
    await expect(this.errorMessage).toBeVisible();
  }
}
