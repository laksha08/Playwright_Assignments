import { test , expect } from '@playwright/test';

//Classroom Sequential Approach
test('window Handling' , async({page , context}) => {
    await page.goto("https://www.amazon.ca/?ref_=nav_custrec_signin")
    let searchbox = page.locator("//input[@id='twotabsearchtextbox']")
    await searchbox.fill('Phones')
    await searchbox.press('Enter')
    let parentWindow = context.waitForEvent('page')
    await page.locator("(//h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal'])[1]").click()
    let childWindow = await parentWindow
    const price = await childWindow.locator("//span[@class='a-price-whole']").innerText()
    console.log(price)
    console.log(await childWindow.title())
    console.log(await page.title())
    await childWindow.close()
})

//classroom activity concurrent approach
test('Concurrent approach' , async({page , context}) => {
    await page.goto("https://leafground.com/window.xhtml")
    const [parentpage]  = await Promise.all([context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()])
        const count = parentpage.context().pages()
        console.log(count.length)
        let dashboard : any
        let webtable : any
        for (let i=0 ; i < count.length ; i++ ){
            await page.waitForLoadState('domcontentloaded')
            const title = await count[i].title()
            console.log(title)
        if(title === 'Dashboard'){
            dashboard = count[i]
        }
        else 
            if(title === 'Web Table'){
                webtable = count[i]
            }
        }
        await dashboard.locator("//input[@id='email']").fill('admin')
        await webtable.locator("//input[@placeholder='Search']").fill('Customer')
})

//Homework Window Handling
test.use({
    storageState: 'Data/login_SF.json'
});
test.only('HW Window Handling' , async({page , context}) => {
    await page.goto("https://leaftaps.com/crmsfa/control/leadsMain")
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Merge Leads']").click()
    const [childPage] = await Promise.all([context.waitForEvent('page'),
        page.getByAltText('Lookup' , {exact : true}).first().click()]) 

    await childPage.locator("//a[@class='linktext']").nth(0).click()
    const [childPage1] = await Promise.all([context.waitForEvent('page'),
        page.getByAltText('Lookup' , {exact : true}).nth(1).click()])
    await childPage1.locator("//a[@class='linktext']").nth(5).click()  
    await page.locator("//a[text()='Merge']").click()  

    page.on('dialog', async(alert) => {
        const message = alert.message()
        console.log(message)
        const type = alert.type()
        console.log(type)
        if(type === 'Confirm'){
           await alert.accept()
        } else {
            await alert.dismiss()
        }
    })
    await expect(page).toHaveTitle("/https://leaftaps.com/crmsfa/control/viewLead/")
    })
    //npx playwright test Week4Day4Window.spec.ts