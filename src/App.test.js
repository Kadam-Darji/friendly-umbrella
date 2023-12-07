import { render } from '@testing-library/react';
import App from './App';
import puppeteer from 'puppeteer';

test('renders learn react link', async() => {
  render(<App />);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://kadam-darji.github.io/friendly-umbrella");
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});
