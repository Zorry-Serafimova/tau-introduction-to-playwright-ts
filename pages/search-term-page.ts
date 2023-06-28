import { expect, Locator, Page } from '@playwright/test';

export class SearchTermPage{
    readonly page: Page;
    readonly searchButton: Locator;
    readonly searchDoc: Locator;
    readonly locatorLabel: Locator;
    readonly locatorText: string = 'Quick Guide';

    constructor(page:Page){
        this.page = page;
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.searchDoc = page.getByPlaceholder('Search docs');
        this.locatorLabel = page.getByRole('heading', {name: this.locatorText});
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async inputSearchTerm(searchTerm: string){
        await this.searchDoc.fill(searchTerm);
    }

    async pressDownArrow (){
        await this.searchDoc.press('ArrowDown');
    }

    async enterPress(){
        await this.searchDoc.press('Enter');
    }

    async assertLocatorDescriptionVisible(){
        await expect(this.locatorLabel).toBeVisible();
    }

    async assertPageURL(pageURL:RegExp){
        await expect(this.page).toHaveURL(pageURL);
    }
}
export default SearchTermPage;