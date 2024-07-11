import { test, expect } from '@playwright/test';
import { navigateToFetchSdetChallenge, weighButtonClick, resetButtonClick, getWeighings, getResult } from '../utils/utils';
import { fillLeftBowl, fillRightBowl, goldBar, leftBowl0, leftBowl1, leftBowl2, rightBowl0, rightBowl1, rightBowl2 } from '../utils/buttonOps';

  /*
  E2E Algorithm in Playwrightjs
  Split gold bars into 3 groups
  Weigh two groups against each other
  Depending on the result, pick the group with fake gold bar
  Weigh two gold bars within fake gold bar group into the two bowls
  Depending on the result, fake gold bar is in either left or right bowl or the one that was not weighed.
  With util functions, algorithm is customizable to change around gold bar groups and make any extension needed
  */
  test('E2E Algorithm', async ({ page }) => {
    await navigateToFetchSdetChallenge(page);

    /*
    Bar numbers within groups can be changed to achieve same correct result
    */
    const group1 = ['2', '3', '4'];
    const group2 = ['5', '6', '7'];
    const group3 = ['0', '7', '8'];

    //Adds bar numbers into grid bowls and then weighs them and gets the result
    await leftBowl0(page, group1[0]);
    await leftBowl1(page, group1[1]);
    await leftBowl2(page, group1[2]);
    await rightBowl0(page, group2[0]);
    await rightBowl1(page, group2[1]);
    await rightBowl2(page, group2[2]);
    await weighButtonClick(page);

    const result1 = await getResult(page);

    //if result is <, then fake gold bar is in group 1 and algorithm is repeated
    if(result1 === '<') {
      await resetButtonClick(page);
      await leftBowl0(page, group1[0]);
      await rightBowl0(page, group1[1]);
      await weighButtonClick(page);
      const result2 = await getResult(page);
      if(result2 === '=') {
        await goldBar(page, group1[2]);
      } else if(result2 === '>') {
        await goldBar(page, group1[1]);
      } else if(result2 === '<') {
        await goldBar(page, group1[0]);
      }
    }

    //if result is >, then fake gold bar is in group 2 and algorithm is repeated
    else if(result1 === '>') {
      await resetButtonClick(page);
      await leftBowl0(page, group2[0]);
      await rightBowl0(page, group2[1]);
      await weighButtonClick(page);
      const result2 = await getResult(page);
      if(result2 === '=') {
        await goldBar(page, group2[2]);
      } else if(result2 === '>') {
        await goldBar(page, group2[1]);
      } else if(result2 === '<') {
        await goldBar(page, group2[0]);
      }
    }

    //if result is =, then fake gold bar is in group 3 and algorithm is repeated
    else if(result1 === '=') {
      await resetButtonClick(page);
      await leftBowl0(page, group3[0]);
      await rightBowl0(page, group3[1]);
      await weighButtonClick(page);
      const result2 = await getResult(page);
      if(result2 === '=') {
        await goldBar(page, group3[2]);
      } else if(result2 === '>') {
        await goldBar(page, group3[1]);
      } else if(result2 === '<') {
        await goldBar(page, group3[0]);
      }
    }


    page.close();

  });