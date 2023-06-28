import { test, expect } from '@playwright/test';

test('check swag labs login page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs')
});

test.only('check login', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('problem_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('Login', {exact:true}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Sauce Labs Bolt T-Shirt',{exact: true})).toBeVisible();
    const bikeLightText = `A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.`;
    await expect(page.getByText(bikeLightText)).toBeVisible();
});

