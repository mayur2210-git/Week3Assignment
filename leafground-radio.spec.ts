import { expect, test } from "@playwright/test";

test("Verify radio button", async ( {page})=>{

//Navigate to URL
await page.goto("https://leafground.com/radio.xhtml");

//Default radio button checked.
const defaultChecked = page.getByRole('radio', { name: 'Safari' });
await expect.soft(defaultChecked).toBeChecked();

//Click your favorite browser and assert it is selected
await page.locator("label[for='j_idt87:console2:0']").click(); // Chrome
const chromeRadio = page.locator('#j_idt87\\:console2\\:0');
await expect(chromeRadio).toBeChecked();
 // 4. Click one of the cities
  await page.locator("label[for='j_idt87:city2:2']").click(); // Chennai
  const cityRadio = page.locator('#j_idt87\\:city2\\:2');
  await expect(cityRadio).toBeChecked();

  // 5. Select the age group and assert the default selected button
  const defaultAge = page.locator('input[name="j_idt87:age"]:checked');
  await expect(defaultAge).toBeChecked();

  const ageValue = await defaultAge.getAttribute('value');
  console.log(`Default selected age group: ${ageValue}`);

  // Select another age group (Optional)
  await page.locator("label[for='j_idt87:age:1']").click();
  await expect(page.locator('#j_idt87\\:age\\:1')).toBeChecked();

})