class orderCheckout
{
    constructor(page)
    {
        this.page = page;
        this.termsofservice = page.locator("//div[@class='terms-of-service']//input[@id='termsofservice']");
        this.checkOut = page.locator("//div[@class='checkout-buttons']//button[@id='checkout']");
        //Continue Shipping
        this.const_shipping = page.locator("//div[@id='shipping-method-buttons-container']//button[@class='button-1 shipping-method-next-step-button']");
        //Continue Payment
        this.const_payment = page.locator("//div[@id='payment-method-buttons-container']//button[@class='button-1 payment-method-next-step-button']");
        //Confirm Payment Information
        this.confirmPayment = page.locator("//div[@id='payment-info-buttons-container']//button[@class='button-1 payment-info-next-step-button']");
        //Order Confirmation 
        this.orderConfirmation = page.locator("//div[@id='confirm-order-buttons-container']//button[@class='button-1 confirm-order-next-step-button']");
        this.orderInfo = page.locator("//div[@class='order-overview']//div[@class='order-number']");
        this.thankyoutext = page.locator("//div[@class='section order-completed']//h2[@class='title']").allTextContents();
        this.orderNumber = page.locator("//div[@class='order-number']").allTextContents();
        this.orderDetails = page.locator("//div[@class='details-link']//a[contains(text(),'Click here for order details')]");
    }

    async OrderCheckout()
    {   
        await this.termsofservice.check();
        await this.checkOut.click();

    }
    async contCheckout()
    {
        await this.const_shipping.click();
        await this.const_payment.click();
        await this.confirmPayment.click();
        await this.orderConfirmation.click();
    }

    async OrdConfirmation()
    {
        console.log(this.thankyoutext);
        await this.orderDetails.click();
    }
}
module.exports={orderCheckout}