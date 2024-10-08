import { Builder, By, until } from 'selenium-webdriver';

async function testSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();
  console.log('Script loaded and running');


  try {
    // Navigate to your app
    await driver.get('http://localhost:8080');

    // Wait for the button to appear with a longer timeout
    let button = await driver.wait(until.elementLocated(By.xpath('//button[@id=\'generatePersonButton\']')), 100000);
    console.log('Button found:', await button.getText());

    // Click the button
    await button.click();

    // Wait for the result and print it
    let personName = await driver.wait(until.elementLocated(By.id('personName')), 100000);
    console.log('Generated person name:', await personName.getText());

    // Delay the closure by 5 seconds (5000 ms)
    await new Promise(resolve => setTimeout(resolve, 100000));
  } catch (error) {
    console.log('Error encountered:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

testSelenium();
