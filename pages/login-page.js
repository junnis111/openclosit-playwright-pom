import { loginLocators } from "../Locators/login-locators";

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async validMemberLogin(firstName, password) {
        await this.page.locator(loginLocators.userNameInput).fill(firstName)
        await this.page.locator(loginLocators.password).fill(password)
        await this.page.locator(loginLocators.loginButton).click()
    }

    async invalidMemberLogin(firstName, password) {
        await this.page.locator(loginLocators.userNameInput).fill(firstName)
        await this.page.locator(loginLocators.password).fill(password)
        await this.page.locator(loginLocators.loginButton).click()
    }

    async emptyLoginValidation() {
        await this.page.locator(loginLocators.loginButton).click()
    }

    async getToastMessage() {
        // Invalid Email or password.
        return this.page.locator(loginLocators.toastMessage).textContent()
    }

    async accountCreationNavigation() {
        await this.page.locator(loginLocators.createAnAccountBtn).click()
    }

    async forgotPasswordNavigation() {
        await this.page.locator(loginLocators.forgotPasswordBtn).click()
    }
}