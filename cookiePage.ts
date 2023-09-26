import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class CookieClicker extends BasePage {
    engBtn: By = By.xpath('//div[@id="langSelect-EN"]'); 
    cookieBtn: By = By.css('#bigCookie'); 
    grannyBtn: By = By.xpath('(//div[@class="product unlocked enabled"])[2]');
    legacyBtn: By = By.xpath('//div[text()="Legacy"]'); 
    ascendBtn: By = By.xpath('//a[text()="Ascend"]'); 
    reincarnateBtn: By = By.xpath('//span[text()="Reincarnate"]'); 
    yesBtn: By = By.css('#promptOption0'); 
    twitterBtn: By = By.css('#topbarTwitter');

    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"}); 
    }; 

    async repeatClick(number, thingToClick) {
        for(let i = 0; i < number; i++){
            await this.click(thingToClick); 
        };
    };

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }
}