@regression @smoke @SKYW-18 @E2E
Feature: Ebay Search Functionality

	Scenario: Search for Excel items
		Given Open Ebay Homepage
		When Search item from Excel file data
		Then Item list should have only related products