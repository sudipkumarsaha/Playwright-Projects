class userRegistration
{
    constructor(page)
    {
        this.page = page;
        this.register_link = page.locator("//div[@class='header-links']//a[@class='ico-register']");
        this.select_gender = page.locator("//input[@id='gender-male']");
        this.first_name = page.locator("//input[@id='FirstName']");
        this.last_name = page.locator("//input[@id='LastName']");
        this.user_email = page.locator("//input[@id='Email']");
        this.company_name = page.locator("//input[@id='Company']");
        this.user_password = page.locator("//input[@id='Password']");
        this.confirm_password = page.locator("//input[@id='ConfirmPassword']");
        this.complete_registration = page.locator("//button[@id='register-button']");
        this.register_confirmation = page.locator("//div[@class='page registration-result-page']//div[@class='result']");
        this.continueRegistration = page.locator("//div[@class='page registration-result-page']//a[@class='button-1 register-continue-button']");
        this.logout_link = page.locator("//div[@class='header-links']//a[@class='ico-logout']"); 
    };

    async newRegistration(firstname,lastname,email,companyname,password,confirmpassword)
    {
        await this.register_link.click();
        await this.select_gender.click();
        await this.first_name.fill(firstname);
        await this.last_name.fill(lastname);
        await this.user_email.fill(email);
        await this.company_name.fill(companyname);
        await this.user_password.fill(password);
        await this.confirm_password.fill(confirmpassword);
        await this.complete_registration.click();
        await this.logout_link.click();

    };
    async launchURL()
    {
        await this.page.goto("https://demo.nopcommerce.com/");
    };

}

module.exports={userRegistration}