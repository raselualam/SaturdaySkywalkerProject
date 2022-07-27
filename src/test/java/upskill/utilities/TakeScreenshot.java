package upskill.utilities;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class TakeScreenshot {

	public void screenShot() throws Exception{
//		Screenshot: 
		File screenshot = ((TakesScreenshot)SetupDrivers.driver).getScreenshotAs(OutputType.FILE);
//		FileUtils.copyFile(screenshot, new File("C:\\UpSkillSoftware\\Screenshots\\ebay.jpg"));
//		FileUtils.copyFile(screenshot, new File("C:\\Users\\rasel\\workspace\\SaturdaySkywalkerProject\\screenshot\\ebay.jpg"));
		FileUtils.copyFile(screenshot, new File(System.getProperty("user.dir")+"\\screenshot\\ebay.jpg"));
		System.out.println(" >>>>>>>>>>>>>>>>>>> Screenshot Taken");;
	}
	
	public void screenShots() throws IOException {

		String filename = "Ebay "; // it will create the screenshot name

		DateFormat dateFormat = new SimpleDateFormat("mm-dd-yyyy h-m-s"); // it will create the date and time for																			// screenshot name
		Date date = new Date();

		File screenshot = ((TakesScreenshot) SetupDrivers.driver).getScreenshotAs(OutputType.FILE);

		// Get the dynamic user directory, specify the folder call the methods to
		// Construct unique name for screenshot then provide the type of the file.
		FileUtils.copyFile(screenshot, new File(System.getProperty("user.dir")+"\\screenshots\\"
															+filename+dateFormat.format(date)+".png"));

		System.out.println(">>>>>>>> ScreenShot Taken >>>>>>>");
	}
}