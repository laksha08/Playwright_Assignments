import { test, chromium , firefox } from '@playwright/test';

 //open a Edge browser
 test('launch browser',async() => {
     const browser = await chromium.launch({channel: 'msedge',headless:false})
    const context = await browser.newContext()
     const page = await context.newPage()
     await page.goto('https://www.amazon.ca/?ref_=nav_custrec_signin')
     await page.waitForTimeout(3000)
 })

 //npx playwright test launch.spec.ts

 //open a chrome browser
 test('launch browser1',async() => {
     const browser1 = await chromium.launch({ headless:false})
     const context = await browser1.newContext()
     const page1 = await context.newPage()
  await page1.goto('https://www.amazon.ca/?ref_=nav_custrec_signin')
     await page1.waitForTimeout(3000)
       console.log(await page1.title());
 })


 //page fixture
 test('Amazon Login', async({page}) => {
    await page.goto('https://www.amazon.ca/?ref_=nav_custrec_signin');
    await page.waitForTimeout(3000)
 });

 
//Homework Red Bus and Flipkart in Edge and Firefox Browser Instances

test('Redbus Flipkart', async() => {
    const browserE = await chromium.launch({channel:'msedge', headless : false});
    const contextE = await browserE.newContext();
    const pageE = await contextE.newPage();
    await pageE.goto('https://www.redbus.in');
    await pageE.waitForTimeout(3000)
    console.log(await pageE.title());
    console.log(await pageE.url());

    const browserF = await firefox.launch({headless: false});
    const contextF = await browserF.newContext();
    const pageF = await contextF.newPage();
    await pageF.goto('https://www.flipkart.com')
    await pageF.waitForTimeout(3000);
    console.log(await pageF.title());
    console.log(await pageF.url());
});
//npx playwright test launch.spec.ts