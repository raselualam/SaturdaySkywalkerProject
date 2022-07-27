package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbaySearchResultActions;

public class EbaySearchResultSteps {
	
	EbaySearchResultActions EbaySearchResultActionObj = new EbaySearchResultActions();

	@Then("^Item list should have only shoes related products$")
	public void item_list_should_have_only_shoes_related_products() throws Throwable {
		EbaySearchResultActionObj.verifyShoesItems();
	}
	
	@When("^Filter by \"([^\"]*)\"$")
	public void filter_by(String Brand) throws Throwable {
		EbaySearchResultActionObj.filterBrand(Brand);
	}

	@Then("^Item list should have products of \"([^\"]*)\"$")
	public void item_list_should_have_products_of(String brand) throws Throwable {
		EbaySearchResultActionObj.validateBrand(brand);
	}
	
	@When("^Select the first shirt on item list$")
	public void select_the_first_shirt_on_item_list() throws Throwable {
		EbaySearchResultActionObj.selectShirts();
		EbaySearchResultActionObj.switchNewWindow();
		Thread.sleep(2000);
	}
	
	@Then("^Item list should have only related products$")
	public void item_list_should_have_only_related_products() throws Throwable {
		EbaySearchResultActionObj.verifyRelatedItems();
	}
	
}
