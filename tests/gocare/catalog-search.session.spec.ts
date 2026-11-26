import * as XLSX from 'xlsx';
import type { Page } from '@playwright/test';
import { expect, tagsFor, test } from './fixtures';
import { field, openCatalog, selected, url, validationMessages } from './catalog-ui';

const company = 'MY COMPANY';
const absent = 'QAFixtureGarnetAbsent';
const fitnessPath = '/Company/FitnessConclusion.aspx';
const menuPath = '/Company/CompanyMenuItem.aspx';
const noConclusions = 'There are no fitness conclusions available for the search performed.';

for (const scenario of [
  {
    id: 'C8934396', path: '/Company/CompanyJobSite.aspx', input: 'txtSite',
    grid: 'gdvCompanyJobSite', flag: '', column: /^Active\??$/i,
    noMatch: 'There are no job sites available for the search performed.',
  },
  {
    id: 'C8934401', path: '/Company/CompanyJobTitle.aspx', input: 'txtTitle',
    grid: 'gdvCompanyJobTitle', flag: 'chkActiveUser', column: /^Active\??$/i,
    noMatch: 'There are no job titles available for the search performed.',
  },
  {
    id: 'C8934406', path: '/Company/CompanyEmpCategory.aspx', input: 'txtCompEmpCatName',
    grid: 'gdvCompanyEmpCategory', flag: 'chkIsISOSRecommended', column: /handled by intl/i,
    noMatch: 'There are no employee categories available for the search performed.',
  },
]) {
  test(`${scenario.id} verifies scoped catalog results and a synthetic empty state`,
    tagsFor(scenario.id), async ({ page, traffic }) => {
      const { path, input, flag } = scenario;
      await openCatalog(page, path, ['Company']);
      const owner = field(page, 'ddlCompany');
      const name = field(page, input);
      const checkbox = flag ? field(page, flag) : page.getByLabel('Show only Active', { exact: true });
      const checkboxName = await checkbox.evaluate((node: HTMLInputElement) => node.name.split('$').at(-1)!);
      await owner.selectOption({ label: company });
      await expect(owner).toHaveValue('129');
      await expect(name).toHaveValue('');
      await checkbox.check();
      await expect(checkbox).toBeChecked();
      traffic.allowOnce(path, 'btnSearch', { ddlCompany: '129', [checkboxName]: 'on', [input]: '' });
      await field(page, 'btnSearch').click();
      const grid = field(page, scenario.grid);
      const rows = grid.locator('tr').filter({ has: page.getByRole('cell', { name: company, exact: true }) });
      await expect.poll(() => rows.count()).toBeGreaterThan(0);
      const headings = await grid.locator('tr').first().locator('th, td').allTextContents();
      const statusIndex = headings.findIndex(heading => scenario.column.test(heading.trim()));
      expect(statusIndex, 'Expected filtered result column').toBeGreaterThanOrEqual(0);
      for (const row of await rows.all()) await expect(row.getByRole('cell').nth(statusIndex)).toHaveText('Yes');
      await expect(checkbox).toBeChecked();
      await name.fill(absent);
      await expect(name).toHaveValue(absent);
      await expect(owner).toHaveValue('129');
      traffic.allowOnce(path, 'btnSearch', { ddlCompany: '129', [checkboxName]: 'on', [input]: absent });
      await field(page, 'btnSearch').click();
      await expect(page.getByText(scenario.noMatch, { exact: true })).toBeVisible();
      traffic.expectActions('btnSearch', 'btnSearch');
    });
}

async function openFitness(page: Page) {
  await openCatalog(page, fitnessPath, ['Company']);
  const owner = field(page, 'ddlCompanyName');
  const role = field(page, 'ddlUserRole');
  const conclusion = field(page, 'ddlFitnessConclusion');
  return { owner, role, conclusion };
}

test('C8934463 reports the approved unmatched company fitness selection',
  tagsFor('C8934463'), async ({ page, traffic }) => {
    const { owner, role, conclusion } = await openFitness(page);
    await owner.selectOption({ label: company });
    await role.selectOption({ label: 'Client Reviewer' });
    await conclusion.selectOption({ label: 'Fit with restrictions' });
    await expect(owner).toHaveValue('129');
    await expect(selected(role)).toHaveText('Client Reviewer');
    await expect(selected(conclusion)).toHaveText('Fit with restrictions');
    traffic.allowOnce(fitnessPath, 'btnSearch', {
      ddlCompanyName: '129', ddlUserRole: await role.inputValue(), ddlFitnessConclusion: await conclusion.inputValue(),
    });
    await field(page, 'btnSearch').click();
    await expect(page.getByText(noConclusions, { exact: true })).toBeVisible();
    traffic.expectActions('btnSearch');
  });

test('C8934460 verifies scoped fitness filters, required draft fields and Reset',
  tagsFor('C8934460'), async ({ page, traffic }) => {
    test.setTimeout(60_000);
    const first = await openFitness(page);
    const defaults = await Promise.all([first.owner.inputValue(), first.role.inputValue(), first.conclusion.inputValue()]);
    for (const scenario of [
      { role: 'Partner' },
      { result: 'Fit to work with no restrictions' },
    ]) {
      const { owner, role, conclusion } = await openFitness(page);
      await owner.selectOption({ label: company });
      await expect(owner).toHaveValue('129');
      if (scenario.role) {
        await role.selectOption({ label: scenario.role });
        await expect(selected(role)).toHaveText(scenario.role);
        await expect(conclusion).toHaveValue(defaults[2]);
      }
      if (scenario.result) {
        await conclusion.selectOption({ label: scenario.result });
        await expect(selected(conclusion)).toHaveText(scenario.result);
        await expect(role).toHaveValue(defaults[1]);
      }
      traffic.allowOnce(fitnessPath, 'btnSearch', {
        ddlCompanyName: '129', ddlUserRole: await role.inputValue(), ddlFitnessConclusion: await conclusion.inputValue(),
      });
      await field(page, 'btnSearch').click();
      await expect(page.getByText(noConclusions, { exact: true })).toBeVisible();
    }
    await openFitness(page);
    traffic.allowOnce(fitnessPath, 'btnAdd');
    await field(page, 'btnAdd').click();
    expect(await validationMessages(page, field(page, 'gdvFitnessConclusion_ctl03_btnSave'))).toEqual(expect.arrayContaining([
      'The Company name is mandatory and cannot be blank.',
      'The User role is mandatory and cannot be blank.',
      'The fitness conclusion is mandatory and cannot be blank.',
    ]));
    const { owner, role, conclusion } = await openFitness(page);
    await owner.selectOption({ label: company });
    await role.selectOption({ label: 'Client Reviewer' });
    await conclusion.selectOption({ label: 'Fit to work with no restrictions' });
    const active = field(page, 'chkActive');
    await active.check();
    await expect(active).toBeChecked();
    traffic.allowOnce(fitnessPath, 'btnClearSearch', {
      ddlCompanyName: '129', ddlUserRole: await role.inputValue(), ddlFitnessConclusion: await conclusion.inputValue(),
    });
    await field(page, 'btnClearSearch').click();
    await expect(owner).toHaveValue(defaults[0]);
    await expect(role).toHaveValue(defaults[1]);
    await expect(conclusion).toHaveValue(defaults[2]);
    await expect(active).not.toBeChecked();
    traffic.expectActions('btnSearch', 'btnSearch', 'btnAdd', 'btnClearSearch');
  });

test('C8934520 validates Mobile Menu Item search and required draft inputs', tagsFor('C8934520'), async ({ page, traffic }) => {
  await openCatalog(page, menuPath, ['Company', 'Mobile']);
  const owner = field(page, 'ddlCompany');
  const name = field(page, 'txtAlternateName');
  traffic.allowOnce(menuPath, 'ddlCompany', { ddlCompany: '129', txtAlternateName: '' });
  await owner.selectOption({ label: company });
  await expect(owner).toHaveValue('129');
  await name.fill(absent);
  await expect(name).toHaveValue(absent);
  traffic.allowOnce(menuPath, 'btnSearch', { ddlCompany: '129', txtAlternateName: absent });
  await field(page, 'btnSearch').click();
  await expect(page.getByText('There are no menus for the search performed.', { exact: true })).toBeVisible();
  await name.fill('QA#Fixture');
  await expect(name).toHaveValue('QA#Fixture');
  expect(await validationMessages(page, field(page, 'btnSearch')))
    .toContain('Please enter a valid alternate menu item name');
  await openCatalog(page, menuPath, ['Company', 'Mobile']);
  traffic.allowOnce(menuPath, 'btnAdd');
  await field(page, 'btnAdd').click();
  expect(await validationMessages(page, field(page, 'gdvCompanyMenuItemContent_ctl03_btnSave'))).toEqual(expect.arrayContaining([
    'The Company field is mandatory and cannot be left blank.',
    'The default menu name is mandatory and cannot be blank.',
  ]));
  traffic.expectActions('ddlCompany', 'btnSearch', 'btnAdd');
});

test('C15289382 clears a local synthetic workbook selection on refresh', tagsFor('C15289382'), async ({ page, traffic }) => {
  const path = '/Import/ViewImportActivities.aspx';
  await page.goto('/Employee/SearchEmployee.aspx');
  await page.getByRole('link', { name: 'Import Data', exact: true }).hover();
  await page.locator('a[href$="ViewImportActivities.aspx" i]').filter({ visible: true }).click();
  await expect(page).toHaveURL(url(page, path));
  await expect(page).toHaveTitle('MedFit - MedTrack Import');
  const input = field(page, 'btnBrowse');
  await expect(input).toHaveValue('');
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([['GoCare QA']]), 'QA');
  const name = 'gocare-local-selection.xlsx';
  await input.setInputFiles({
    name,
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    buffer: XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' }),
  });
  await expect.poll(() => input.evaluate(node => (node as HTMLInputElement).files?.[0]?.name ?? '')).toBe(name);
  await expect(field(page, 'btnImport')).toBeVisible();
  await page.reload();
  await expect(page).toHaveURL(url(page, path));
  await expect(input).toHaveValue('');
  await expect(field(page, 'btnImport')).toBeVisible();
  traffic.expectActions();
});
