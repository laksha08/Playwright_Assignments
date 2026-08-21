import { test, expect } from '@playwright/test';

//classromm activity
test('playwright selectors', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.getByText('Username', { exact: true }).fill('DemoCSR')
    await page.getByLabel('Password', { exact: true }).fill('crmsfa')
    await page.getByRole('button', { name: "Login" }).click()
    await page.getByText('CRM/SFA').click()
    await page.getByText('Leads', { exact: true }).click()
})

//Homework
//Assignment 1 Create a Lead
test('Create a Lead', async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByText('CRM/SFA').click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', { name: 'Create Lead' }).click()
    await page.locator('#createLeadForm_companyName').fill('Butterfly')
    await page.locator('#createLeadForm_firstName').fill('Aryan')
    await page.locator('#createLeadForm_lastName').fill('Sree')
    await page.locator('#createLeadForm_personalTitle').fill('Mrs.')
    await page.locator('#createLeadForm_generalProfTitle').fill('TL')
    await page.locator('#createLeadForm_annualRevenue').fill('1000')
    await page.locator('#createLeadForm_departmentName').fill('Banking')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567')
    await page.locator("//input[@value='Create Lead']").click()
    await expect(page.getByText("Butterfly")).toBeVisible()
    await expect(page.getByText("Aryan")).toBeVisible()
    await expect(page.getByText("Sree")).toBeVisible()
    await expect(page.getByText("Assigned")).toBeVisible()
    console.log(await page.title())
})

//Assignment 2 Edit a Lead
test ('Edit a Lead', async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByText('CRM/SFA').click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', { name: 'Find Leads' }).click()
    await page.getByRole('textbox', { name: 'First name:' }).fill('a')
    await page.getByRole('button', { name: "Find Leads" }).click()
    await page.locator("//a[@class='linktext']").nth(3).click()
    await page.getByRole('link', { name: 'Edit' }).click()
    await page.locator('#updateLeadForm_companyName').fill('ZZZ Company')
    await page.locator('#updateLeadForm_annualRevenue').fill("111111")
    await page.locator('#updateLeadForm_departmentName').fill('Accounting')
    await page.locator('#updateLeadForm_description').fill('Has Been Edited for Testing')
    await page.getByRole('button', { name: "Update" }).click()
    await expect(page.getByText("ZZZ Company")).toBeVisible()
    await expect(page.getByText("$111,111.00")).toBeVisible()
    await expect(page.getByText("Accounting")).toBeVisible()
    await expect(page.getByText("Has Been Edited for Testing")).toBeVisible()
    console.log(await page.title())
})

//npx playwright test Week3Day3.spec.ts

//Assignment 3 Create a new account

test('create a lead', async ({ page }) => {
    await page.goto('https://login.salesforce.com')
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#Login").click()
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/one/one.app")
    await expect(page).toHaveTitle("Home | Salesforce")
    await page.locator("//button[@title='App Launcher']").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator('//div[@data-name="Service"]').click()
    await page.locator("//div[@class='slds-context-bar__label-action slds-p-left_none']").nth(2).click()
    await page.getByRole('menuitem', { name: "New Account" }).click()
    await page.locator("//input[@name='Name']").fill("Testing PW")
    await page.locator('//button[@name="SaveEdit"]').click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page.getByText("Account \"Testing PW\" was created\.")).toBeVisible()
})
