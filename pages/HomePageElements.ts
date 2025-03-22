import { Page } from '@playwright/test';

export class HomePageElements {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get selectCountryCodeLocator() {
        return this.page.locator("[id^='iframe-undefined']").first().contentFrame().locator('#tCounty')
    }

    get selectCountryCodeLocatorText() {
        return this.page.locator("[id^='iframe-undefined']").first().contentFrame().locator('#tCounty option:checked').innerText()
    }

    get contactUsFormNameInputBox() {
        return this.page.getByRole('textbox', { name: 'First Name' })
    }

    get contactUsFormSurnameInputBox() {
        return this.page.getByRole('textbox', { name: 'Last Name' })
    }

    get contactUsFormEmailInputBox() {
        return this.page.getByRole('textbox', { name: 'Email*' })
    }

    get contactUsFormPhoneInputBox() {
        return this.page.getByRole('textbox', { name: 'By entering a Phone Number' })
    }

    get contactUsFormMessageInputBox() {
        return this.page.getByRole('textbox', { name: 'Message' })
    }

    get contactUsFormSubmitBtn() {
        return this.page.getByRole('button', { name: 'submit' })
    }

    get contactUsFormConfirmationText() {
        return this.page.getByText('Thank you for your inquiry!')
    }
}