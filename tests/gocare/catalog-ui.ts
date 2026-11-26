import type { Locator, Page } from '@playwright/test';
import { expect } from './fixtures';

export const field = (page: Page, key: string) => page.locator(`#ctl00_MedtrackContentPlaceHolder_${key}`);
export const selected = (input: Locator) => input.locator('option:checked');
export const url = (page: Page, path: string) => new URL(path, page.url()).href;

export async function openCatalog(page: Page, path: string, groups: string[]) {
  const employee = '/Employee/SearchEmployee.aspx';
  await page.goto(employee, { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveURL(url(page, employee));
  for (const name of ['System Configuration', ...groups]) {
    await page.getByRole('link', { name, exact: true }).filter({ visible: true }).hover();
  }
  await page.locator(`a[href$="${path.split('/').at(-1)}" i]`).filter({ visible: true }).click();
  await expect(page).toHaveURL(url(page, path));
}

export async function validationMessages(page: Page, trigger: Locator) {
  const message = page.waitForEvent('dialog').then(async dialog => {
    const lines = dialog.message().trim().split(/\r?\n/);
    await dialog.dismiss();
    return lines;
  });
  await trigger.click();
  return message;
}
