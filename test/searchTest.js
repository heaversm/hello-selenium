require("chromedriver");

const { Builder, By, Key, until } = require("selenium-webdriver");

async function searchExample() {
  //open Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //open the website
    await driver.get("http://www.google.com/");

    //find the search box and enter webdriver as the search term
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);

    //wait for the page to load
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    //close the browser
    await driver.quit();
  }
}

searchExample();
