const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');
const path = require('path');

// ======================================================
// CONFIGURATION
// ======================================================

const EMPLOYEE_FIRST_NAME = 'Automation';
const EMPLOYEE_GIN_NUMBER = '3393';
const EXCEL_FILE = path.resolve(__dirname, '../../Test.xlsx');
const TEST_ROW = 2;
const TOLERANCE = 0.005;
const FIRST_NAME_LOCATOR = '#ctl00_MedtrackContentPlaceHolder_txtFirstName';
const GIN_LOCATOR = '#ctl00_MedtrackContentPlaceHolder_txtGinNumber';
const SEARCH_BUTTON_LOCATOR = '#ctl00_MedtrackContentPlaceHolder_btnSearch';
const VIEW_EXAM_BUTTON_LOCATOR = '#ctl00_MedtrackContentPlaceHolder_btnViewExam';
const DETAIL_FRAME_URL = /MedicalExamDetail\.aspx/;

// ======================================================
// FIND MEDICAL EXAM DETAILS FRAME
// ======================================================

async function getApplicationScope(page) {
    const detailFrame = page.frame({
        url: DETAIL_FRAME_URL
    });

    if (!detailFrame) {
        throw new Error(
            'Medical Exam Details iframe was not found.'
        );
    }

    await expect(detailFrame.locator('body')).not.toBeEmpty();
    return detailFrame;
}

// ======================================================
// PRINT DIAGNOSTICS
// ======================================================

async function printFrameDiagnostics(scope) {
    const tables = scope.locator('table');

    for (let i = 0; i < await tables.count(); i++) {
        const table = tables.nth(i);
    }

    const inputs = scope.locator('input');

    for (let i = 0; i < await inputs.count(); i++) {
        const input = inputs.nth(i);

    }

}

// ======================================================
// FIND INPUT
// ======================================================

async function findInput(scope, keywords, description, options = {}) {
    const inputs = scope.locator('input');
    const count = await inputs.count();

    for (let i = 0; i < count; i++) {
        const input = inputs.nth(i);

        if (!(await input.isVisible().catch(() => false))) {
            continue;
        }

        const attributes = [
            await input.getAttribute('id') || '',
            await input.getAttribute('name') || '',
            await input.getAttribute('placeholder') || '',
            await input.getAttribute('aria-label') || '',
            await input.getAttribute('title') || ''
        ].join(' ').toLowerCase();

        if (!keywords.some(keyword =>
            attributes.includes(keyword.toLowerCase())
        )) {
            continue;
        }

        if (options.enabled && !(await input.isEnabled())) {
            continue;
        }

        console.log(
            `${description} found:`,
            await input.getAttribute('id') ||
            await input.getAttribute('name') ||
            '(no id/name)'
        );

        return input;
    }

    if (options.fallbackSingle) {
        const candidates = [];

        for (let i = 0; i < count; i++) {
            const input = inputs.nth(i);

            if (
                await input.isVisible().catch(() => false) &&
                await input.isEnabled().catch(() => false) &&
                (await input.getAttribute('type')) === 'text'
            ) {
                candidates.push(input);
            }
        }

        if (candidates.length === 1) {
            return candidates[0];
        }
    }

    throw new Error(`${description} not found.`);
}

// ======================================================
// FIND CURRENCY DROPDOWN
// ======================================================

async function findCurrencyDropdown(scope) {
    const dropdowns = scope.locator('select');
    const visibleDropdowns = [];

    for (let i = 0; i < await dropdowns.count(); i++) {
        const dropdown = dropdowns.nth(i);

        if (!(await dropdown.isVisible().catch(() => false))) {
            continue;
        }

        visibleDropdowns.push(dropdown);

        const attributes = [
            await dropdown.getAttribute('id') || '',
            await dropdown.getAttribute('name') || '',
            await dropdown.getAttribute('aria-label') || '',
            await dropdown.getAttribute('title') || ''
        ].join(' ').toLowerCase();

        if (attributes.includes('currency')) {
            return dropdown;
        }
    }

    if (visibleDropdowns.length === 1) {
        return visibleDropdowns[0];
    }

    throw new Error(
        `Currency dropdown not uniquely identified. Found ${visibleDropdowns.length} visible dropdowns.`
    );
}

// ======================================================
// FIND ADD BUTTON
// ======================================================

async function findAddButton(scope) {
    const buttons = scope.locator(
        'button, input[type="button"], input[type="submit"]'
    );

    const matches = [];

    for (let i = 0; i < await buttons.count(); i++) {
        const button = buttons.nth(i);

        if (!(await button.isVisible().catch(() => false))) {
            continue;
        }

        const text = (await button.innerText().catch(() => '')).trim();
        const value = (await button.getAttribute('value') || '').trim();
        const title = (await button.getAttribute('title') || '').trim();

        if (
            /^add$/i.test(text) ||
            /^add$/i.test(value) ||
            /^add$/i.test(title)
        ) {
            matches.push(button);
        }
    }

    if (matches.length === 1) {
        return matches[0];
    }

    throw new Error(
        `Add button not uniquely identified. Found ${matches.length} matches.`
    );
}

// ======================================================
// FIND COSTING TABLE
// ======================================================

async function findCostingTable(scope) {
    const costingTable = scope.locator('#gdvInvoices');

    if (await costingTable.count() > 0) {
        return costingTable;
    }

    return null;
}
// ======================================================
// FIND EXACT EMPLOYEE SEARCH RESULT
// ======================================================

async function findMatchingEmployeeRow(page) {
    const rows = page.locator('tr:has(td)');

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const cells = row.locator('td');

        if (await cells.count() < 4) {
            continue;
        }

        // 0 = Radio, 1 = Last Name, 2 = First Name, 3 = GIN.
        const firstName = (await cells.nth(2).innerText()).trim();
        const ginNumber = (await cells.nth(3).innerText()).trim();

        if (
            firstName === EMPLOYEE_FIRST_NAME &&
            ginNumber === EMPLOYEE_GIN_NUMBER
        ) {
            return row;
        }
    }

    return null;
}

// ======================================================
// EMPLOYEE SEARCH AND NAVIGATION
// ======================================================

async function navigateToMedicalExamDetails(page) {

    const firstNameInput = page.locator(FIRST_NAME_LOCATOR);
    const ginInput = page.locator(GIN_LOCATOR);

    await expect(firstNameInput).toBeVisible();
    await expect(ginInput).toBeVisible();

    await firstNameInput.fill(EMPLOYEE_FIRST_NAME);
    await ginInput.fill(EMPLOYEE_GIN_NUMBER);

    const searchButton = page.locator(SEARCH_BUTTON_LOCATOR);

    await expect(searchButton).toBeEnabled();
    await searchButton.click();

    // Wait for the exact employee to appear.
    await expect.poll(
        async () => Boolean(await findMatchingEmployeeRow(page)),
        {
            timeout: 30000,
            message: 'Exact employee should appear in search results.'
        }
    ).toBe(true);

    const employeeRow = await findMatchingEmployeeRow(page);

    if (!employeeRow) {
        throw new Error(
            `Employee not found: ${EMPLOYEE_FIRST_NAME}, GIN ${EMPLOYEE_GIN_NUMBER}`
        );
    }

    const employeeRadio = employeeRow.locator(
        'input[type="radio"]'
    );

    await expect(employeeRadio).toBeVisible();
    await employeeRadio.check();


    const viewExamButton = page.locator(
        VIEW_EXAM_BUTTON_LOCATOR
    );

    await expect(viewExamButton).toBeEnabled();
    await viewExamButton.click();

    // Wait for the iframe after View Exam.
    await expect.poll(
        async () => page.frames().some(frame =>
            DETAIL_FRAME_URL.test(frame.url())
        ),
        {
            timeout: 30000,
            message: 'Medical Exam Details iframe should load.'
        }
    ).toBe(true);
}

// ======================================================
// EXCEL HELPERS
// ======================================================

function getNumber(value, description) {
    const cleanedValue = String(value ?? '')
        .replace(/,/g, '')
        .replace(/[^\d.-]/g, '')
        .trim();

    const number = Number(cleanedValue);

    if (cleanedValue === '' || !Number.isFinite(number)) {
        throw new Error(`Invalid ${description}: ${value}`);
    }

    return number;
}

function getCurrencyCode(value) {
    return String(value ?? '')
        .trim()
        .split('|')[0]
        .trim();
}

async function selectCurrency(dropdown, currencyCode) {
    const options = dropdown.locator('option');

    for (let i = 0; i < await options.count(); i++) {
        const option = options.nth(i);
        const label = (await option.innerText()).trim();

        if (
            label === currencyCode ||
            label.startsWith(`${currencyCode} |`) ||
            label.startsWith(`${currencyCode} `)
        ) {
            const value = await option.getAttribute('value');

            if (value === null) {
                throw new Error(
                    `Currency ${currencyCode} has no option value.`
                );
            }

            await dropdown.selectOption(value);

            console.log('Selected currency:', currencyCode);
            return;
        }
    }

    throw new Error(
        `Currency ${currencyCode} not available in dropdown.`
    );
}

function compareAmounts(expected, actual) {
    return Math.abs(expected - actual) <= TOLERANCE;
}

// ======================================================
// MAIN TEST
// ======================================================

test.describe('Costing EUR and USD Validation', () => {

    test('Validate currency conversion using Excel', async ({ page }) => {

        test.setTimeout(180000);

        const workbook = new ExcelJS.Workbook();

        // Read Excel workbook.
        await workbook.xlsx.readFile(EXCEL_FILE);

        const worksheet = workbook.getWorksheet('Sheet1');

        if (!worksheet) {
            throw new Error('Sheet1 not found in Excel file.');
        }

        // Excel column mapping.
        const COL = {
            ORIGINAL_AMOUNT: 1,
            CURRENCY: 2,
            EXPECTED_EUR: 3,
            EXPECTED_USD: 4,
            ACTUAL_EUR: 5,
            ACTUAL_USD: 6,
            EUR_RESULT: 7,
            USD_RESULT: 8,
            OVERALL_RESULT: 9
        };

        // Select Excel rows.
        const rowsToExecute = [];

        if (TEST_ROW !== null) {
            rowsToExecute.push(TEST_ROW);
        } else {
            for (let i = 2; i <= worksheet.rowCount; i++) {
                const row = worksheet.getRow(i);

                if (
                    row.getCell(COL.ORIGINAL_AMOUNT).value != null
                ) {
                    rowsToExecute.push(i);
                }
            }
        }

        if (rowsToExecute.length === 0) {
            throw new Error('No Excel test rows found.');
        }

        // Open GoCare.
        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        // Employee search and navigation.
        await navigateToMedicalExamDetails(page);

        // Identify Medical Exam Details iframe.
        const scope = await getApplicationScope(page);
        // Costing controls
        const originalAmountInput = scope.locator('#txtOriginalAmount');
        const currencyDropdown = scope.locator('#ddlCurrency');
        const eurInput = scope.locator('#txtEUREquivalent');
        const usdInput = scope.locator('#txtUSDEquivalent');
        const addButton = scope.locator('#btnAddInvoice');

        // Print diagnostics.
        await printFrameDiagnostics(scope);

        // Find Costing controls.
        // Check whether the costing grid already exists

        // Wait for costing controls
        await expect(originalAmountInput).toBeVisible({ timeout: 30000 });
        await expect(currencyDropdown).toBeVisible({ timeout: 30000 });
        await expect(addButton).toBeVisible({ timeout: 30000 });

        await originalAmountInput.scrollIntoViewIfNeeded();
        await currencyDropdown.scrollIntoViewIfNeeded();

        await currencyDropdown.scrollIntoViewIfNeeded();

        // Execute Excel rows.
        let passed = 0;
        let failed = 0;

        for (const rowNumber of rowsToExecute) {

            const excelRow = worksheet.getRow(rowNumber);

            let actualEur = '';
            let actualUsd = '';

            let eurResult = 'FAIL';
            let usdResult = 'FAIL';
            let overallResult = 'FAIL';

            try {
                const originalAmount = getNumber(
                    excelRow.getCell(COL.ORIGINAL_AMOUNT).value,
                    'Original Amount'
                );

                const currencyCode = getCurrencyCode(
                    excelRow.getCell(COL.CURRENCY).value
                );

                const expectedEur = getNumber(
                    excelRow.getCell(COL.EXPECTED_EUR).value,
                    'Expected EUR'
                );

                const expectedUsd = getNumber(
                    excelRow.getCell(COL.EXPECTED_USD).value,
                    'Expected USD'
                );

                if (!currencyCode) {
                    throw new Error('Currency is empty.');
                }

                // 1. Enter Original Amount.
                await originalAmountInput.scrollIntoViewIfNeeded();

                await originalAmountInput.fill(
                    String(originalAmount)
                );

                // 2. Select Currency.
                await currencyDropdown.scrollIntoViewIfNeeded();

                await selectCurrency(
                    currencyDropdown,
                    currencyCode
                );

                // 3. Wait for EUR and USD values to populate.
                await expect.poll(
                    async () => {
                        const eurValue = (
                            await eurInput.inputValue()
                        ).trim();

                        const usdValue = (
                            await usdInput.inputValue()
                        ).trim();

                        return (
                            eurValue !== '' &&
                            usdValue !== ''
                        );
                    },
                    {
                        timeout: 20000,
                        message: 'EUR and USD values should populate.'
                    }
                ).toBe(true);

                console.log(
                    'Populated EUR:',
                    await eurInput.inputValue()
                );

                console.log(
                    'Populated USD:',
                    await usdInput.inputValue()
                );

                // 4. Count existing Costing records.
                // Grid may not exist before the first Add.
                let costingTable = await findCostingTable(scope);

                let previousCount = 0;

                if (costingTable) {
                    previousCount = await costingTable
                        .locator('tr:has(td)')
                        .count();
                }

                // 5. Click Add.
                await addButton.scrollIntoViewIfNeeded();
                await expect(addButton).toBeEnabled();
                await addButton.click();

                // 6. Wait for the grid.
                costingTable = scope.locator('#gdvInvoices');

                await expect(costingTable).toBeVisible({
                    timeout: 20000
                });

                const existingRows = costingTable.locator('tr:has(td)');

                await expect.poll(
                    async () => await existingRows.count(),
                    { timeout: 20000 }
                ).toBe(previousCount + 1);

                await scope.waitForTimeout(2000);

                const allTables = scope.locator('table');

                // 7. Read newly added record.
                const newRecord = existingRows.last();

                await expect(newRecord).toBeVisible();

                const cells = newRecord.locator('td');

                if (await cells.count() < 5) {
                    throw new Error(
                        'New Costing record has fewer than 5 cells. Verify table column indexes.'
                    );
                }

                // Table structure:
                // 0 = Invoice Number
                // 1 = Original Amount
                // 2 = Currency
                // 3 = EUR
                // 4 = USD
                // 5 = Actions

                actualEur = getNumber(
                    await cells.nth(3).innerText(),
                    'Actual EUR'
                );

                actualUsd = getNumber(
                    await cells.nth(4).innerText(),
                    'Actual USD'
                );

                // 8. Compare expected and actual amounts.
                eurResult = compareAmounts(
                    expectedEur,
                    actualEur
                ) ? 'PASS' : 'FAIL';

                usdResult = compareAmounts(
                    expectedUsd,
                    actualUsd
                ) ? 'PASS' : 'FAIL';

                overallResult =
                    eurResult === 'PASS' &&
                        usdResult === 'PASS'
                        ? 'PASS'
                        : 'FAIL';

                console.log('\nVALIDATION RESULTS');
                console.log('Expected EUR:', expectedEur);
                console.log('Actual EUR:', actualEur);
                console.log('EUR Result:', eurResult);

                console.log('Expected USD:', expectedUsd);
                console.log('Actual USD:', actualUsd);
                console.log('USD Result:', usdResult);

                console.log('Overall Result:', overallResult);

                if (overallResult === 'PASS') {
                    passed++;
                } else {
                    failed++;
                }

            } catch (error) {
                failed++;
                overallResult = 'FAIL';

            }

            // Update the same Excel file.
            excelRow.getCell(COL.ACTUAL_EUR).value = actualEur;
            excelRow.getCell(COL.ACTUAL_USD).value = actualUsd;

            excelRow.getCell(COL.EUR_RESULT).value = eurResult;
            excelRow.getCell(COL.USD_RESULT).value = usdResult;

            excelRow.getCell(COL.OVERALL_RESULT).value =
                overallResult;

            // Save after each row.
            await workbook.xlsx.writeFile(EXCEL_FILE);

        }
        expect(
            failed,
            `${failed} Costing validation(s) failed. Check Excel results.`
        ).toBe(0);
    });
});