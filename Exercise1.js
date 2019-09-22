const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();


async function Exercise1() {

    await driver.get('file:///C:/Users/Dafna%20Cohen/Bootcamp/Week3/Day2/index.html');
    let doron = await driver.findElement(By.id('my-input22'));
    let tami4 = "I am Hero";
    await doron.sendKeys(tami4);

    // let doron1 = await driver.findElement(By.id("my-input22")).getText();
    await driver.findElement(By.className("btnadd")).click();
    let tami5 = await driver.findElement(By.id('doron55')).getText();
    console.log(tami5)
    if (tami5 == tami4) {
        console.log("validate success")

    } else {
        console.log("validate fail")
    }


    setTimeout(() => {
        driver.quit()
    }, 3000)

}


Exercise1()