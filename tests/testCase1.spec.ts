import test, { Cookie } from "@playwright/test";

test.skip("Test case 1",async ({page,browser})=>{
   //await page.goto("https://www.youtube.com/");
 // let b1 = browser.contexts();
   console.log(browser.version());
})
test("TestCase2 Browser contex",async({browser,context})=>{
  // let p1 = await browser.newContext(); new chrome session
   let p1 = await context.newPage();
  await p1.goto("https://www.google.com/");
/*  let p2 = await context.newPage();
  await p2.goto("https://playwright.dev/docs/api/class-browsercontext");
*/
  for(const p of context.pages())
    {
     let title =  await p.title();
     console.log("Page title is :", title);

    }
    let c1: Cookie = {
  name: 'AEC12',
  value: 'AVh_V2iFvLLzZ4JAbjSlHi7N30h3HAeicRl_5agWwDB0sM_s1Lns7Z5T7h',
  domain: '.google.com',
  path: '/',
  expires: 1773125862.495335,
  httpOnly: true,
  secure: true,
  sameSite: 'Lax'
}
await context.addCookies([c1]);


    let cookies = await context.cookies();
for(const c of cookies)
  {
    console.log("Cookies is :",c);
  }
await p1.pause();
  await context.clearCookies();
   
  let cookies2 = await context.cookies();
  
  
  if(cookies2.length == 0)
    {
      console.log("All cookies is cleared")
    }
for(const c of cookies2)
  {
    console.log("Cookies1 is :",c);
    console.log("Cookies2 is :",c);
    console.log("Cookies3 is :",c);
    console.log("Cookies4 is :",c);
    console.log("Cookies5 is :",c);
    console.log("Cookies6 is :",c);

  } 
})