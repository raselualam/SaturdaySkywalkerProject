@api @regression
Feature: App user should able to create and get employee record using API

Scenario: Employee Record Details
	Given Create new employee record details
	When Get all employee record details
	Then Get single employee record details 