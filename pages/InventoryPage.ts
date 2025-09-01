import {Page, Locator } from "@playwright/test";

export class InventoryPage{
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly sortDropdown: Locator;

    constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.sortDropdown = page.locator("[data-test='product-sort-container']");
  }

  async addProductToCart(productName: string) {
  const id = productName.toLowerCase().replaceAll(" ", "-");
  await this.page.locator(`[data-test="add-to-cart-${id}"]`).click();
}

  async getCartCount() {
    return parseInt(await this.cartBadge.innerText());
  }

  async sortLowToHigh() {
    await this.sortDropdown.selectOption("lohi");
  }

  async getAllPrices(): Promise<number[]> {
    const prices = await this.page.$$eval(".inventory_item_price", els => els.map(e => parseFloat(e.textContent!.replace("$", ""))));
    return prices;
  }
}
