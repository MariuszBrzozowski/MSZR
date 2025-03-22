import {test, expect} from '@playwright/test';
import { captureAndAttachScreenshot } from '../utils/screenshotHelper';
import {CommonElements} from '../pages/CommonElements';
import {HomePageElements} from "../pages/HomePageElements";
import {generateRandomText, generateRandomNumber} from '../utils/commonHelpers';

test.use({
    video: 'on'
});

test.beforeEach(async ({page}) => {
    await page.goto("https://candymapper.com/");
    await new CommonElements(page).popupCloseBtn.click();
});

test.afterEach(async ({ page }, testInfo) => {
    const videoPath = await page.video()?.path();
    if (videoPath) {
        await testInfo.attach('video', { path: videoPath, contentType: 'video/webm' });
    }
});

test('MSZR - Should load CandyMapper Home page', {
        tag: '@MSZR-BasicTests'
    },
    async ({page}, testInfo) => {
        await captureAndAttachScreenshot(page, testInfo);
        await expect(new CommonElements(page).homePageTitle).toBeVisible()
    });

test('MSZR - Should load CandyMapper Join Us page', {
        tag: '@MSZR-BasicTests'
    },
    async ({page}, testInfo) => {
        const commonElements = new CommonElements(page);
        await commonElements.joinUsPageHeaderBtn.click();
        await captureAndAttachScreenshot(page, testInfo);
        await expect(commonElements.joinUsPageTitle).toBeVisible()
    });

test('MSZR - Should load CandyMapper Halloween Party page', {
        tag: '@MSZR-BasicTests'
    },
    async ({page}, testInfo) => {
        const commonElements = new CommonElements(page);
        await commonElements.halloweenPartyPageHeaderBtn.click();
        await captureAndAttachScreenshot(page, testInfo);
        await expect(commonElements.halloweenPartyPageTitle).toBeVisible()
    });

test.describe('MSZR - Should Slider Challenge country selection', () => {
    [
        ['AS', 'Avon'],
        ['AL', 'Bedfordshire'],
        ['AK', 'Berkshire'],
        ['AZ', 'Bristol']
    ].forEach(([countryCode, associatedValue]) => {
        test(`Should select country code ${countryCode} ${associatedValue}`, async ({ page }, testInfo) => {
            const homePageElements = new HomePageElements(page);
            await homePageElements.selectCountryCodeLocator.selectOption(countryCode);
            await captureAndAttachScreenshot(page, testInfo);
            expect((await homePageElements.selectCountryCodeLocatorText)).toBe(associatedValue);
        });
    });
});

test('MSZR - Should fill up contact us form with correct data', {
        tag: '@MSZR-BasicTests'
    },
    async ({page}, testInfo) => {
        const homePageElements = new HomePageElements(page);

        await homePageElements.contactUsFormNameInputBox.click();
        await homePageElements.contactUsFormNameInputBox.fill(await generateRandomText(10));

        await homePageElements.contactUsFormSurnameInputBox.click();
        await homePageElements.contactUsFormSurnameInputBox.fill(await generateRandomText(10));

        await homePageElements.contactUsFormEmailInputBox.click();
        await homePageElements.contactUsFormEmailInputBox.fill(await generateRandomText(10) + '@test.test');

        await homePageElements.contactUsFormPhoneInputBox.click();
        await homePageElements.contactUsFormPhoneInputBox.fill(await generateRandomNumber(9));

        await homePageElements.contactUsFormMessageInputBox.click();
        await homePageElements.contactUsFormMessageInputBox.fill(await generateRandomText(256));

        await homePageElements.contactUsFormSubmitBtn.click();
        await captureAndAttachScreenshot(page, testInfo);

        await expect(homePageElements.contactUsFormConfirmationText).toBeVisible();
    });

test('MSZR - Should reject invalid data from contact us form', {
        tag: '@MSZR-BasicTests'
    },
    async ({page}, testInfo) => {
        const homePageElements = new HomePageElements(page);

        await homePageElements.contactUsFormNameInputBox.click();
        await homePageElements.contactUsFormNameInputBox.fill(await generateRandomText(10));

        await homePageElements.contactUsFormSurnameInputBox.click();
        await homePageElements.contactUsFormSurnameInputBox.fill(await generateRandomText(10));

        await homePageElements.contactUsFormEmailInputBox.click();
        await homePageElements.contactUsFormEmailInputBox.fill(await generateRandomText(10));

        await homePageElements.contactUsFormPhoneInputBox.click();
        await homePageElements.contactUsFormPhoneInputBox.fill(await generateRandomNumber(9));

        await homePageElements.contactUsFormMessageInputBox.click();
        await homePageElements.contactUsFormMessageInputBox.fill(await generateRandomText(256));

        await homePageElements.contactUsFormSubmitBtn.click();
        await captureAndAttachScreenshot(page, testInfo);

        await expect(homePageElements.contactUsFormConfirmationText).toBeHidden();
    });