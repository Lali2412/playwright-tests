import {Page, Locator, expect} from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput: Locator;
    readonly loginButton : Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.locator("//input[@id='user-name']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.loginButton = page.locator('//input[@id="login-button"]');
    }

    async goto(baseUrl:string){
        await this.page.goto('/');
    }

    async login(username: string, password : string){

        await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.usernameInput.fill(username, { force: true });
        await this.passwordInput.fill(password, { force: true });
        await this.loginButton.click();
    }
}