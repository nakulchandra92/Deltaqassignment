import { browser, by, element, logging } from "protractor";
import { AppPage } from "./app.po";
describe("InfyMansions", () => {
  it("should navigate to home page", () => {
    browser.get("http://localhost:4200");
    expect(browser.getCurrentUrl()).toContain("home");
  });
  it("should load buy page on click of buy", () => {
    const buy = element(by.name("buy"));
    buy.click();
    expect(browser.getCurrentUrl()).toContain("buy");
  });
  // it("should not load view details if not logged in", () => {
  //   let viewdetails = element(by.name("view"))
  //   viewdetails.click()
  //   expect(browser.getCurrentUrl()).toContain('buy')
  // })
  it("should not load sell if not logged in", () => {
    const sell = element(by.name("wishlist"));
    sell.click();
    expect(browser.getCurrentUrl()).toContain("buy");
  });
  it("should load sign in page", () => {
    const signin = element(by.name("signin"));
    signin.click();
    expect(browser.getCurrentUrl()).toContain("login");
  });
  it("should login successfully", () => {
    const email = element(by.name("contactEmail"));
    const password = element(by.name("password"));
    email.sendKeys("user@gmail.com");
    password.sendKeys("User@123");
    const button = element(by.name("login"));
    button.click();
    expect(browser.getCurrentUrl()).toContain("home");
  });
  it("should load the sell page once logged in", () => {
    const sell = element(by.name("sell"));
    sell.click();
    expect(browser.getCurrentUrl()).toContain("sell");
  });
  });
