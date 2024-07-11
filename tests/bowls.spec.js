import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge } from '../utils/utils';
import { fillLeftBowl, fillRightBowl, rightBowl0 } from '../utils/buttonOps';


// c. Filling out the bowls with bar numbers (0 to 8)

//Left Bowl Grid Fill
test('Left Bowl Fill Grid', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await fillLeftBowl(page);
    page.close();

  });

  //Right Bowl Grid Fill
  test('Right Bowl Fill Grid', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await fillRightBowl(page);
    page.close();

  });