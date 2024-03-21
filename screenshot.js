const puppeteer = require('puppeteer');
const cron = require('node-cron');

async function takeScreenshot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1920, height: 1080 }); // Set viewport size

    await page.goto('https://app.powerbi.com/view?r=eyJrIjoiNzQyYmQ2NWEtMDQ4Yy00NzRlLTkwNmQtYzQwZWJjYWRhZTk1IiwidCI6IjgzYTAwNTRhLTYwY2UtNDYxZi1hMWY2LTBlNzJkMDNjOGRiYiJ9'); // Replace with the correct path to your HTML file

    // Introduce a delay of 2000 milliseconds for the map to load completely
    await new Promise(resolve => setTimeout(resolve, 20000));

    const screenshotPath = `C:/Users/VENKATA SAI/Desktop/maps/${Date.now()}.png`;

    await page.screenshot({ path: screenshotPath });

    console.log(`Screenshot saved to ${screenshotPath}`);

    await browser.close();
}

// Schedule the task to run at 1:30 AM every day
cron.schedule('57 1 * * *', async () => {
    console.log('Running scheduled task...');
    await takeScreenshot();
});
