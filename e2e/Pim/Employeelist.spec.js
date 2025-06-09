import { test, expect } from '@playwright/test'

import employee from "../../testdata/employeelist.json"
test("verify with valid login credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click()
    await page.locator("//a[normalize-space(text())='Employee List']").click()
    await page.locator("(//label[normalize-space(text())='Employee Name']/following::input)[1]").fill(employee.EmployeeName)
    await page.locator("(//span[normalize-space(text())='Configuration']/following::input)[2]").fill(employee.EmployeeId)
    await page.locator("//button[contains(.,'Search')]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

    
}
)