import { test, expect } from '@playwright/test'

import data from "../../testdata/jobcategories.json"

test("verify with valid login credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //assertion
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Job Categories']").click()
    await page.locator("(//button[@type='button']//i)[3]").click()
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(data.Name)
    await page.locator("//button[contains(.,'Save')]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory")
//when we have to close the browser after run all the testcases
    await page.close()


})