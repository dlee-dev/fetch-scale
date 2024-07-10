import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, buttonClick } from '../utils/utils';

test('Zero Button clicked', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    await buttonClick(page, '0');
  });