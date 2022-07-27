package upskill.ebay.pageElements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import upskill.utilities.SetupDrivers;

public class EbayHomepageLocators {
	
	//Locators using Page Factory
	
	//Search Text Box
	@FindBy(xpath="//input[@placeholder='Search for anything']")
	public WebElement txtbxSearch;
	
	//Search Button
	@FindBy(xpath="//input[contains(@value, 'Search')]")
	public WebElement btnSearch;
	
	//My Ebay Link
	@FindBy(xpath="//a[@title='My eBay']")
	public WebElement linkMyEbay;
	
	//Summary
	@FindBy(xpath="//a[contains(text(),'Summary1')]")
	public WebElement linkSummary;
	
	//Locators using without Page Factory
	public WebElement btnSearch2 = SetupDrivers.driver.findElement(By.xpath("//input[contains(@value, 'Search')]"));
	
}

