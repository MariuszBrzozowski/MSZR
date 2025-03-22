import { Page } from '@playwright/test';

export class CommonElements {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get popupCloseBtn() {
        return this.page.locator("#popup-widget25042-close-icon path");
    }

    get homePageTitle(){
        return this.page.getByRole('heading', { name: 'CandyMapper: The Website That' })
    }

    get joinUsPageHeaderBtn(){
        return this.page.getByRole('link', { name: 'JOIN US' }).first()
    }

    get joinUsPageTitle(){
        return this.page.getByRole('heading', { name: 'Account sign in' })
    }

    get halloweenPartyPageHeaderBtn(){
        return this.page.getByRole('link', { name: 'Halloween Party' }).first()
    }

    get halloweenPartyPageTitle(){
        return this.page.getByRole('heading', { name: 'Halloween Party' })
    }
}