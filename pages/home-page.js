import { homePageLocators } from "../locators/home-page-locators";

export class HomePage {
    constructor(page) {
        this.page = page
    }

    async clickOnRentAnItem() {
        await this.page.locator(homePageLocators.rentAnItem).click()
    }

    async clickOnListAnItem() {
        await this.page.locator(homePageLocators.listAnItem).click()
    }

    async checkProductsCount() {
        await this.page.locator(homePageLocators.slider).waitFor({ state: "visible" });
        const cards = await this.page.locator(homePageLocators.productCards)
        return cards.count()
    }

    async getProductName() {
        await this.page.locator(homePageLocators.slider).waitFor({ state: "visible" });
        const name = await this.page.locator(homePageLocators.productName).allTextContents()
        return name.map(name => name.trim())
    }

    async getProductPrices() {
        await this.page.locator(homePageLocators.slider).waitFor({ state: "visible" });
        const prices = await this.page.locator(homePageLocators.productPrice).allTextContents();
        return prices.map(price => price.trim().split("RENT FROM ")[1]);
    }

    async getProductCategories() {
        await this.page.locator(homePageLocators.slider).waitFor({ state: "visible" })
        const categories = await this.page.locator(homePageLocators.productCategoryAndSize).allTextContents()
        return categories.map(category => category.trim().split("•")[0].trim())
    }

    async getProductSizes() {
        await this.page.locator(homePageLocators.slider).waitFor({ state: "visible" });
        const sizes = await this.page.locator(homePageLocators.productCategoryAndSize).allTextContents();
        return sizes.map(size => size.trim().split("•")[1].trim());
    }

    async getProductDetails() {
        await this.page.locator(homePageLocators.slider).waitFor({ state: "visible" });
        const names = await this.page.locator(homePageLocators.productName).allTextContents()
        const prices = await this.page.locator(homePageLocators.productPrice).allTextContents()
        const categories = await this.page.locator(homePageLocators.productCategoryAndSize).allTextContents()
        const sizes = await this.page.locator(homePageLocators.productCategoryAndSize).allTextContents()
        return names.map((name, index) => ({
            name: name.trim(),
            price: prices[index].trim().split("RENT FROM ")[1],
            category: categories[index].trim().split("•")[0].trim(),
            sizes: categories[index].trim().split("•")[1].trim(),
        }))
    }

    async getSpecificProductDetails(productNames) {
        const products = await this.getProductDetails();

        return productNames.map(productName => {
            const product = products.find(
                p => p.name.toLowerCase() === productName.toLowerCase()
            );

            if (!product) {
                throw new Error(`Product "${productName}" not found in slider`);
            }

            return product;
        });
    }

}