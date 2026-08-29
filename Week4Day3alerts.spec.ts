import { test, expect } from '@playwright/test';

//classroom activity on alerts
test('alerts', async ({ page }) => {
    await page.goto('https://leafground.com/alert.xhtml')

    page.on('dialog', async (alert) => {
        console.log(alert.message())
        console.log(alert.type())

        if (alert.type() === 'prompt') {
            await alert.accept("Playwright")
        }
    })
    await page.locator("//span[text()='Show']").nth(4).click()
})


//Homework Automating Alert & Frame Interactions
test('Alert Homework', async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.on('dialog', async (alert) => {
        const msg = alert.message()
        console.log(msg)
        const atype = alert.type()
        console.log(atype)
        if (atype === 'confirm') {
            await alert.accept()
        }
        else {
            await alert.dismiss()
        }
    })
    await page.frameLocator("//iframe[@name='iframeResult']").locator("//button[text()='Try it']").click()
    const text = await page.frameLocator("//iframe[@name='iframeResult']").locator("//p[text()='You pressed OK!']").innerText()
    console.log(text)
})

//Homework Frame
test('Home work Frames', async ({ page }) => {
    await page.goto("https://leafground.com/frame.xhtml")
    await page.frameLocator("//iframe[@src='default.xhtml']").locator("//button[text()='Click Me']").click()
    await expect(page.frameLocator("//iframe[@src='default.xhtml']").locator("//button[text()='Hurray! You Clicked Me.']")).toBeVisible()
    const allFrames = page.frames()
    console.log("Number of frames : ", allFrames.length)
    await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator('#frame2').locator
        ("//button[text()='Click Me']").click()
    await expect(page.frameLocator("//iframe[@src='page.xhtml']").frameLocator('#frame2').getByRole
        ("button", { name: 'Hurray! You Clicked Me.' })).toBeVisible()


})