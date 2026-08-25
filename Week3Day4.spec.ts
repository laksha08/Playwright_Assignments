import { test, expect } from '@playwright/test';

//Classroom Activity
test('Assertions', async ({ page }) => {
    await page.goto('https://leafground.com/input.xhtml')
    await expect(page.getByRole('textbox', { name: 'Disabled' })).toBeDisabled()
    await expect(page.getByRole('textbox', { name: "Babu Manickam" })).toBeEditable()
    await page.getByRole('textbox', { name: "Babu Manickam" }).fill("ssss")
    await expect.soft(page.getByRole("textbox")).toBeDisabled()
    await page.getByRole('textbox', { name: "About yourself " }).fill('Playwright Learning')
})

//Homework Leafground Checkbox
test('checkbox', async ({ page }) => {
    await page.goto('https://leafground.com/checkbox.xhtml')
    await page.getByText("Basic", { exact: true }).click();
    await page.getByText("Ajax", { exact: true }).click();
    await expect(page.getByText('Checked')).toBeVisible()
    await page.getByText('Javascript').check()
    const triStateCheckbox = page.locator("div[id='j_idt87:ajaxTriState'] .ui-chkbox-box");
    await triStateCheckbox.click();
    const triStateInput = page.locator('#j_idt87\\:ajaxTriState_input');
    const value = await triStateInput.inputValue();
    if (value === '0') {
        console.log('Unchecked');
    } else if (value === '1') {
        console.log('Checked');
    } else if (value === '2') {
        console.log('Indeterminate');
    }
    await page.locator("//div[@class='ui-toggleswitch-slider']").click()
    await expect(page.getByText('Checked')).toBeVisible()
    const checkbox = page.getByRole("checkbox", { name: 'Disabled' })
    await expect(checkbox).toBeDisabled()
    await page.locator("div[id='j_idt87:multiple'] .ui-selectcheckboxmenu-trigger").click();
    const panel = page.locator('.ui-selectcheckboxmenu-panel');
    await panel.getByText('Paris', { exact: true }).click()
    await panel.getByText("London", { exact: true }).click()
    await panel.getByRole('link', { name: "Close" }).click()

})

//npx playwright test Week3Day4.spec.ts

//Homework Leafground Dropdown

test('Leafground Dropdown', async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml")
    await page.locator('[class="ui-selectonemenu"]').selectOption({ label: "Playwright" })
    const tool = await page.locator("//select[@class='ui-selectonemenu']//option").allTextContents()
    tool.shift()
    console.log(tool)
    await page.locator("//label[@class='ui-selectonemenu-label ui-inputfield ui-corner-all']").nth(0).click()
    await page.getByRole("option", { name: 'India' }).click()
    const city = page.locator("//select[@id='j_idt87:city_input']//option")
    await expect(city).toContainText(['Bengaluru', 'Chennai', 'Delhi'])
    await page.locator("//span[@class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s']").click()
    await page.locator("//li[text()='Playwright']").click()
    await page.locator("//span[@class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s']").click()
    await page.getByRole("option", { name: "AWS" }).click()
    await page.locator("//span[@class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s']").click()
    await page.getByRole("option", { name: "Appium" }).click()
    await page.locator("//label[text()='Select Language']").click()
    await page.getByRole("option", { name: "Tamil" }).click()
    const language = await page.locator("//select[@id='j_idt87:lang_input']//option").allTextContents()
    language.shift()
    console.log(language)
    await page.locator("//label[text()='Select Values']").click()
    await page.getByRole("option", { name: "இரண்டு" }).click()
})


//Homework LeafGround Radio Button 

test('Radio Button', async ({ page }) => {
    await page.goto("https://leafground.com/radio.xhtml")
    await expect(page.locator("//input[@value='Option3']")).toBeChecked()
    await expect(page.locator("//input[@value='21-40 Years']")).toBeChecked()
    await page.locator("//label[text()='Chrome']").first().check()
    await expect(page.locator("//label[text()='Chrome']").first()).toBeEnabled()
    await page.locator("//label[text()='Chennai']").check()
    await page.locator("//label[text()='41-60 Years']").check()
    await expect(page.locator("//input[@value='21-40 Years']")).not.toBeChecked()
})

//Homework AutoWaiting

test("Auto Waiting", async ({ page }) => {
    await page.goto("https://leafground.com/waits.xhtml")
    await page.locator("//span[text()='Click']").first().waitFor({ state: 'visible' })
    await page.locator("//span[text()='Click']").first().click()
    await page.locator("//span[text()='I am about to hide']").click()
    await page.locator("//span[text()='Click']").nth(1).click()
    await page.getByRole("button", { name: 'I am about to hide' }).waitFor({ state: 'hidden' })
    await page.locator("//span[text()='Click First Button']").click()
    await expect(page.locator("//span[text()='Click Second']")).toBeVisible()
    await page.locator("//span[text()='Click Second']").click()
    await page.locator("//span[text()='I am going to change!']").click()
    await page.locator("//span[text()='Click']").nth(2).click()
    await page.locator("//span[text()='Did you notice?']").waitFor({ state: 'visible' })
    await page.locator("//span[text()='Did you notice?']").click()

})


//Storage State Validation

test.use({ storageState: 'Data/login_SF.json' });
test("Storage State", async ({ page }) => {
    page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await page.getByTitle('App Launcher', { exact: true }).click();
    await page.getByText('View All', { exact: true }).click();

})