import { render } from '@testing-library/react';
import App from './App';
import puppeteer from 'puppeteer';
import packageJson from '../package.json';

test('renders learn react link', async() => {
  render(<App />);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(packageJson.homepage);
  const image = await page.screenshot(); 
  expect(image).toMatchImageSnapshot();
  
});
