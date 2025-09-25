import { FullConfig } from "@playwright/test";

async function globleTeardown(config:FullConfig) {
    console.log("Running globle Teardown setup");
    
}

export default globleTeardown;