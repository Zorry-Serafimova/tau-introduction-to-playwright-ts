import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

test('search term',async ({page}) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByPlaceholder('Search docs').fill('locators');
    await page.getByPlaceholder('Search docs').press('ArrowDown');
    await page.getByPlaceholder('Search docs').press('Enter');
    await page.getByText('By keeping your Playwright version up to date you will be able to test your app ');
});