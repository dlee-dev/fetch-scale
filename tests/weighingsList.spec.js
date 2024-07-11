import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, weighButtonClick, resetButtonClick, getWeighings } from '../utils/utils';
import { fillLeftBowl, fillRightBowl, leftBowl0, leftBowl1, leftBowl2, rightBowl0, rightBowl1, rightBowl2 } from '../utils/buttonOps';

  //Get Weighing List
  test('After Weighing Reset', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    await leftBowl0(page, '0');
    await leftBowl1(page, '1');
    await leftBowl2(page, '2');

    await rightBowl0(page, '3');
    await rightBowl1(page, '4');
    await rightBowl2(page, '5');

    await weighButtonClick(page);

    await resetButtonClick(page);
    await leftBowl0(page, '6');
    await rightBowl0(page, '7');

    await weighButtonClick(page);
    
    await getWeighings(page);

    page.close();

  });