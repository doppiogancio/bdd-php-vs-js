import {By} from "selenium-webdriver";

export default class Base {
  constructor(World) {
    this.world = World;
    this.browser = World.browser;
    this.driver = World.driver;
    this.until = this.driver.until;
    this.basePath = World.basePath;
  }

  load() {
    throw Error("load method not implemented");
  }

  waitUntilVisible() {
    throw Error("waitUntilVisible method not implemented");
  }

  loadAndWaitUntilVisible() {
    this.load();
    return this.waitUntilVisible();
  }

  waitUntilElementIsVisible(locator) {
    const element = this.browser.wait(this.until.elementLocated(locator));
    return this.browser.wait(this.until.elementIsVisible(element));
  }

  async
  iFillField(element, value) {
    return this.browser.findElement(element).sendKeys(value);
  }

  iPress(element) {
    return this.browser.findElement(element).click();
  }

  shouldContain(text) {
    const locator = By.css("body");
    const element = this.browser.findElement(locator);
    return this.browser.wait(this.until.elementTextContains(element, text));
  }
}
