const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

let driver;
let location = 'Gamlingen';
let pool = 'Hovedbasseng Gamlingen';
let day = 'tirsdag';
let time = '09:30';

async function selectName(selectId, labelName) {
    let xpath = '//*[@id="' + selectId + '"]/option[contains(text(),"' + labelName + '")]';
    await driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
    await driver.findElement(By.xpath(xpath)).click();
}

(async () => {
  try {
    driver = await new Builder().forBrowser('chrome').build();
    // Select pool and day
    await driver.get('https://event.webbillett.no/stavanger/default.aspx');
    await selectName('searchFilterEventTypeGroup', location);
    await selectName('searchFilterEventNames', pool);
    await selectName('searchFilterEventWeekday', day);
    // Select time
    let containerXpath = '((//*[@id="event-list"]//span[contains(text(), "' + time + '")])[last()]/ancestor::*[@class="row"])[last()]';
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath()), 10000);
    //let container = await driver.findElement(By.xpath(containerXpath));
    //await container.findElement(By.css('button.Buyable')).click();
  } finally {
    //await driver.quit();
  }
})();
