import { chromium } from 'playwright';

export async function leftBowl0(page, bar) {

    await page.locator('#left_0').click();
    await page.locator('#left_0').fill(bar);

}

  export async function leftBowl1(page, bar) {
  
    await page.locator('#left_1').click();
    await page.locator('#left_1').fill(bar);

  
  }
  export async function leftBowl2(page, bar) {
  
    await page.locator('#left_2').click();
    await page.locator('#left_2').fill(bar);

  
  }
  export async function leftBowl3(page, bar) {
  
    await page.locator('#left_3').click();
    await page.locator('#left_3').fill(bar);

  
  }
  export async function leftBowl4(page, bar) {
  
    await page.locator('#left_4').click();
    await page.locator('#left_4').fill(bar);

  
  }
  export async function leftBowl5(page, bar) {
  
    await page.locator('#left_5').click();
    await page.locator('#left_5').fill(bar);

  
  }
  export async function leftBowl6(page, bar) {
  
    await page.locator('#left_6').click();
    await page.locator('#left_6').fill(bar);
  
  }
  export async function leftBowl7(page, bar) {
  
    await page.locator('#left_7').click();
    await page.locator('#left_7').fill(bar);
  
  }
  export async function leftBowl8(page, bar) {
  
    await page.locator('#left_8').click();
    await page.locator('#left_8').fill(bar);

  
  }

export async function rightBowl0(page, bar) {

    await page.locator('#right_0').click();
    await page.locator('#right_0').fill(bar);

  }
  export async function rightBowl1(page, bar) {
  
    await page.locator('#right_1').click();
    await page.locator('#right_1').fill(bar);

  
  }
  export async function rightBowl2(page, bar) {
  
    await page.locator('#right_2').click();
    await page.locator('#right_2').fill(bar);

  
  }
  export async function rightBowl3(page, bar) {
  
    await page.locator('#right_3').click();
    await page.locator('#right_3').fill(bar);

  
  }
  export async function rightBowl4(page, bar) {
  
    await page.locator('#right_4').click();
    await page.locator('#right_4').fill(bar);

  
  }
  export async function rightBowl5(page, bar) {
  
    await page.locator('#right_5').click();
    await page.locator('#right_5').fill(bar);

  }
  export async function rightBowl6(page, bar) {
  
    await page.locator('#right_6').click();
    await page.locator('#right_6').fill(bar);

  
  }
  export async function rightBowl7(page, bar) {
  
    await page.locator('#right_7').click();
    await page.locator('#right_7').fill(bar);

  
  }
  export async function rightBowl8(page, bar) {
  
    await page.locator('#right_8').click();
    await page.locator('#right_8').fill(bar);
  }

  export async function fillLeftBowl(page) {

    await leftBowl0(page, '0');
    await leftBowl1(page, '1');
    await leftBowl2(page, '2');
    await leftBowl3(page, '3');
    await leftBowl4(page, '4');
    await leftBowl5(page, '5');
    await leftBowl6(page, '6');
    await leftBowl7(page, '7');
    await leftBowl8(page, '8');
  
  }
  
  export async function fillRightBowl(page) {
  
    await rightBowl0(page, '0');
    await rightBowl1(page, '1');
    await rightBowl2(page, '2');
    await rightBowl3(page, '3');
    await rightBowl4(page, '4');
    await rightBowl5(page, '5');
    await rightBowl6(page, '6');
    await rightBowl7(page, '7');
    await rightBowl8(page, '8');  
  
  }

  export async function goldBar0(page) {

    await page.getByRole('button', { name: '0' }).click();

  }
  export async function goldBar1(page) {

    await page.getByRole('button', { name: '1' }).click();

  }
  export async function goldBar2(page) {

    await page.getByRole('button', { name: '2' }).click();

  }
  export async function goldBar3(page) {

    await page.getByRole('button', { name: '3' }).click();

  }
  export async function goldBar4(page) {

    await page.getByRole('button', { name: '4' }).click();

  }
  export async function goldBar5(page) {

    await page.getByRole('button', { name: '5' }).click();

  }
  export async function goldBar6(page) {

    await page.getByRole('button', { name: '6' }).click();

  }
  export async function goldBar7(page) {

    await page.getByRole('button', { name: '7' }).click();

  }
  export async function goldBar8(page) {

    await page.getByRole('button', { name: '8' }).click();

  }
  
module.exports = { rightBowl0, rightBowl1, rightBowl2, rightBowl3, rightBowl4, rightBowl5, rightBowl6, rightBowl7, rightBowl8, 
    leftBowl0, leftBowl1, leftBowl2, leftBowl3, leftBowl4, leftBowl5, leftBowl6, leftBowl7, leftBowl8, 
    fillLeftBowl, fillRightBowl, goldBar0, goldBar1, goldBar2, goldBar3, goldBar4, goldBar5, goldBar6, goldBar7, goldBar8 };