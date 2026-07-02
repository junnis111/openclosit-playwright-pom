export const homePageLocators = {
    rentAnItem: "//a[normalize-space()='RENT AN ITEM']",
    listAnItem: "//a[normalize-space()='LIST AN ITEM']",
    slider: "//div[contains(@class,'FashionSlider')]",
    productCards: "//div[contains(@class,'FashionSlider')]//div[contains(@class,'slick-slide') and @data-slick-index >= 0]",
    productName: "h5.text_dark_grey.fw-900.text-uppercase",
    productPrice: "p.fw-bold.text-uppercase",
    productCategoryAndSize: "//div[contains(@class,'FashionSlider')]//div[contains(@class,'slick-slide') and @data-slick-index >= 0]//p[contains(@class,'fw-normal')]"
}
