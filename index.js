const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://event.webbillett.no/stavanger/default.aspx');
    await driver.wait(until.elementLocated(By.id('searchFilterEventTypeGroup')), 10000);
    await driver.findElement(By.css('#searchFilterEventTypeGroup > option:nth-child(2)')).click();
  } finally {
    //await driver.quit();
  }
})();
