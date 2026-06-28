import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { BASEURL, USERNAME, PASSWORD } from '../utlis/envConfig'
import { NavBarNavigation } from '../pages/navBarNavigationPage';



test.describe("Validate NavBar Navigations", () => {

    let loginPageObj;
    let navBarNavigationObj;

    test.beforeEach(async ({ page }) => {
        loginPageObj = new LoginPage(page);
        navBarNavigationObj = new NavBarNavigation(page)
        await page.goto(BASEURL);
        await loginPageObj.validMemberLogin(USERNAME, PASSWORD);
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com")
    })


    test("Verify Shop page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnShop()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/shop")
    })

    test("Verify List page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnList()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/list")
    })

    test("Verify How it works page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnHowItWorks()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/how_it_works")
    })

    test("Verify Sustainability page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnSustainability()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/sustainability")
    })

    test("Verify OpenClosit page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnOpenClosit()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/")
    })

    test("Verify Appointments page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnAppointments()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/appointments")
    })

    test("Verify FAQs page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnFaqs()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/faq")
    })

    test("Verify Dashboard navigation access", async ({ page }) => {
        await navBarNavigationObj.clickOnDashboard()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/outfits")
    })

    test("Verify Cart page navigation", async ({ page }) => {
        await navBarNavigationObj.clickOnCart()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/shop_cart")
    })
})