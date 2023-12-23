import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  // await page.waitForFunction();
  await new Promise(r => setTimeout(r, 10000));
  await page.screenshot({ path: 'renders/test.png'});
  await browser.close();
})();