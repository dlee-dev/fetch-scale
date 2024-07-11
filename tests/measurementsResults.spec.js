import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, weighButtonClick, resetButtonClick, getResult } from '../utils/utils';

    // b. Getting the measurement results (field between the 'bowl's)
    test('Get Measurement Result', async ({ page }) => {

        await navigateToFetchSdetChallenge(page);
        await page.locator('#right_0').click();
        await page.locator('#right_0').fill('0');
        await page.locator('#left_0').click();
        await page.locator('#left_0').fill('1');
        await weighButtonClick(page);
        const result = await getResult(page);
        console.log(result);
        page.close();
    
      });