import puppeteer from 'puppeteer';

/**
 * Render specified path to a png image.
 *
 * usage: npm run render -- <path>
 *
 * - Assumes app is running on localhost:3000.
 *   - e.g. `npm start`
 * - Path must map to a 3000x3000 square image, these are set up in App.js.
 */
const fragment = process.argv[2] || '';
const filename = fragment || 'test';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 3000, height: 3000 });
  await page.goto(`http://localhost:3000/${fragment}`);
  await new Promise(r => setTimeout(r, 10000));
  await page.screenshot({ path: `renders/${filename}.png`});
  await browser.close();
})();