import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page.js'
import { BASEURL, USERNAME, PASSWORD } from '../utils/env-config.js'
import { HomePage } from '../pages/home-page.js';
import {homePageProductsData} from '../test-data/home-page-products-data.js'



test.describe("Home Page", () => {
    let loginPageObj;
    let homePageObj;

    test.beforeEach(async ({ page }) => {
        loginPageObj = new LoginPage(page);
        homePageObj = new HomePage(page)
        await page.goto(BASEURL);
        await loginPageObj.validMemberLogin(USERNAME, PASSWORD);
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com")
    })

    test("Verify the Rent an Item link navigates correctly", async ({ page }) => {
        await homePageObj.clickOnRentAnItem()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/shop")
    })

    test("Verify the List an Item link navigates correctly", async ({ page }) => {
        await homePageObj.clickOnListAnItem()
        await expect(page).toHaveURL("https://new-openclosit-a6b290e28239.herokuapp.com/list")
    })

    test("Verify products length", async ({ page }) => {
        const totalProducts = await homePageObj.checkProductsCount()
        console.log(totalProducts);
        await expect(totalProducts).toBe(12)

    })

    test("Get product name", async ({ page }) => {
        const name = await homePageObj.getProductName()
        console.log(name);
    })

    test("Get product Price", async ({ page }) => {
        const categories = await homePageObj.getProductCategories()
        console.log(categories);
    })

    test("Get product sizes", async ({ page }) => {
        const sizes = await homePageObj.getProductSizes();
        console.log(sizes);
    });

    test("Get product details", async ({ page }) => {
        const products = await homePageObj.getProductDetails();
        console.log(products);
        expect(products.length).toBe(12);
    });

      test("Get specific product details", async ({ page }) => {
        const products = await homePageObj.getSpecificProductDetails(homePageProductsData);
        console.log(products);
        expect(products.length).toBe(homePageProductsData.length);
    });
})