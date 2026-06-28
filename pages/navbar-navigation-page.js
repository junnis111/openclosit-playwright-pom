import { navBarNavigation } from "../locators/navbar-navigation-locators";

export class NavBarNavigation{
    constructor(page){
        this.page = page
    }

    async clickOnShop(){
        await this.page.locator(navBarNavigation.shop).click()
    }

    async clickOnList(){
        await this.page.locator(navBarNavigation.list).click()
    }

    async clickOnHowItWorks(){
        await this.page.locator(navBarNavigation.howItWorks).click()
    }

    async clickOnSustainability(){
        await this.page.locator(navBarNavigation.sustainability).click()
    }

    async clickOnOpenClosit(){
        await this.page.locator(navBarNavigation.openClosit).click()
    }

    async clickOnAppointments(){
        await this.page.locator(navBarNavigation.appointments).click()
    }

    async clickOnFaqs(){
        await this.page.locator(navBarNavigation.faqs).click()
    }

    async clickOnDashboard(){
        await this.page.locator(navBarNavigation.dashboard).click()
    }

    async clickOnCart(){
        await this.page.locator(navBarNavigation.shopCart).first().click()
    }
}