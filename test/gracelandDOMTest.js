require("geckodriver");
const { Builder, By, Key } = require("selenium-webdriver");

var assert = require("chai").assert;

//describe - describes test
describe("check foo", function () {
  //it - describes expected behaviour
  it("should find shared module foo on page", async function () {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
      //open the website
      await driver.get("http://localhost:3000/");

      //find the search box and enter a note
      let fooText = await driver
        .findElement(By.xpath('//*[@id="root"]/div/header/div'))
        .getText();

      //assert that the note's text is the same as the input text "Hello Selenium"
      assert.strictEqual(fooText, "shared module foo: bar baz qux");
      console.log("TEST PASSED");
    } finally {
      //close the browser
      await driver.quit();
    }
  });
});
