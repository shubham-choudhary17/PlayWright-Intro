import {test} from '@playwright/test';

test("Browser context",async ({browser,context,page})=>{
  //  await page.close();
//let c1 = await browser.newContext(); //new chrome session
let p1 = await context.newPage();
await p1.goto("https://www.youtube.com/");
let p2 = await context.newPage();
await p2.goto("https://playwright.dev/docs/api/class-browser");
const openpages =  context.pages();
console.log("Open pages length: ",openpages.length);

for(const p of context.pages())
    {
        let title = await p.title();
        console.log(title);
    }

})
