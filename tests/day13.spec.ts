import {test} from "@playwright/test";
test.use({viewport:{width:1366,height:768}})
test('tc1', async ({page})=>{
    
await page.goto("https://testautomationpractice.blogspot.com/",{timeout:30000});
test.setTimeout(40000);
})