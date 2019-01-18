import WikipediaPage from "../pages/WikipediaPage";

const expect = require("chai").expect;

import World from "../support/world";

module.exports = function () {
  this.World = World;

  this.Given(/^I am on wikipedia$/, function () {
    this.page = new WikipediaPage(this);
    return this.page.loadAndWaitUntilVisible();
  });

  this.When(/^I search for "([^"]*)"$/, function (searchString) {
    return this.page.searchFor(searchString);
  });

  this.Then(/^the first heading should be "([^"]*)"$/, function (arg1) {
    return this.page.shouldContain(arg1);
  });

  this.Then(/^the page should contain "([^"]*)"$/, function (text) {
    return this.page.shouldContain(text);
  });
};
