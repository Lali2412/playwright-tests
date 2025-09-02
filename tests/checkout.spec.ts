import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CartPage } from "../pages/CartPage";
import * as data from "../utils/testData.json";




test("Complete checkout flow", async({page})=>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto('/');
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    await inventoryPage.addProductToCart(data.product.backpack);
    await inventoryPage.addProductToCart(data.product.bicycle);
    await cartPage.goto();
    await cartPage.checkout();

    await checkoutPage.fillDetails(
    data.checkout.firstName,
    data.checkout.lastName,
    data.checkout.postalCode
  );

  await checkoutPage.completeOrder();

  await expect(checkoutPage.confirmationMsg).toHaveText("Thank you for your order!");


})