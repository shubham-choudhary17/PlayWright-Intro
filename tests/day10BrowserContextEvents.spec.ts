import { test } from "@playwright/test";


test.skip("tc1", async ({context})=>
    {
        context.on('close',()=>{
            console.log("browser contex got close");
        })
        console.log("Execution is started");
       let p = await context.newPage();
       await p.goto("https://www.youtube.com/");
       
       await context.close();
       console.log("Execution is ended");

    })
test.skip("tc2", async ({context})=>
    {
        context.on('page',()=>{
            console.log("New Page created");
        })
       let p = await context.newPage();
       let p1 = await context.newPage();

    })
    test.skip("tc3", async ({context})=>
    {
        context.on('console',async(cm)=>{
            console.log(cm.text(),cm.type());

            //console.log("Console event triggered");
        })
       let p = await context.newPage();
       await p.goto("https://www.youtube.com/");
       
       //await p.pause();

    })
    test("tc4",async({context})=>{
        //step1 : registering a listener
        let p = context.waitForEvent('page');
        // Step2 : Event fired & listener would be notified
        let p1 = await context.newPage();
        await (await p).goto("https://www.youtube.com/"); // only this will call
        let p2 = await context.newPage();
        await (await p).goto("https://www.google.com/");

    })