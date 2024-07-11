import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, weighButtonClick, resetButtonClick, getWeighings } from '../utils/utils';
import { fillLeftBowl, fillRightBowl, rightBowl0, leftBowl0 } from '../utils/buttonOps';

// a. clicks on Buttons ("Weigh", "Reset")

//Left Bowl Reset
test('Left Bowl Reset', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);


    await fillLeftBowl(page);
    await resetButtonClick(page);
    
    page.close();

  });

  //Right Bowl Reset
  test('Right Bowl Reset', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    await fillRightBowl(page);
    await resetButtonClick(page);
    
    page.close();

  });

    //After Weighing Reset
    test('After Weighing Reset', async ({ page }) => {
        await navigateToFetchSdetChallenge(page);
 
        await leftBowl0(page, '0');
        await rightBowl0(page, '1');
        await weighButtonClick(page);
        
        await getWeighings(page);

        page.close();
    
      });