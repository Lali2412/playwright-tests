import {test, expect} from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";
import * as data from "../utils/testData.json";
import * as dotenv from 'dotenv';

test("Login with valid credentials", async ({page})=>{
    const loginPage = new LoginPage(page);

    try{

    await loginPage.goto(data.baseUrl);
    console.log("USERNAME:", process.env.USERNAME!);
    console.log("PASSWORD:", process.env.PASSWORD!);
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/inventory.html/);
    } catch (error){
        console.error("Error during login test:", error);
        throw error;
    }
    


});
