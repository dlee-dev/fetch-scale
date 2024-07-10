import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://sdetchallenge.fetch.com/');
  await page.locator('#left_0').click();
  await page.locator('#left_0').fill('0');
  await page.locator('#left_1').click();
  await page.locator('#left_1').fill('1');
  await page.locator('#left_2').click();
  await page.locator('#left_2').fill('2');
  await page.locator('#right_0').click();
  await page.locator('#right_0').fill('3');
  await page.locator('#right_1').click();
  await page.locator('#right_1').fill('4');
  await page.locator('#right_2').click();
  await page.locator('#right_2').fill('5');
  await page.getByRole('button', { name: 'Weigh' }).click();
  await page.getByRole('button', { name: '0' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('button', { name: '4' }).click();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: '6' }).click();
  await page.getByRole('button', { name: '7' }).click();
  await page.getByRole('button', { name: '8' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
});