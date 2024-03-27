Weather API Application
As a backend developer, your task is to build a Weather API using Nodejs and Expressjs. You need to implement the feature in the application that should allow users to update blog in the database.
The project's folder structure should consist of four main folders: "src" inside which are "routes", "data" and "controllers".
    1. "src" folder: This folder contains the "index.js", "app.js" files and "routes", "data" and "controllers" folders. Contains main source code files.
    2. "routes" folder: This folder contains "weatherRoutes.js" files. Handles request routing and handling logic.
    2. "controllers" folder: This folder contains "weatherControllers.js" file. Implements actions and business logic for the application.
    3. "data" folder: This folder contains "data.json" file. The file has all the weather data of the the cities.
You need to complete the following tasks:
Implement the getWeatherDataByName controller function in the "./controllers/weatherControllers.js" file.
This function should fetch the weather data of the city with a given name, which will be given in api params.
Endpoint: /weather/city/:name
Method: GET
Expected Input & Output:
Input:
    req.params = { name } 
Output:
    1. Upon successfully fetching the weather data:
      Status code: 200
      JSON response: { "status": "success",  "message": "Weather data retrieved", "data": { "city": 'City Name', "temperature": 25, "humidity": 70, "windSpeed": 10, "conditions": 'Sunny'}}
    2. Unable to complete the process:
      Status code: 404
      JSON response:  { "status" :'error', "message":'Failed to retrieve weather data', "error"  :'City not found'}

Third-Party Libraries: No third-party libraries are allowed for this task.
NOTE: All error messages and success messages should be in JSON format.
Please note that you should only make changes to the "./controllers/weatherControllers.js" file and refrain from modifying any other file in the project.
