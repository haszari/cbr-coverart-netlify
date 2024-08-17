import puppeteer from 'puppeteer';

/**
 * Render specified path to a png image.
 *
 * usage: npm run render-show -- <ymlFile> <outputFile>
 *
 * - Assumes app is running on localhost:3000.
 *   - e.g. `npm start`
 * -
 */
const ymlfile = process.argv[2] || '';
const outputFile = ymlfile || 'test';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 2000 });
  await page.goto(`http://localhost:3000/dj/${ ymlfile }`);

  // Unfortunately, we have to wait for various stuff to load.
  // Fudging this for now, if there are lots of Spotify images this may need to be boosted.
  await new Promise(r => setTimeout(r, 5000));

  const clip = {
    x: 0,
    y: 0,
    width: 1000,
    height: 1000
  };
  await page.screenshot({ path: `renders/${outputFile}.png`, clip });
  clip.y = 1000;
  await page.screenshot({ path: `renders/${outputFile}-tracklist.png`, clip });
  await browser.close();
})();