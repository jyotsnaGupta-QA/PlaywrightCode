import { LoginPage } from '../../pages/LoginPage';
import { expect, tagsFor, test } from './fixtures';

const recovery = '/UserManagement/ForgotPasswordUserName.aspx';
const submit = '#ctl00_MedtrackContentPlaceHolder_bLogin';

test('C8928022 opens the public recovery entry', tagsFor('C8928022'), async ({ page, traffic }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.clickForgotPassword();
  await expect(page).toHaveURL(new URL(recovery, page.url()).href);
  await expect(page.locator('input[type=text]:visible')).toHaveValue('');
  await expect(page.getByRole('button', { name: 'Go', exact: true })).toBeVisible();
  await expect(page.getByText('Back to Log in', { exact: true })).toBeVisible();
  traffic.expectActions();
});

test('C15289383 returns from untouched recovery to login', tagsFor('C15289383'), async ({ page, traffic }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.clickForgotPassword();
  await expect(page).toHaveURL(new URL(recovery, page.url()).href);
  await expect(page.locator('input[type=text]:visible')).toHaveValue('');
  await page.getByText('Back to Log in', { exact: true }).click();
  await expect(page).toHaveURL(new URL('/Login.aspx', page.url()).href);
  await expect(page.locator(submit)).toBeVisible();
  traffic.expectActions();
});

test('C9031928 keeps sign-in disabled with no verification code', tagsFor('C9031928'), async ({ page, traffic }) => {
  const login = new LoginPage(page);
  const draft = 'GoCareSyntheticDraft';
  await login.goto();
  const name = page.locator('#ctl00_MedtrackContentPlaceHolder_UserName');
  const password = page.locator('#ctl00_MedtrackContentPlaceHolder_Password');
  const code = page.locator('#captchaInput');
  await expect(name).toHaveValue('');
  await expect(password).toHaveValue('');
  await expect(code).toHaveValue('');
  await expect(page.locator(submit)).toBeDisabled();
  await login.setUsername(draft);
  await login.setPassword(draft);
  await expect(name).toHaveValue(draft);
  await expect(password).toHaveValue(draft);
  await expect(code).toHaveValue('');
  await expect(page.locator(submit)).toBeDisabled();
  traffic.expectActions();
});

test('C15290451 validates all three registration lookup inputs locally', tagsFor('C15290451'), async ({ page, traffic }) => {
  await new LoginPage(page).goto();
  await page.getByRole('link', { name: 'Employee or Pre-employee', exact: true }).click();
  const destination = new URL('/UserManagement/EmployeeRegistration.aspx', page.url()).href;
  await expect(page).toHaveURL(destination);
  const fields = ['txtEmployeeID', 'txtDateOfBirth', 'txtMedtrackID'].map(
    id => page.locator(`[id$="_${id}"]`),
  );
  for (const input of fields) await expect(input).toHaveValue('');
  const message = page.waitForEvent('dialog').then(async dialog => {
    const text = dialog.message().trim().split(/\r?\n/);
    await dialog.dismiss();
    return text;
  });
  await page.locator('[id$="_btnGetDetails"]').click();
  expect(await message).toEqual([
    'The GIN No. or Applicant ID for Pre-employee is mandatory and cannot be blank.',
    'The Date of Birth is mandatory and cannot be blank.',
    'The International SOS ID is mandatory and cannot be blank.',
  ]);
  await expect(page).toHaveURL(destination);
  for (const input of fields) await expect(input).toHaveValue('');
  traffic.expectActions();
});
