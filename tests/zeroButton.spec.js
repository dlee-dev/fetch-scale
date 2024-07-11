import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, buttonClick } from '../utils/utils';

test('Zero', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    await buttonClick(page, '0');
  });