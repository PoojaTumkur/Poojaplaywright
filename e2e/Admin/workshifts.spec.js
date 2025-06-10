import { test, expect } from '@playwright/test'
import data from "../../testdata/workshifts.json"
//actions
test("verify with valid login credentialsand add work shifts", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //assertion
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Work Shifts']").click()
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.ShiftName)
    await page.locator("(//span[normalize-space(text())='Configuration']/following::input)[2]").fill(data.WorkingHourFrom)
    await page.locator("(//label[normalize-space(text())='To']/following::input)[1]").fill(data.WorkingHoursTo)
    await expect(page.locator("//p[text()='8.00']")).toBeVisible()
    await page.locator("//button[contains(.,'Save')]").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

})