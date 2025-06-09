import {test,expect} from '@playwright/test'

test("verify with valid login credentials",async({page})=>{
await page.goto("http:///103.145.51.38/k2rpos/")
await page.locator("input[name='username']").fill("keerthi.neory@gmail.com")
await page.locator("input[type='password']").fill("keerthi@123")
await page.locator("button[type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})