package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import upskill.ebay.pageElements.EbayCartLocators;
import upskill.utilities.SetupDrivers;

public class EbayCartActions {
	
	EbayCartLocators EbayCartLocatorsObj;
	
	public EbayCartActions(){
		EbayCartLocatorsObj = new EbayCartLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayCartLocatorsObj);
	}
	
	public void selectSizeTypeDD() throws Exception{
		Select dropDown = new Select(EbayCartLocatorsObj.ddSizeType);
		dropDown.selectByVisibleText("Big & Tall");
		Thread.sleep(2000);
	}
	
	public void selectMenSizeDD() throws Exception{
		Select dropDown =new Select(EbayCartLocatorsObj.ddMenSize);
//		dropDown.selectByVisibleText("6XLT");
		dropDown.selectByIndex(1);
		Thread.sleep(2000);
	}
	
	public void selectShadeDD() throws Exception{
		Select dropDown =new Select(EbayCartLocatorsObj.ddShade);
//		dropDown.selectByVisibleText("Red");
		dropDown.selectByValue("13");
		Thread.sleep(2000);
	}
	
	public void selectQuantity(){
		EbayCartLocatorsObj.txtbxQty.sendKeys("2");
	}
	
	public void addtoCart() throws Exception{
		EbayCartLocatorsObj.btnAddCart.click();
		Thread.sleep(20000);
	}

}
