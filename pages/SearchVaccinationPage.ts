import { expect, Locator, Page } from '@playwright/test';

export type SearchVaccinationCriteria = {
  lastName?: string;
  firstName?: string;
  status?: string;
  ginNumberOrApplicantId?: string;
  dateOfBirth?: string;
  company?: string;
  vaccineName?: string;
  vaccineBrandName?: string;
  assignmentCountry?: string;
  employeeCategory?: string;
  city?: string;
  area?: string;
};

const vaccinationResultColumns = [
  'Last Name',
  'First Name',
  'Date Of Birth',
  'GIN Number',
  'Company Name',
  'Vaccination Status',
  'Vaccination Date',
  'Vaccine First Shot',
  'Second Shot Date',
  'Vaccine Second Shot',
];

export class SearchVaccinationPage {
  readonly page: Page;

  private readonly vaccinationMenu: Locator;
  private readonly searchVaccinationLink: Locator;
  private readonly pageTitle: Locator;
  private readonly lastName: Locator;
  private readonly firstName: Locator;
  private readonly status: Locator;
  private readonly ginNumberOrApplicantId: Locator;
  private readonly dateOfBirth: Locator;
  private readonly company: Locator;
  private readonly vaccineName: Locator;
  private readonly vaccineBrandName: Locator;
  private readonly assignmentCountry: Locator;
  private readonly employeeCategory: Locator;
  private readonly city: Locator;
  private readonly area: Locator;
  private readonly searchButton: Locator;
  private readonly resetButton: Locator;
  private readonly searchResultsTable: Locator;
  private readonly fieldLabels: string[] = [
    'Last Name',
    'First Name',
    'Status',
    'GIN Number / Applicant ID',
    'Date Of Birth',
    'Company',
    'Vaccine Name',
    'Vaccine Brand Name',
    'Assignment Country',
    'Employee Category',
    'City',
    'Area',
  ];

  constructor(page: Page) {
    this.page = page;
    this.vaccinationMenu = page.getByText('COVID-19 Vaccination', { exact: true });
    this.searchVaccinationLink = page.getByText('Search COVID-19 Vaccination', { exact: true });
    this.pageTitle = page.getByText('Search vaccination status', { exact: true });
    this.lastName = page.locator('#ctl00_MedtrackContentPlaceHolder_txtLastName');
    this.firstName = page.locator('#ctl00_MedtrackContentPlaceHolder_txtFirstName');
    this.status = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlStatus');
    this.ginNumberOrApplicantId = page.locator('#ctl00_MedtrackContentPlaceHolder_txtGinNumber');
    this.dateOfBirth = page.locator('#ctl00_MedtrackContentPlaceHolder_calDateOfBirth_txtDate');
    this.company = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlCompany');
    this.vaccineName = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlVaccineType');
    this.vaccineBrandName = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlVaccineBrand');
    this.assignmentCountry = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlAssignmentCountry');
    this.employeeCategory = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlCategory');
    this.city = page.locator('#ctl00_MedtrackContentPlaceHolder_txtTown');
    this.area = page.locator('#ctl00_MedtrackContentPlaceHolder_ddlArea');
    this.searchButton = page.getByRole('button', { name: 'Search', exact: true });
    this.resetButton = page.getByRole('button', { name: 'Reset', exact: true });
    this.searchResultsTable = page.locator('[id$="gdvSearchResult"]');
  }

  async goto() {
    await this.page.goto('/');
    await this.vaccinationMenu.hover();
    await this.searchVaccinationLink.click();
  }

  async fillSearchCriteria(criteria: SearchVaccinationCriteria) {
    const textFields: Array<[string | undefined, Locator]> = [
      [criteria.lastName, this.lastName],
      [criteria.firstName, this.firstName],
      [criteria.ginNumberOrApplicantId, this.ginNumberOrApplicantId],
      [criteria.dateOfBirth, this.dateOfBirth],
      [criteria.city, this.city],
    ];

    for (const [value, field] of textFields) {
      if (value !== undefined) {
        await field.fill(value);
      }
    }

    const dropdowns: Array<[string | undefined, Locator]> = [
      [criteria.status, this.status],
      [criteria.company, this.company],
      [criteria.vaccineName, this.vaccineName],
      [criteria.vaccineBrandName, this.vaccineBrandName],
      [criteria.assignmentCountry, this.assignmentCountry],
      [criteria.employeeCategory, this.employeeCategory],
      [criteria.area, this.area],
    ];

    for (const [label, dropdown] of dropdowns) {
      if (label !== undefined) {
        await dropdown.selectOption({ label });
      }
    }
  }

  async search() {
    await this.searchButton.click();
  }

  async reset() {
    await this.resetButton.click();
  }

  async verifySearchResults(ginNumber: string) {
    await expect(this.searchResultsTable).toBeVisible();
    await expect(this.searchResultsTable).toContainText(ginNumber);

    for (const column of vaccinationResultColumns) {
      await expect(
        this.searchResultsTable.getByRole('columnheader', { name: column, exact: true }),
        `${column} result column should be visible`,
      ).toBeVisible();
    }
  }

  async verifyPageElements() {
    await expect(this.pageTitle).toBeVisible();

    for (const label of this.fieldLabels) {
      await expect(
        this.page.getByRole('cell', { name: label, exact: true }),
        `${label} field should be visible`,
      ).toBeVisible();
    }

    await expect(this.searchButton).toBeVisible();
    await expect(this.resetButton).toBeVisible();
  }
}
