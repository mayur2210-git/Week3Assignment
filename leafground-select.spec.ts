import {expect, test} from "@playwright/test";

test("Verify LeafGround Select Dropdown  using different method", async ({page}) => {

    //1.Navigate to URl
    await page.goto("https://leafground.com/select.xhtml");
    //2.Select Favourite Language PLaywright from automation tool.
    const selectdropdown =await page.locator("//select[@class='ui-selectonemenu']").selectOption({label: "Playwright"})
    // Verify selection Assertion
    await expect(page.locator("//select[@class='ui-selectonemenu']")).toHaveValue("Playwright");

    // 3. Get the count and print all the values
    const options = page.locator('option');
    const optionCount = await options.count();
    console.log(`Total Options: ${optionCount}`);
    for (let i = 0; i < optionCount; i++) {
    console.log(await options.nth(i).textContent());
  }
  // 4. Choose your preferred Country
  await page.locator('#j_idt87\\:country_label').click();
  await page.getByRole('option', { name: 'India' }).click();

  // 5. Confirm Cities belongs to Country is loaded
  await page.locator('#j_idt87\\:city_label').click();

  const cities = page.locator('#j_idt87\\:city_items li');
  await expect(cities.first()).toBeVisible();

  const cityCount = await cities.count();

  console.log('Cities available:');

  for (let i = 0; i < cityCount; i++) {
    console.log(await cities.nth(i).textContent());
  }

  await page.keyboard.press('Escape');

  // Choose any three courses

await page.locator('#j_idt87\\:auto-complete button').click();

const coursePanel = page.locator('#j_idt87\\:auto-complete_panel');
await expect(coursePanel).toBeVisible();
await coursePanel.getByRole('option', { name: 'Selenium WebDriver' }).click();
await coursePanel.getByRole('option', { name: 'Appium' }).click();
await coursePanel.getByRole('option', { name: 'Playwright' }).click();
// Verify 3 courses are selected
await expect.soft(page.locator('.ui-selectcheckboxmenu-token')).toHaveCount(3);
await page.keyboard.press('Escape');

 // 7. Choose a language
await page.locator('#j_idt87\\:lang_label').click();
await page.getByRole('option', { name: 'English' }).click();

// Open Values dropdown
await page.locator('#j_idt87\\:value_label').click();

const values = page.locator('#j_idt87\\:value_items li');
const valueCount = await values.count();

console.log('Available Values:');
    for (let i = 0; i < valueCount; i++) {
    console.log(await values.nth(i).textContent());
  }
  // 8. Select "Two"
  await page.getByText('Two', { exact: true }).click();

  // Verify selection
  await expect(page.locator('#j_idt87\\:value_label')).toHaveText('Two');

});
