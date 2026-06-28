import { footerNavigationLocators } from "../locators/footer-navigation-locators"

export class FooterNavigation{
    constructor(page){
        this.page = page
    }

    async clickOnDresses(){
        await this.page.locator(footerNavigationLocators.dresses).click()
    }

    async clickOnAccessories(){
        await this.page.locator(footerNavigationLocators.accessories).click()
    }

    async clickOnVacationPackages(){
        await this.page.locator(footerNavigationLocators.vacationPackages).click()
    }

    async clickOnFeaturedClosets(){
        await this.page.locator(footerNavigationLocators.featuredClosets).click()
    }

    async clickOnHowItWorks(){
        await this.page.locator(footerNavigationLocators.howItWorks).click()
    }

    async clickOnBecomeALister(){
        await this.page.locator(footerNavigationLocators.becomeALister).click()
    }

    async clickOnEarningsCalculator(){
        await this.page.locator(footerNavigationLocators.earningsCalculator).click()
    }

    async clickOnFaqs(){
        await this.page.locator(footerNavigationLocators.faqs).click()
    }

    async clickOnSustainability(){
        await this.page.locator(footerNavigationLocators.sustainability).click()
    }

    async clickOnMyCloset(){
        await this.page.locator(footerNavigationLocators.myCloset).click()
    }

    async clickOnMyRentals(){
        await this.page.locator(footerNavigationLocators.myRentals).first().click()
    }
}