// @ts-check
const { test, expect } = require('@playwright/test');

test('chek title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('valid user can login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button').getByText('Login').click()
  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});
// test for standard_user and empty password
test('user can not login with empty password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByRole('button').getByText('Login').click()
  // Expect a title "to contain" a substring.
  await expect(page.getByText('Epic sadface: Password is required')).toBeDisabled
});

// test for locked_out_user
test('locked out user cannot login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('locked_out_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button').getByText('Login').click()
  //await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeDisabled()
  await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible()
});
// test for error_user
test.skip('error user gets error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('error_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button').getByText('Login').click()
  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service.')).toBeVisible()
});

// test for and empty username field
test('empty username field cannot login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button').getByText('Login').click()
  await expect(page.getByText('Epic sadface: Username is required')).toBeVisible()
});
