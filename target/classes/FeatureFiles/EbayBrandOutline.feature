@regression @smoke @SKYW-17
Feature: Ebay Brand Outline

	Scenario Outline: Search for items with Brands
		Given Open Ebay Homepage
		When Search for "<Items>"
		And Filter by "<Brand>"
		Then Item list should have products of "<Brand>"
		
	Examples:
		|Items		|Brand		|
		|Shoes		|Nike		|
		|Shirts		|Adidas		|
		|Pants		|Unbranded	|
		

	Scenario Outline: Search for items with Brands
		Given Open Ebay Homepage
		When Search for "<Items>"
		And Filter by "<Brand>"
		And Select Color "<Color>"
		And Select Size "<Size>"
		And Select Conditions "<Conditions>"
		Then Item list should have products of "<Brand>"
		
	Examples:
		|Items		|Brand		| Color | Size 	| Conditions 	|
		|Shoes		|Nike		| Black | Tall	| Pre-owned		|
		|Shirts		|Adidas		| Blue  |		|				|
		|Pants		|Unbranded	| Gray  |Juniors| New			|
		
		