const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///home/cfritz/work/chfritz.github.io/blaze.html', {waitUntil: 'networkidle2'});
  const html = await page.content();

  console.log(html.replace(/myscript/g, 'script'));
  await browser.close();
})();
