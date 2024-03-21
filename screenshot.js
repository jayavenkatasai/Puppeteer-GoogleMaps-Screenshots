const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 }); // Set viewport size

  await page.goto('http://127.0.0.1:5500/googlemaps.html'); // Replace with the path to your HTML file
  
  //await page.waitFor(2000); // Wait for some time for the map to load completely
  await new Promise(resolve => setTimeout(resolve, 20000));

  await page.screenshot({ path: `C:/Users/VENKATA SAI/Desktop/maps/${Date.now()}.png` }); // Replace with the path to your desired folder

  await browser.close();
})();
