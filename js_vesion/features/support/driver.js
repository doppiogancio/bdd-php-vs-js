export const driver = require("selenium-webdriver");
const chrome = require("chromedriver");
export const browser = new driver.Builder().forBrowser("chrome").build();
