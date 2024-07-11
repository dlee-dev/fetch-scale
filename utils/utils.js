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
  await page.waitForTimeout(3000);

}

export async function getResult(page) {

  const resetButtons = await page.$$('#reset');
  const firstResetButton = resetButtons[0];
  const buttonText = await firstResetButton.textContent();

  return buttonText;
}

export async function getWeighings(page) {

  // Assuming there is an ordered list (ol) on the page
  const olElements = await page.$$('ol'); // Selecting all ordered lists

  for (const olElement of olElements) {
    const liElements = await olElement.$$('li'); // Selecting all list items within the ordered list
    for (const liElement of liElements) {
      const text = await liElement.innerText(); // Getting the inner text of each list item
      console.log(text);
    }
  }

  return olElements;

}

module.exports = { navigateToFetchSdetChallenge, buttonClick, resetButtonClick, weighButtonClick, getResult, getWeighings}; 