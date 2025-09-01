import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async goto() {
    await this.page.locator(".shopping_cart_link").click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}