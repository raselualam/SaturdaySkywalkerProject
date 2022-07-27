package upskill.api.restAssured;

import java.io.File;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class EmployeeDetailsApiSteps {
	
	@Given("^Create new employee record details$")
	public void create_new_employee_record_details() throws Throwable {
	    
		//Brining json request body
		File payload = new File(System.getProperty("user.dir") + "/src/test/resource/ApiPayloads/EmployeeDetails.json");
		
		//Initialize Request, Set Header & Body
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		request.body(payload);
		
		//Getting API HTTP response using RestAssured
		Response resp = RestAssured.post("http://dummy.restapiexample.com/api/v1/create"); 
		
		//Getting Status Code & Validate
		int statusCode = resp.statusCode();
		Assert.assertEquals(200, statusCode);
		
		//Getting the response Body & Validate
		String responseBody = resp.asString();
		Assert.assertFalse(responseBody.isEmpty());
		
		//Print out response body and status code
		System.out.println("Status Code : " + statusCode);
		System.out.println("Response Body : " + responseBody);
	}

	@When("^Get all employee record details$")
	public void get_all_employee_record_details() throws Throwable {
	    
		//Getting API HTTP response using RestAssured
		Response resp = RestAssured.get("http://dummy.restapiexample.com/api/v1/employees"); 
		
		//Getting Status Code & Validate
		int statusCode = resp.statusCode();
		Assert.assertEquals(200, statusCode);
		
		//Getting the response Body & Validate
		String responseBody = resp.asString();
		Assert.assertFalse(responseBody.isEmpty());
		
		//Print out response body and status code
		System.out.println("Status Code : " + statusCode);
		System.out.println("Response Body : " + responseBody);
	}

	@Then("^Get single employee record details$")
	public void get_single_employee_record_details() throws Throwable {
		
		//Getting API HTTP response using RestAssured
		Response resp = RestAssured.get("http://dummy.restapiexample.com/api/v1/employee/10"); 
		
		//Getting Status Code & Validate
		int statusCode = resp.statusCode();
		Assert.assertEquals(200, statusCode);
		
		//Getting the response Body & Validate
		String responseBody = resp.asString();
		Assert.assertFalse(responseBody.isEmpty());
		
		//Print out response body and status code
		System.out.println("Status Code : " + statusCode);
		System.out.println("Response Body : " + responseBody);
	}
}
