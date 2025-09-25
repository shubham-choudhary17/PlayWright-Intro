import { test } from "@playwright/test";

test('tc1', async ({page}) => {
    
    await page.goto("https://demo.evershop.io/account/login");
    await page.locator("//input[@name='email']").fill('shubham.choudhary@gmail.com');
    await page.locator("//input[@name='password']").fill('password');
    await page.locator("//button[@type='submit']").click();
    await page.pause();
});