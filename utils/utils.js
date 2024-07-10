import { chromium } from 'playwright';


export async function navigateToFetchSdetChallenge(page) {
  const url = 'http://sdetchallenge.fetch.com/';
  await page.goto(url);
}

export async function buttonClick(page, id) {

  await page.getByRole('button', { name: id }).click();
}

export async function resetButtonClick(page) {

  await buttonClick(page, "reset");
}

export async function weighButtonClick(page) {

  await buttonClick(page, "weigh");
}

  
module.exports = { navigateToFetchSdetChallenge, buttonClick, resetButtonClick, weighButtonClick };