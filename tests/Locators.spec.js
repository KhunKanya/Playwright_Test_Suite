// const { test, expect } = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    //click on loggin button - property
    //await page.locator('id=ligin2').click()
    await page.click('id=ligin2')

    //provide username - CSS
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername')
    //await page.fill('#loginusername')

    //provide password
    await page.fill("inout[id='loginpassword']", 'test@123')

    //CLICK on log in button
    await page.click("//button[normalize-space()='Log in']")

    //CLICK logout link presence
    const logoutlink= await page.locator("//a[normalize-space()='log out']")

    await expect(logoutlink).toBeVisible();

    await page.close()
})
