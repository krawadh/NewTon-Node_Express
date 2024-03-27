The Weather API Level-2 provides functionality to retrieve and manage weather data based on cities and zip codes. This level extends the Level-1 functionalities that focus on user authentication using JWT tokens.

Features:

To complete this project, you will need to implement the following features:

Implement a weatherData Model:

Model Fields
-->cityName: Type: String, Required: Yes, Description: The name of the city for which the weather data is recorded.
-->temperature:Type: Number, Required: Yes, Description: The temperature at the location.
-->zipCode:Type: String, Required: Yes, Description: The zip code of the location.
-->humidity:Type: Number, Required: Yes, Description: The humidity at the location.
-->weatherDescription:Type: String, Required: Yes, Description: A description of the weather at the location.
Endpoints

1. Get Weather by City Name
   Retrieve weather data for a specific city.

URL: /api/v1/weather/city/:cityName
Method: GET
Authentication: Bearer Token (JWT)
Parameters
cityName (path parameter) - Name of the city for which weather data is requested.
Response
Status Code: 200 OK
Response Body:
{
"weatherData": {
"\_id": "614dd61e8d48c238f9dca5f1",
"cityName": "NewYork",
"temperature": 25,
"humidity": 70,
"weatherDescription": "Partly Cloudy",
"zipCode": "3922",
"createdAt": "2021-09-25T12:00:00.000Z",
"updatedAt": "2021-09-25T12:30:00.000Z"
}
}

2. Get Weather by Zip Code

Retrieve weather data for a specific zip code.

URL: /api/v1/weather/zip/:zipCode
Method: GET
Authentication: Bearer Token (JWT)
Parameters
zipCode (path parameter) - Zip code for which weather data is requested.
Response
Status Code: 200 OK
Response Body:
{
"weatherData": {
"\_id": "614dd61e8d48c238f9dca5f1",
"cityName": "NewYork",
"temperature": 25,
"humidity": 70,
"weatherDescription": "Partly Cloudy",
"zipCode": "3922",
"createdAt": "2021-09-25T12:00:00.000Z",
"updatedAt": "2021-09-25T12:30:00.000Z"
}
} 3) Post Weather Alert
Post a weather alert for a specific location.

URL: /api/v1/weather/alert
Method: POST
Authentication: Bearer Token (JWT)
Request Body
cityName (string, required) - Name of the city for which the weather alert is to be posted.
temperature (number, required) - Temperature for the alert.
humidity (number, required) - Humidity for the alert.
weatherDescription (string, required) - Description of the weather for the alert.
zipCode (string, required) - Zip code for the alert location.
Response
Status Code: 201 Created
Response Body:
{
"message": "Weather alert posted successfully",
"alert": {
"\_id": "615a66287c9f6800348b94f2",
"cityName": "NewYork",
"temperature": 30,
"humidity": 70,
"weatherDescription": "Partly Cloudy",
"zipCode": "3922",
"createdAt": "2021-09-25T12:00:00.000Z",
"updatedAt": "2021-09-25T12:30:00.000Z"
}
}
Database information:

You will be using MongoDB as the database for the project. The schema models can found in /models folder. A weatherDataModel needs to be implemented.

Folder Structure: The project has a standard Node.js structure with a "routes" folder that contains all the route files, a "controllers" folder that contains all the controller files, and a "models" folder that contains all the model files. The src/index.js file is the main entry point for the application.
You need to edit

Files to Edit
./models/weatherDataModel.js: Implement a Mongoose model for storing weather data.

./controllers/weatherControllers.js: Build the necessary controllers for weather data operations.

Response for different scenarios:

API Routes and Responses
POST /api/v1/weather/city/:cityName

Calls getWeatherByCityName controller.
Returns weather data for the specified city.
Response Status: 200 (Success), 404 (Not Found)
POST /api/v1/weather/zip/:zipCode

Calls getWeatherByZipCode controller.
Returns weather data for the specified zip code.
Response Status: 200 (Success), 404 (Not Found)
POST /api/v1/weather/alert

Calls postWeatherAlert controller.
Posts a weather alert.
Response Status: 201 (Created), 500 (Internal Server Error)
Now you have a clear understanding of the project requirements and guidelines start by editing the files mentioned above.
