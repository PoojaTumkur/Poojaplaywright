import {test,expect} from '@playwright/test'

test("verify with valid login credentials",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})

test("verify with valid username and invalid password",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("admin")
await page.locator("input[type='password']").fill("bjakbkjdh")
await page.locator("button[type='submit']").click()
await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test("verify with invalid username and valid password",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("gjghjhga")
await page.locator("input[type='password']").fill("admin@123")
await page.locator("button[type='submit']").click()
await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test("verify with invalid username and invalid password",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("ahhkhakh")
await page.locator("input[type='password']").fill("bjakbkjdh")
await page.locator("button[type='submit']").click()
await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})