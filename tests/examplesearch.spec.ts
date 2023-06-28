import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import {SearchTermPage} from '../pages/search-term-page';

const URL = 'https://playwright.dev/';
let homePage: HomePage;
let searchPage: SearchTermPage;
const pageUrl = /.*locators/;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    searchPage = new SearchTermPage(page);
});

async function clickSearch(term:string) {
    await searchPage.clickSearchButton();
    await searchPage.inputSearchTerm(term);
}

test.describe('Playwright Search', ()=> {

    test('search', async ()=>{
        await clickSearch('Guide');
        //await searchPage.inputSearchTerm('Locator');
        await searchPage.pressDownArrow();
        await searchPage.enterPress();

       // await searchPage.assertPageURL(pageUrl);
        console.log(pageUrl);
        await searchPage.assertLocatorDescriptionVisible();
    });
});