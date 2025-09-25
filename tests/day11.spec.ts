import { test } from "@playwright/test";

test.skip('tc1', async ({page}) => {
    
    await page.goto("https://demo.evershop.io/account/login");
    await page.locator("//input[@name='email']").fill('shubham.choudhary@gmail.com');
    await page.locator("//input[@name='password']").fill('password');
    await page.locator("//button[@type='submit']").click();
    await page.pause();
});

test('tc2', async ({ page }) => {
  //await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://demoqa.com/", {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });
  await page.getByText('Elements').click();
 await page.getByText('Text Box').click();
 await page.getByPlaceholder('Full Name').fill('Shubham choudhary');
 await page.locator('#userEmail').fill('shubham@gmail.com');
 await page.locator('#currentAddress').fill('Noida');
 await page.locator('#permanentAddress').fill('India');
 await page.getByText('Submit').click();

});
