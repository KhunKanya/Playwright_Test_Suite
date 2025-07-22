const { test, expect } = require('@playwright/test');

test('LocalMultipleElement', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    /*const links = await page.$$('a');

    for(const link of links )
    {
        const linktext= await link.textContent();
        console.log(linktext);
    }
    */
   page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
   const products=await page.$$("//div[@id='tbodyid']//div//h4/a")

   for(const product of products)
   {
        await products.textContent();
        console.log(productname)
   }

})