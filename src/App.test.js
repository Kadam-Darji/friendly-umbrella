import { render } from '@testing-library/react';
import App from './App';
import puppeteer from 'puppeteer';
jest.setTimeout(10000);
test('renders learn react link', async() => {
  render(<App />);
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      `--no-sandbox`
      `--disable-setuid-sandbox`
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`
    ],
    slowMo: 50
  });
  const page = await browser.newPage();
  await page.goto("https://kadam-darji.github.io/friendly-umbrella");
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});
