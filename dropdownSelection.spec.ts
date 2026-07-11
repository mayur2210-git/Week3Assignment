import { test } from "@playwright/test";

test("Create a Lead Functionality using Xpath Locator Strategy", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"FA")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("R");
    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Direct Mail"}); // label 
  //  await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_DIRECTMAIL"}); // value is the most stable way of choosing the dropdown since it is connected to the backend
    //await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 }); // value
  // dropDownValues
    //selectOption("locator",{label:"visible text"})   
  // const dropDownValueOfDirectMail = await page.locator('(//select[@id="createLeadForm_dataSourceId"]/option)[4]').innerText()// DIRECT MAIL this line is targeting all the 13 dropdown values
        // console.log(dropDownValueOfDirectMail);
        // const dropDownValueOfDirectMail = await page.locator('(//select[@id="createLeadForm_dataSourceId"]/option)[5]').innerText()// EMPLOYEE this line is targeting all the 13 dropdown values
        // console.log(dropDownValueOfDirectMail);
   /*      const dropDownValues = page.locator('(//select[@id="createLeadForm_dataSourceId"]/option)') // this line is targeting all the 13 dropdown values
        const dropDownCount = await dropDownValues.count(); // 13

        for (let index = 1; index <= dropDownCount; index++) {
    
           console.log(await page.locator(`(//select[@id="createLeadForm_dataSourceId"]/option)[${index}]`).innerText());           

           }

        await page.waitForTimeout(3000) */

    const dropDownValueOfIndustry = 
    await page.locator('(//select[@id="createLeadForm_industryEnumId"]/option)[5]').innerText()// Industries values.
    console.log(dropDownValueOfIndustry);
    await page.waitForTimeout(3000) 
    
        })


/* Dropdown are of 2 types:

1. Dropdown with select tag.
a. Choose the dropdown value using visible text. : //selectOption("locator",{label:"visible text"})
b. Choose the dropdown value using attribute value. : //selectOption("locator",{value:"attributevalue"})
c. Choose the dropdown value using index. : //selectOption("locator",{index:number})
*/
