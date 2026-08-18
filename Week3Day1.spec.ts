///<reference types = "node" />
import { test , chromium , firefox , expect} from '@playwright/test';

//Classroom Activity

test ('css selectors' , async({page}) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.waitForTimeout(3000)
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('[id="Login"]').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.waitForTimeout(3000)
    await page.locator('[id="Login"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator("[title='Home']")).toBeVisible();
    await page.waitForTimeout(3000)
})

//npx playwright test Week3Day1.spec.ts

//Home work- create a lead using CSS selector
test ('Home work Week3 Day1' , async ({page}) => {
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill("democsr2")
await page.locator('#password').fill('crmsfa')
await page.locator("[value='Login']").click()
await page.locator('a').nth(1).click()
await page.locator('div > a').nth(6).click()
await page.locator('li > a').nth(8).click()
await page.locator ('#createLeadForm_companyName').fill('Infosys')
await page.locator("#createLeadForm_firstName").fill('Sree')
await page.locator('#createLeadForm_lastName').fill('Sh')
await page.locator('#createLeadForm_personalTitle').fill('Mrs')
await page.locator('#createLeadForm_generalProfTitle').fill('Test Lead')
await page.locator('#createLeadForm_annualRevenue').fill('1000')
await page.locator('#createLeadForm_departmentName').fill('EIE')
await page.locator('[name="dataSourceId"]').selectOption({value:''})
const dropDown = page.locator('[name="dataSourceId"]')
const dropDownValue = await dropDown.count()

for (let i = 0; i < dropDownValue; i++) {
    console.log(await dropDown.nth(i).innerText());

    await page.locator('#createLeadForm_primaryPhoneNumber').fill('123123123')
    await page.locator("[value='Create Lead']").click()
    await page.waitForTimeout(5000)
}
})