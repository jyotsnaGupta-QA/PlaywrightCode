import { randomUUID } from 'node:crypto';
import { Page, test } from '@playwright/test';
import { CreateEmployeePage, type EmployeeFormData } from '../pages/CreateEmployeePage';
import { LoginPage } from '../pages/LoginPage';
import { DataProvider } from '../utils/dataProvider';

type EmployeeScenarioData = Omit<EmployeeFormData, 'firstName' | 'lastName' | 'ginNumber' | 'primaryEmail'>;

const scenarioData: EmployeeScenarioData = DataProvider.getTestDataFromJson(
  'testdata/create-emp-data.json',
);

function createSyntheticEmployee(): EmployeeFormData {
  const suffix = randomUUID().replace(/-/g, '');
  return {
    ...scenarioData,
    firstName: `Qa${suffix.slice(0, 8)}`,
    lastName: `Test${suffix.slice(8, 16)}`,
    ginNumber: `9${suffix.slice(0, 7)}`,
    primaryEmail: `qa-${suffix.slice(0, 20)}@example.invalid`,
  };
}

async function login(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginWithEnvCredentials();
}

test.use({ storageState: { cookies: [], origins: [] } });

test('C8927852 - prepare synthetic employee details without submitting @sanity', async ({ page }) => {
  await login(page);

  const employeePage = new CreateEmployeePage(page);
  const employee = createSyntheticEmployee();
  await employeePage.goto();
  await employeePage.fillEmployeeForm(employee);
  await employeePage.verifyEmployeeForm(employee);
});

test('C8927852 - create employee (persistent; explicit approval required)', async ({ page }) => {
  test.skip(
    process.env.ENABLE_PERSISTENT_EMPLOYEE_TESTS !== 'true',
    'Requires separate approval to create a persistent employee record in a dedicated non-production tenant.',
  );

  await login(page);
  const employeePage = new CreateEmployeePage(page);
  await employeePage.goto();
  await employeePage.fillEmployeeForm(createSyntheticEmployee());
  await employeePage.submit();
  await employeePage.verifyCreationSucceeded();
});

test('C8927853 - reject invalid employee data (persistent submission; explicit approval required)', async ({ page }) => {
  test.skip(
    process.env.ENABLE_PERSISTENT_EMPLOYEE_TESTS !== 'true',
    'Submission is gated because server validation behavior could create or alter an employee record.',
  );

  await login(page);
  const employeePage = new CreateEmployeePage(page);
  const employee = createSyntheticEmployee();
  await employeePage.goto();
  await employeePage.fillEmployeeForm({
    ...employee,
    ginNumber: 'INVALID-GIN',
    primaryEmail: 'not-an-email',
  });
  await employeePage.submit();
  await employeePage.verifyCreationRejected();
});
