import { test, expect } from '@playwright/test';

test("Verify Login with Valid Credential",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[name='user-name']").fill("standard_user")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()
    
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')


})

test("Verify Login with Valid Username and Invalid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[name='user-name']").fill("standard_user")

    await page.locator("input[type='password']").fill("abfghuu")

    await page.locator("input[type='submit']").click()
    
    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})


test("Verify Login with Invalid Username and valid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[name='user-name']").fill("avhguhkhhjk")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()
    
    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})

test("Verify Login with Invalid Username and Invalid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[name='user-name']").fill("avhguhkhhjk")

    await page.locator("input[type='password']").fill("hngjkah")

    await page.locator("input[type='submit']").click()
    
    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()


})

