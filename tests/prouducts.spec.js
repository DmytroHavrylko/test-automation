// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button').getByText('Login').click()
});

test('user can go to product page', async ({ page }) => {
  await page.getByText('Sauce Labs Backpack').click()
  await expect(page.locator('#back-to-products')).toBeVisible()
});

// test 'додати подукт в кошик і перевірити що кнопка 'Add to cart' помінялась на  'Remove''

// test 'додати подукт в кошик, перейти на кошик і перевірити що продукт додався'
