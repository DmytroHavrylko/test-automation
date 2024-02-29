// @ts-check
const { test, expect } = require('@playwright/test');

test('chek title', async ({ page }) => {
  await page.goto('https://www.booking.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Booking.com/);
});

test('chek flights', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  const fligts = await page.getAttribute()
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Booking.com/);
});
