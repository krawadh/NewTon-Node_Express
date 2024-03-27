The client wants to integrate a feature in their web application where they can get the next number from the user input. They need an API endpoint that will accept a request with a number in req.body and return the next number as a response.

A web API is required to be implemented in ./src/app.js file that will accept a request with a number in req.body and return the next number as a response. The response should include a message and a status, where the message contains the next number and the status indicates the success or failure of the request.

Let's break it down into steps:

Create an API endpoint at /api/get-next-num that will accept GET requests.
The endpoint will receive a number in the req.body.
The endpoint will return a response with the next number as the message and the status as "success"
Response for different scenarios:

There are two possible scenarios:

Success: The API endpoint receives a valid number and returns the next number as the message with a status of "success".
Failure: The API endpoint receives an invalid number or no number and returns an error message with a status of "failure".
 Routes and request parameters:

The API endpoint you'll be creating is:

GET /api/get-next-num The endpoint will accept a request with a number in req.body. The number should be an integer.
Third-party libraries:

You don't need to use any third-party libraries for this feature.
Example: 

Request Method: GET

Endpoint: localhost:3000/api/get-next-num

Request Body:

{ "num": 10 } 

Response Body:

{ "message": 11, "status": "success" } 

In this example, the client sent a GET request to the /api/get-next-num endpoint with a number of 10 in the request body. The API endpoint processed the request and responded with a message containing the next number, which is 11, and a status of "success". The client can then use this information as needed in their web application.
