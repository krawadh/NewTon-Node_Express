Weather API Application
As a backend developer, your task is to build a Weather API using Nodejs and Expressjs. You need to implement the feature in the application that should allow users to fetch 7 days weather forecast from the database.

The project's folder structure should consist of four main folders: "src" inside which are "routes", "data" and "controllers".
    1.  "src" folder: This folder contains the "index. js", "app. js" files and "routes", "data" and "controllers" folders. Contains main source code files.
    2.  "routes" folder: This folder contains "weatherRoutes. js" files.  Handles request routing and handling logic.
    2.  "controllers" folder: This folder contains "weatherControllers. js" file.  Implements actions and business logic for the application.
    3. "data" folder: This folder contains "data. json" file. The file has all the weather data of the the cities.

You need to complete the following tasks:
Implement the getForecastDataByName controller function in the ". /controllers/weatherControllers. js" file.
This function should fetch the 7 days weather forecast from the database with a given name, which will be given in api params.
Endpoint: /weather/city/:name/forecast
Method: GET
Expected Input & Output:
Input:
    req. params = { name } 
Output:
    1.  Upon successfully fetching the weather forecast data:
      Status code: 200
      JSON response: { "status": "success", "message": "Forecast data retrieved", "data": { "day1": { "temperature": 23, "humidity": 62, "conditions": "Partly Cloudy" }, "day2": { "temperature": 24, "humidity": 58, "conditions": "Sunny" }, "day3": { "temperature": 26, "humidity": 60, "conditions": "Partly Cloudy" }, "day4": { "temperature": 25, "humidity": 62, "conditions": "Partly Cloudy" }, "day5": { "temperature": 23, "humidity": 64, "conditions": "Rainy" }, "day6": { "temperature": 22, "humidity": 66, "conditions": "Cloudy" }, "day7": { "temperature": 24, "humidity": 68, "conditions": "Sunny" } } }

    2.  Unable to complete the process:
      Status code: 404
      JSON response:  { "status" :'error', "message":'Failed to retrieve forecast data', "error"  :'City not found'}

Third- Party Libraries: No third- party libraries are allowed for this task.
NOTE: All error messages and success messages should be in JSON format.
Please note that you should only make changes to the ". /controllers/weatherControllers. js" and. /routes/weatherRoutes. js" files and refrain from modifying any other file in the project.

