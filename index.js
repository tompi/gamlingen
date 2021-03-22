const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

let driver;

async function selectName(selectId, labelName) {
    let xpath = '//*[@id="' + selectId + '"]/option[contains(text(),"' + labelName + '")]';
    await driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
    await driver.findElement(By.xpath(xpath)).click();
}

(async () => {
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://event.webbillett.no/stavanger/default.aspx');
    await selectName('searchFilterEventTypeGroup', 'Gamlingen');
    await selectName('searchFilterEventNames', 'Hovedbasseng');
    await selectName('searchFilterEventWeekday', 'tirsdag');
  } finally {
    //await driver.quit();
  }
})();
