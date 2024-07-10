import { chromium } from 'playwright';


export async function navigateToFetchSdetChallenge(page) {
  const url = 'http://sdetchallenge.fetch.com/';
  await page.goto(url);
}

export async function buttonClick(page, id) {

  await page.getByRole('button', { name: id }).click();
}

  
module.exports = { navigateToFetchSdetChallenge, buttonClick };