import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, buttonClick } from '../utils/utils';

test('has title', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    await page.locator('#left_0').click();
    await page.locator('#left_0').fill('0');
    await buttonClick(page, 'reset');
  });