import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { BASEURL, USERNAME, PASSWORD } from '../utlis/envConfig'
import { NavBarNavigation } from '../pages/navBarNavigationPage';
import { FooterNavigation } from '../pages/footerNavigation';



test.describe("Validate NavBar Navigations", () => {

    let loginPageObj;
    let footerNavigationPageObj;

    test.beforeEach(async ({ page }) => {
        loginPageObj = new LoginPage(page);
        footerNavigationPageObj = new FooterNavigation(page)
        await page.goto(BASEURL);
        await loginPageObj.validMemberLogin(USERNAME, PASSWORD);
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com")
    })


    test("Verify Footer Dresses navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnDresses()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/shop?category=dress")
    })

    test("Verify Footer Accessories navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnAccessories()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/shop?category=accessory")
    })

    test("Verify Footer Vacation Packages navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnVacationPackages()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/vacation_packages")
    })

    test("Verify Footer Featured Closets navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnFeaturedClosets()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/collaborators")
    })

    test("Verify Footer How it Works navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnHowItWorks()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/how_it_works")
    })

    test("Verify Footer Become a Lister navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnBecomeALister()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/list")
    })

    test("Verify Footer Earnings Calculator navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnEarningsCalculator()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/list#earningCalculator")
    })

    test("Verify Footer FAQs navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnfaqs()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/faq")
    })

    test("Verify Footer Sustainability navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnSustainability()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/sustainability")
    })

    test("Verify Footer My Closet navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnMyCloset()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/outfits")
    })

    test("Verify Footer My Rentals navigation", async ({ page }) => {
        await footerNavigationPageObj.clickOnMyRentals()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/your_rentals")
    })

})