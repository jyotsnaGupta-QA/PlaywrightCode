import { randomInt, randomUUID } from 'node:crypto';
import { expect, test } from '@playwright/test';
import { CreateEmployeePage, type EmployeeFormData } from '../pages/CreateEmployeePage';
import { SearchEmployeePage } from '../pages/SearchEmployeePage';
import { DataProvider } from '../utils/dataProvider';

type EmployeeScenarioData = Omit<EmployeeFormData, 'firstName' | 'lastName' | 'ginNumber' | 'primaryEmail'>;

const scenarioData: EmployeeScenarioData = DataProvider.getTestDataFromJson(
  'testdata/create-emp-data.json',
);

test.use({ screenshot: 'off', video: 'off', trace: 'off' });

function createSyntheticEmployee(): EmployeeFormData {
  const suffix = randomUUID().replace(/-/g, '');
  const alphabeticSuffix = suffix.replace(/[0-9a-f]/g, (hex) =>
    String.fromCharCode('a'.charCodeAt(0) + Number.parseInt(hex, 16)),
  );
  return {
    ...scenarioData,
    firstName: `Qa${alphabeticSuffix.slice(0, 8)}`,
    lastName: `Test${alphabeticSuffix.slice(8, 16)}`,
    ginNumber: `9${randomInt(0, 10_000).toString().padStart(4, '0')}`,
    primaryEmail: 'jyotsna.gupta@internationalsos.com',
  };
}

async function createEmployeeWithUnusedGIN(searchEmployeePage: SearchEmployeePage) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const employee = createSyntheticEmployee();
    await searchEmployeePage.searchByGIN(employee.ginNumber);

    if (!(await searchEmployeePage.hasRecordWithGIN(employee.ginNumber))) {
      return employee;
    }
  }

  throw new Error('Could not generate an unused synthetic GIN after five attempts.');
}

test.describe('Employee creation and search', () => {
  test.describe.configure({ mode: 'serial', retries: 0 });

  test('C8927852 + C8927857 - create employee and verify it through search @sanity', async ({ page }, testInfo) => {
    test.skip(
      process.env.ENABLE_EMPLOYEE_CREATION_TEST !== 'true',
      'Persistent UAT operation: explicit approval is required to create a synthetic employee.',
    );
    test.skip(
      process.env.MEDTRACK_NOTIFICATION_SINK_CONFIRMED !== 'true',
      'This flag is an operator attestation only; independently verify email/SMS routing to the isolated sink before running.',
    );

    const searchEmployeePage = new SearchEmployeePage(page);
    await page.goto('/employee/searchEmployee.aspx');
    await expect(searchEmployeePage.pageHeading).toBeVisible();
    const employee = await createEmployeeWithUnusedGIN(searchEmployeePage);
    testInfo.annotations.push({
      type: 'synthetic-employee-gin',
      description: employee.ginNumber,
    });

    const createEmployeePage = new CreateEmployeePage(page);
    await createEmployeePage.goto();
    await createEmployeePage.fillEmployeeForm(employee);
    await createEmployeePage.submit();
    await createEmployeePage.verifyCreationSucceeded();

    await page.goto('/employee/searchEmployee.aspx');
    await expect(searchEmployeePage.pageHeading).toBeVisible();
    await searchEmployeePage.searchByGIN(employee.ginNumber);
    await searchEmployeePage.verifyEmployeeDetails(
      employee.firstName,
      employee.lastName,
      employee.ginNumber,
    );
  });
});
