class wishlist
{
    constructor(page)
    {
        this.page = page;
        this.addtoWishlist = page.locator("//div[@class='add-to-wishlist']//button[@id='add-to-wishlist-button-33']");
        this.accessWishlist = page.locator("//div[@class='header-links']//a[@class='ico-wishlist']");
        this.wishlistQuantity = page.locator("//div[@class='wishlist-content']//input[@class='qty-input']");
        this.clickOutside = page.locator("//div[@class='share-info']");
        this.selectCheckbox = page.locator("//div[@class='table-wrapper']//input[@name='addtocart']");
        this.updateWishlist = page.locator("//button[@id='updatecart']");
        this.updateCart = page.locator("//button[@class='button-2 wishlist-add-to-cart-button']");
    }

    async AddUpdatetoWishlist()
    {
        await this.addtoWishlist.click();
        
    }
    async WishlistPage()
    {
        await this.accessWishlist.click();
        await this.wishlistQuantity.click();
        await this.wishlistQuantity.click();
        await this.wishlistQuantity.fill("4");
        await this.clickOutside.click();
        await this.selectCheckbox.click();
        await this.updateWishlist.click();
        await this.selectCheckbox.click();
        await this.updateCart.click();
    }
}
module.exports={wishlist}