The project's folder structure should consist of four main folders: "src" inside which are "routes", "data" and "controllers".
    1.  "src" folder: This folder contains the "index. js", "app. js" files and "routes", "data" and "controllers" folders. Contains main source code files.
    2.  "routes" folder: This folder contains "weatherRoutes. js" files.  Handles request routing and handling logic.
    2.  "controllers" folder: This folder contains "weatherControllers. js" file.  Implements actions and business logic for the application.
    3. "data" folder: This folder contains "data. json" file. The file has all the weather data of the the cities.

You need to complete the following tasks:
1. Implement the saveWeatherAlert controller function in the ". /controllers/weatherControllers. js" file.                                                            2. Implement the router.post('/alerts', async (req, res) router function in "./routes/weatherRoutes.js" file.
This function should post weather alerts to the "data. json" file. The alert could contain information like cityName, Humidity, date, etc.
Endpoint: /weather/alerts
Method: POST
Expected Input & Output:
Input:
    req. body = { city, date, humidity } 
Output:
    1.  Upon successfully posting the weather alert data:
      Status code: 200
      JSON response: { "status": "success", "message": "Weather alert saved successfully" }

    2.  Unable to complete the process:
      Status code: 404
      JSON response:  { "status": "error", "message": "Failed to save weather alert" "error": "Failed to save weather alert" }

Third- Party Libraries: No third- party libraries are allowed for this task.
NOTE: All error messages and success messages should be in JSON format.
Please note that you should only make changes to the ". /controllers/weatherControllers. js" and. /routes/weatherRoutes. js" files and refrain from modifying any other file in the project.
