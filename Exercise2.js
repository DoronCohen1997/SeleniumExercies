const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();


async function Exercise2(Gender) {

    await driver.get('https://www.calculator.net/bmi-calculator.html');

    await driver.findElement(By.className('clearbtn')).click();

    let height = await driver.findElement(By.id('cheightmeter'));

    let randomheight = (Math.random() * 200);
    await height.sendKeys(randomheight);


    let weight = await driver.findElement(By.id('ckg'));

    let randomweight = (Math.random() * 200);
    await weight.sendKeys(randomweight);


    let age = await driver.findElement(By.id('cage'));

    let randomage = (Math.random() * 100);
    await age.sendKeys(randomage);

    if (Gender == "Male") {
        
     await driver.findElement(By.id('csex1')).click();

    }
    else {
        await driver.findElement(By.id('csex2')).click();

}

    await driver.findElement(By.xpath("//input[@value='Calculate']")).click();

   let result = await driver.findElement(By.xpath("//div[@class='bigtext']")).getText();
    
   console.log(result)

   setTimeout(() => {
    driver.quit()
}, 3000)

}

Exercise2("Female")
