import { test, expect } from "@playwright/test";

export class loginUser
{
    constructor(page)
    {
        this.page = page;
        this.login_click = page.locator('.ico-login');
        this.loginEmail = page.locator("//div[@class='form-fields']//input[@class='email']");
        this.loginPassword = page.locator("//div[@class='form-fields']//input[@class='password']");
        this.rememberMe = page.locator("//input[@id='RememberMe']");
        this.LoginUser = page.locator("//div[@class='buttons']//button[@class='button-1 login-button']");    
        this.apparel = page.locator("//div[@class='menu__item-toggle']//a[contains(text(),'Apparel')]");
        this.accessories = page.locator("//div[@class='sub-category-item']//a[contains(text(),'Accessories')]");
        this.propagandahat = page.locator("//div[@class='details']//a[contains(text(),'Obey Propaganda Hat')]");
    }

    async newLogin(username,password)
    {
        await this.login_click.click();
        await this.loginEmail.fill(username);
        await this.loginPassword.fill(password);
        await this.rememberMe.click();
        await this.LoginUser.click();

    }

    async launchURL()
    {
        await this.page.goto("https://demo.nopcommerce.com/");
    }
    
    
    async navigate()
    {
        await this.apparel.click();
        await this.accessories.click();
        await this.propagandahat.click();
    }

}

module.exports={loginUser}