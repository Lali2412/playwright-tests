import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";


test("Sort products by Price Low to High", async({page})=>{


    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto('/');
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    await inventoryPage.sortLowToHigh();
    const prices = await inventoryPage.getAllPrices();

    const sorted = [...prices].sort((a,b) => a-b);
    expect(prices).toEqual(sorted);

})