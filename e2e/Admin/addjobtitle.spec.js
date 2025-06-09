import { test, expect } from '@playwright/test'
import data from "../../testdata/addjobtitle.json"
//actions
test("verify with valid login credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //assertion
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Job Titles']").click()
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(data.jobtitle)
    await page.locator("//textarea[@placeholder='Type description here']").fill(data.jobdescription)
    await page.locator("//textarea[@placeholder='Add note']").fill(data.note)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")


})