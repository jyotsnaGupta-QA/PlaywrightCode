import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SearchEmployeePage } from '../pages/SearchEmployeePage';
import { DataProvider } from '../utils/dataProvider';


//Load JSON test data logindata.json

const jsonPath = "testdata/logindata.json";
const jsonTestData = DataProvider.getTestDataFromJson(jsonPath);

for (const data of jsonTestData) {
    test(`Login Test with JSON Data: ${data.testName} @sanity`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();   // getting appURL from test.config.ts file

        await loginPage.setUsername(data.username);
        await loginPage.setPassword(data.password);
        await loginPage.setCapcha();
        await loginPage.clickLogin();

        if (data.expectedResult.toLowerCase() === 'success') {
            const searchEmpPage = new SearchEmployeePage(page);
            const isLoggedIn = await searchEmpPage.isMySearchPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else {
            const errorMessage = await loginPage.getloginErrorMessage();
            expect(errorMessage).toBe('Your user name or password is incorrect. Please try again.');
        }
    })

}