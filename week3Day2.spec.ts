import {test , expect  }  from '@playwright/test';

//classroom activity
test ('xpath', async({page}) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator("//input[@id='username']").fill('dilipkumar.rajendran@testleaf.com')
    await page.locator("//input[@id='Login']").click()
await page.locator("//input[@id='password']").fill('TestLeaf@2025')
await page.locator("//input[@id='Login']").click()
await page.waitForTimeout(3000)
})

//npx playwright test week3Day2.spec.ts

//Homework Assignment 1 Create Lead
test('Create Lead', async({page})=> {
    await page.goto('https://login.salesforce.com')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator("//div[@aria-label='App']").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//div[@data-name="Sales"]').click()
    await page.locator("//a[@title='Leads']").click()
    await page.locator("//a[@title='New']").click()
    await page.locator('//button[@aria-label="Salutation"]').click()
    await page.locator("[data-Value='Mrs.']").click()
    await page.locator('//input[@name="lastName"]').fill("Ars")
    await page.locator('//input[@name="Company"]').fill('TestLeaf')
    await page.locator('//button[@name="SaveEdit"]').click()
    await expect(page.getByText('Mrs. ars')).toBeVisible()
    console.log(await page.getByText('Mrs. ars').textContent())
})


//Homework Assignment 2 Edit Lead
test ('Edit Lead', async ({page}) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('DemoCSR')
    await page.locator('#password').fill('crmsfa')
    await page.locator("[value='Login']").click()
    await page.locator('#label').click()
    await page.getByText('Leads',{exact : true} ).click()
    await page.getByText('Create Lead',{exact : true }).click()
    await page.locator('#createLeadForm_companyName').fill('Blueberry')
    await page.locator('#createLeadForm_firstName').fill('Aryan')
    await page.locator('#createLeadForm_lastName').fill('Sree')
    await page.locator("//input[@value='Create Lead']").click()
    await page.getByText('Edit', {exact : true }).click()
    await page.locator('#updateLeadForm_companyName').fill('Blackberry')
    await page.locator("//input[@value='Update']").click()
    await expect(page.getByText('View Lead')).toBeVisible()

})

//Homework Assignment 3 Create Individuals
test('Create Individuals', async({page})=> {
    await page.goto('https://login.salesforce.com')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator("//div[@aria-label='App']").click()
   await page.locator("//button[@aria-label='View All Applications']").click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//p[text()="Individuals"]').click()
    await page.getByRole('link',{name : 'Individuals' }).click
    await page.getByRole('button', { name: 'Individuals List' }).click()
    await page.getByRole('menuitem', {name : 'New Individual'}).click()
    await page.getByText('Last Name',{exact:true}).fill('Laksha')
    await page.locator('//span[text()="Save"]').click()
    await expect(page.getByTitle("Laksha").first()).toBeVisible()
})


//Homework Assignment 4 Edit Individuals
test('Edit Individuals', async({page})=> {
    await page.goto('https://login.salesforce.com')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.locator("//div[@aria-label='App']").click()
   await page.locator("//button[@aria-label='View All Applications']").click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator("//input[@name='Individual-search-input']").fill("Laksha")
    await page.locator("//input[@name='Individual-search-input']").press('Enter')
    await page.getByRole('button' , {name : "Show Actions"}).first().click()
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('button', {name : "Salutation --None--"}).click()
    await page.locator("//a[@title='Mr.']").click()
    await page.getByPlaceholder('First Name',{exact : true }).fill("Sree")
    await page.getByText('Save', {exact : true}).click()
    await expect(page.locator('//span[@data-aura-class="forceActionsText"]')).toContainText("Sree")
 

})