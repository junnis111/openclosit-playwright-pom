import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { BASEURL, USERNAME, PASSWORD } from '../utlis/envConfig'



test.describe("Login Module", () => {

    let loginPageObj;

    test.beforeEach(async ({ page }) => {
        loginPageObj = new LoginPage(page);
        await page.goto(BASEURL);
    })


    test("Login with valid credentials", async ({ page }) => {
        await loginPageObj.validMemberLogin(USERNAME, PASSWORD);
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com")
    })

    test("Login with invalid credentials", async ({ page }) => {
        await loginPageObj.validMemberLogin("junaidkhan@gmail.com", "password1234");
        const getToastMessage = await loginPageObj.getToastMessage()
        await expect(getToastMessage).toBe("Invalid Email or password.")  
    })

    test("Empty Login Validation ", async ({ page }) => {
        await loginPageObj.emptyLoginValidation();

        const getToastMessage = await loginPageObj.getToastMessage()
        await expect(getToastMessage).toBe("Invalid Email or password.")
    })

    test("Account Creation Navigation ", async ({ page }) => {
        await loginPageObj.accountCreationNavigation()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/registration")
    })

    test("Forgot Password Navigation ", async ({ page }) => {
        await loginPageObj.forgotPasswordNavigation()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/password/new")
    })

})






