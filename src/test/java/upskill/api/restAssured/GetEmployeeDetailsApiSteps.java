package upskill.api.restAssured;

import static io.restassured.RestAssured.*;

import org.testng.annotations.Test;

public class GetEmployeeDetailsApiSteps {
	
	@Test
	public void GetAllEmployeeDetails(){
		given().
		when().
			get("http://dummy.restapiexample.com/api/v1/employee/10").
		then().
			assertThat().
			statusCode(200);
	}

}
