import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, buttonClick, weighButtonClick, resetButtonClick } from '../utils/utils';

test('Left Bowl Reset', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    //Left Bowl Reset
    await page.locator('#left_0').click();
    await page.locator('#left_0').fill('0');
    await page.locator('#left_1').click();
    await page.locator('#left_1').fill('1');
    await page.locator('#left_2').click();
    await page.locator('#left_2').fill('2');
    await page.locator('#left_3').click();
    await page.locator('#left_3').fill('3');
    await page.locator('#left_4').click();
    await page.locator('#left_4').fill('4');
    await page.locator('#left_5').click();
    await page.locator('#left_5').fill('5');
    await page.locator('#left_6').click();
    await page.locator('#left_6').fill('6');
    await page.locator('#left_7').click();
    await page.locator('#left_7').fill('7');
    await page.locator('#left_8').click();
    await page.locator('#left_8').fill('8');
    await resetButtonClick(page);

  });

  //Right Bowl Reset
  test('Right Bowl Reset', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    await page.locator('#right_0').click();
    await page.locator('#right_0').fill('0');
    await page.locator('#right_1').click();
    await page.locator('#right_1').fill('1');
    await page.locator('#right_2').click();
    await page.locator('#right_2').fill('2');
    await page.locator('#right_3').click();
    await page.locator('#right_3').fill('3');
    await page.locator('#right_4').click();
    await page.locator('#right_4').fill('4');
    await page.locator('#right_5').click();
    await page.locator('#right_5').fill('5');
    await page.locator('#right_6').click();
    await page.locator('#right_6').fill('6');
    await page.locator('#right_7').click();
    await page.locator('#right_7').fill('7');
    await page.locator('#right_8').click();
    await page.locator('#right_8').fill('8');
    await resetButtonClick(page);


  });

    //After Weighing Reset
    test('After Weighing Reset', async ({ page }) => {
        await navigateToFetchSdetChallenge(page);
 
        await page.locator('#right_0').click();
        await page.locator('#right_0').fill('0');
        await page.locator('#left_0').click();
        await page.locator('#left_0').fill('1');
        await weighButtonClick(page);
        await resetButtonClick(page);
    
    
      });