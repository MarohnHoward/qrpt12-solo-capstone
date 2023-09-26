import {CookieClicker} from './cookiePage'; 
const cookie = new CookieClicker(); 

test('Can click the cookie, granny,and twitter', async () => {
    await cookie.navigate(); 
    await cookie.driver.manage().window().maximize()
    await cookie.click(cookie.engBtn); 
    await cookie.driver.sleep(2000); 
    await cookie.repeatClick(200, cookie.cookieBtn); 
    await cookie.driver.sleep(1000); 
    await cookie.click(cookie.grannyBtn); 
    await cookie.click(cookie.legacyBtn); 
    await cookie.driver.sleep(1000); 
    await cookie.click(cookie.ascendBtn); 
    await cookie.driver.sleep(2000); 
    await cookie.click(cookie.reincarnateBtn); 
    await cookie.click(cookie.yesBtn); 
    await cookie.driver.sleep(1000); 
    await cookie.click(cookie.twitterBtn); 
    await cookie.tabSwitch(); 
    await cookie.driver.sleep(1200); 
    await cookie.repeatClick(100, cookie.cookieBtn);
    await cookie.driver.quit()
});