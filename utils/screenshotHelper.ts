import {Page, TestInfo} from '@playwright/test';
import {delay} from './commonHelpers';

export async function captureAndAttachScreenshot(page: Page, testInfo: TestInfo) {
    const screenshotPath = `./playwright-report/${testInfo.title}-${Date.now()}.png`;
    await delay(1500);
    await page.screenshot({path: screenshotPath, fullPage: true});
    await testInfo.attach(testInfo.title, {
        contentType: 'image/png',
        path: screenshotPath,
    });
}