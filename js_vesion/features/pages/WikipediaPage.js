import Base from "./Base";
import {By} from "selenium-webdriver";

export default class WikipediaPage extends Base {

  setConfigID(configID) {
    this.configID = configID;
  }

  load() {
    return this.browser.get("https://it.wikipedia.org/wiki/Pagina_principale");
  }

  waitUntilVisible() {
    return this.browser.wait(this.until.titleContains("Wikipedia"));
  }

  searchFor(searchString) {
    this.iFillField(By.css("#searchInput"), searchString);
    return this.iPress(By.css("#searchButton"));
  }
}
