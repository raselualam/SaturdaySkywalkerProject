package upskill.ebay.pageAction;

import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import upskill.ebay.pageElements.EbaySearchResultLocators;
import upskill.utilities.SetupDrivers;

public class EbaySearchResultActions {

	EbaySearchResultLocators EbaySearchResultLocatorsObj;
	
	public EbaySearchResultActions(){
		EbaySearchResultLocatorsObj = new EbaySearchResultLocators();                   //Create Object to get the locators from page element class
		PageFactory.initElements(SetupDrivers.driver, EbaySearchResultLocatorsObj);		//Initializing Page factory and driver with locators
	}
	
	public void verifyShoesItems(){
		//Option 1
		EbaySearchResultLocatorsObj.txtShoes.isDisplayed(); 	//object displayed
		
		EbaySearchResultLocatorsObj.txtShoes.isEnabled();		//object write able, click able
		
		//Option 2
		Assert.assertEquals(EbaySearchResultLocatorsObj.txtShoes.getText(), "shoes"); //Actual vs Expected
		
		//Option 3
		Assert.assertTrue(EbaySearchResultLocatorsObj.txtShoes.isDisplayed()); //object displayed or not
		
		Assert.assertFalse(EbaySearchResultLocatorsObj.txtShoes.isDisplayed()); //booleon negative
		
		Assert.assertNotEquals(EbaySearchResultLocatorsObj.txtShoes.getText(), "shoes"); //object not displayed
	}
	
	public void filterBrand(String brand) throws Exception{
		Thread.sleep(3000);
		if(brand.equals("Nike")){
			EbaySearchResultLocatorsObj.cbxBrandNike.click();	//clicking on button
			EbaySearchResultLocatorsObj.cbxBrandNike.submit();	//clicking on button or submitting form
		} else if(brand.equals("Adidas")){
			EbaySearchResultLocatorsObj.cbxBrandAdidas.click();
		} else if(brand.equals("Unbranded")){
			EbaySearchResultLocatorsObj.cbxBrandUnbranded.click();
		}
	}
	
	public void validateBrand(String brand) throws Exception{
		Thread.sleep(3000);
		if(brand.equals("Nike")){
			EbaySearchResultLocatorsObj.txtNike.isDisplayed();
		} else if(brand.equals("Adidas")){
			EbaySearchResultLocatorsObj.txtAdidas.isDisplayed();
		} else if(brand.equals("Unbranded")){
			EbaySearchResultLocatorsObj.txtUnbranded.isDisplayed();
		}
	}
	
	public void selectShirts(){
		EbaySearchResultLocatorsObj.linkShirtItems.click();
	}
	
	public void switchNewWindow(){
		
		for(String winhandle : SetupDrivers.driver.getWindowHandles()){
			SetupDrivers.driver.switchTo().window(winhandle);
		}
		
		/*
		Set<String> AllWindowHandles = SetupDrivers.driver.getWindowHandles();
		String window1 = (String) AllWindowHandles.toArray()[0];
		String window2 = (String) AllWindowHandles.toArray()[1];
		String window3 = (String) AllWindowHandles.toArray()[2];
		SetupDrivers.driver.switchTo().window(window2);
		*/
	}
	
	public void keyboardKeys(){
		EbaySearchResultLocatorsObj.cbxBrandNike.sendKeys(Keys.ENTER); //enter key
		EbaySearchResultLocatorsObj.cbxBrandNike.sendKeys(Keys.UP);
		EbaySearchResultLocatorsObj.cbxBrandNike.sendKeys(Keys.DOWN);
		EbaySearchResultLocatorsObj.cbxBrandNike.sendKeys(Keys.CLEAR);
		EbaySearchResultLocatorsObj.cbxBrandNike.sendKeys(Keys.DELETE);
		EbaySearchResultLocatorsObj.cbxBrandNike.clear();
	}
	
	public void handelingAlert(){
		SetupDrivers.driver.switchTo().alert().accept();						//Yes to popup window
		SetupDrivers.driver.switchTo().alert().dismiss();						//No to popup window
		SetupDrivers.driver.switchTo().alert().sendKeys("Survey, good work"); 	//Write in prompts
		SetupDrivers.driver.switchTo().alert().getText();						//get the text from alert
	}
	
	public void javaScriptExecutor(){
		
		JavascriptExecutor js = (JavascriptExecutor)SetupDrivers.driver; 	//Creating JS object
		
//		js.executeScript(script, args);
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.click();"); //Clicking on element
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.value ='shirt';"); //Writing something
		
		js.executeScript("EbaySearchResultLocatorsObj.cbxBrandNike.checked=true;"); //Interect Checkbox
		
		js.executeScript("window.location = 'http://upskill.com';"); // initializing location
		
		js.executeScript("location.reload()"); 						//Refresh browser
		
		js.executeScript("alert('Confirmation');");					//Alert
		
		js.executeScript("window.scrollBy(0,500)", ""); 			//Scroll down to specific pixel
		
		js.executeScript("window.scrollBy(0,-500)", ""); 			//Scroll up to specific pixel
		
		js.executeScript("arguments[0].scrollIntoView();", EbaySearchResultLocatorsObj.cbxBrandAdidas);  //Scroll to a object
		
		js.executeScript("window.scrollBy(0,document.body.scrollHeight)"); //Scroll down to bottom of website
	}
	
	public void handleIframe(){
		
		//i find iframe using iframe tag in DOM or HTML
		//i use switchTo().frame() to switch iframes
		
		//Switch iframe by index
		SetupDrivers.driver.switchTo().frame(0);
		SetupDrivers.driver.switchTo().frame(1);
		
		//Switch iframe by Name or Id
		SetupDrivers.driver.switchTo().frame("iframe-name");
		SetupDrivers.driver.switchTo().frame("iframe2");
		SetupDrivers.driver.switchTo().frame("id");
		
		//Switch back to previous iframe
		SetupDrivers.driver.switchTo().defaultContent();
		SetupDrivers.driver.switchTo().parentFrame();
		
		//nested iframe
		SetupDrivers.driver.switchTo().frame("parent");
		SetupDrivers.driver.switchTo().frame("child");
		SetupDrivers.driver.switchTo().frame("inner");
		
		EbaySearchResultLocatorsObj.cbxBrandNike.click();
		
		SetupDrivers.driver.switchTo().frame("child");
		SetupDrivers.driver.switchTo().frame("parent");
		SetupDrivers.driver.switchTo().defaultContent();
	}
	
	public void dynamicFrames(){
		
		List<WebElement> frameList = SetupDrivers.driver.findElements(By.tagName("iframe"));
		
		for(int i=0; i<(frameList.size()); i++){
			SetupDrivers.driver.switchTo().frame(i);
			
			EbaySearchResultLocatorsObj.cbxBrandNike.click();
			try{
				EbaySearchResultLocatorsObj.cbxBrandNike.click();
			} catch (Exception e){
				System.out.println("Element not found");
			}
		}
	}
	
	public void verifyRelatedItems(){
		EbaySearchResultLocatorsObj.txtiPhone.isDisplayed();
	}
}
