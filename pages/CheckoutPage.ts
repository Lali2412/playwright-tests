import {Page, Locator} from "@playwright/test";

export class CheckoutPage{
    readonly page:Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton:Locator;
    readonly finishButton : Locator;
    readonly confirmationMsg: Locator;

    constructor(page: Page){


        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]')
        this.finishButton = page.locator('[data-test="finish"]')
        this.confirmationMsg = page.locator('[data-test="complete-header"]');
    }

    async fillDetails(first: string, last:string, postal: string){

        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(postal);
        await this.continueButton.click();
    }

    async completeOrder(){
        await this.finishButton.click();

    }

    async getConfirmationMessage(){
        return this.confirmationMsg.innerText();
    }
}