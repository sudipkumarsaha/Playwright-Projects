import { test, expect } from "@playwright/test";
import { userRegistration } from '../PageObject/userRegistration';
import { loginUser } from '../PageObject/loginUser';
import { wishlist } from '../PageObject/wishlist';
import { orderCheckout } from "../PageObject/orderCheckout";
import { resolve } from 'node:dns';
import { POManager } from "../PageObject/POManager";
import testData from '../dataTest/testData.json';
import path from 'path';
import fs from 'fs';
import registration_testdata from '../dataTest/registration_testdata.json';

test.only('Register user', async({page})=>
{
    for(const data of registration_testdata)
    {
        const firstname = data.firstname;
        const lastname = data.lastname;
        const email = data.email;
        const companyname = data.companyname;
        const password = data.password;
        const confirmpassword = data.confirmpassword;
        const register_a_user = new userRegistration(page);
        await register_a_user.launchURL();
        await register_a_user.newRegistration(firstname,lastname,email,companyname,password,confirmpassword);
        const register_confirmation = page.locator("//div[@class='page registration-result-page']//div[@class='result']");
        console.log(register_confirmation);
        //await expect(register_confirmation).toHaveText("Your registration completed");
        //await page.locator("//div[@class='page registration-result-page']//a[@class='button-1 register-continue-button']").click();
        await page.locator('.ico-logout').click();
        
    }
});


test('login user', async({page})=>
{
    for(const data of testData)
        {
            const login = new loginUser(page);
            await login.launchURL();
            await login.newLogin(data.username, data.password);
            await login.navigate(); //navigate to propaganda hat after login.
            const sizedropdown = page.locator("//div[@class='attributes']//select[@id='product_attribute_13']");
            await sizedropdown.selectOption("Medium");
            await page.waitForTimeout(10000);
            const AddtoWishList = new wishlist(page);
            await AddtoWishList.AddUpdatetoWishlist();
            const closeWishlistpopup = page.locator("//div[@class='bar-notification']//span[@class='close']");
            const test = closeWishlistpopup.isVisible();
                if(test==true)
                {
                    await this.closeWishlistpopup.click();
                }
            await AddtoWishList.WishlistPage();
            const newOrderCheckout = new orderCheckout(page);
            await newOrderCheckout.OrderCheckout();
            //Update Billing Information 
            const editBilling = page.locator("//div[@class='opc-select-address-container']//button[@id='edit-billing-address-button']").isVisible();
        if (editBilling==false)
            {
                const selectcountry = page.locator("//select[@id='BillingNewAddress_CountryId']");
                const selectstate = page.locator("//select[@name='BillingNewAddress.StateProvinceId']");
                const cityname = page.locator("//input[@name='BillingNewAddress.City']");
                const address = page.locator("//input[@id='BillingNewAddress_Address1']");
                const zipcode = page.locator("//input[@id='BillingNewAddress_ZipPostalCode']");
                const phonenumber = page.locator("//input[@id='BillingNewAddress_PhoneNumber']");
                await selectcountry.selectOption("India");
                await selectstate.selectOption("Kerala");
                await cityname.fill("Cochin");
                await address.fill("1, cocin road");
                await zipcode.fill("12345");
                await phonenumber.fill("1234567890");
           }
            const contBilling = page.locator("//div[@id='billing-buttons-container']//button[@class='button-1 new-address-next-step-button']");
            await contBilling.click();
            //const newCheckout = new orderCheckout(page);
            await newOrderCheckout.contCheckout();
            await newOrderCheckout.OrdConfirmation();
            const orderInfo = page.locator("//div[@class='order-overview']//div[@class='order-number']/strong");
            const orderNum = await orderInfo.textContent();
            console.log(orderNum);
            const ordNum1 = orderNum.toString().split("#");
            console.log(ordNum1[1]);
            console.log("Thank you for placing an Order, the order number is:" +ordNum1[1]);
            const orderNumber = "Order #7";
            const ordNum = orderNumber.split("#");
            console.log(ordNum[1]);
            await page.locator('.ico-logout').click();
        }
});

