import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge } from '../utils/utils';
import { fillLeftBowl, fillRightBowl, goldBar0, goldBar1, goldBar2, goldBar3, goldBar4, goldBar5, goldBar6, goldBar7, goldBar8 } from '../utils/buttonOps';

//Test gold bars button at the bottom
test('Gold Bar 0', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar0(page);
    page.close();

  });

  test('Gold Bar 1', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar1(page);
    page.close();

  });

  test('Gold Bar 2', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar2(page);
    page.close();

  });

  test('Gold Bar 3', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar3(page);
    page.close();

  });

  test('Gold Bar 4', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar4(page);
    page.close();

  });

  test('Gold Bar 5', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar5(page);
    page.close();

  });

  test('Gold Bar 6', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar6(page);
    page.close();

  });

  test('Gold Bar 7', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar7(page);
    page.close();

  });

  test('Gold Bar 8', async ({ page }) => {

    await navigateToFetchSdetChallenge(page);
    await goldBar8(page);
    page.close();

  });