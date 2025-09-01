import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import * as data from "../utils/testData.json";


test("Add two products to cart and verify count", async({page}) =>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto('/');
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.addProductToCart("Sauce Labs Bike Light");

    expect(await inventoryPage.getCartCount()).toBe(2);
})