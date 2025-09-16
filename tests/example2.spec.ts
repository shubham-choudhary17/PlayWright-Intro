import { test, expect } from '@playwright/test';

test('Tc1',async ({page})=>{
  await page.goto('https://www.npmjs.com/package/playwright');
  let context = page.context();
 let p1 = await context.newPage();
await p1.goto('https://www.npmjs.com/package/playwright-testing-library');
let browser1 = context.browser();
let b1 = await browser1?.newContext();
let p2 = await b1?.newPage();
await p2?.goto('https://www.youtube.com/');

});