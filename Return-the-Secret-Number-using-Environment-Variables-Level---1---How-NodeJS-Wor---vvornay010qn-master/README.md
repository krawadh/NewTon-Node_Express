Q :- You are a programmer working for a startup that has created a game that involves guessing a secret number. The game is now in the testing phase, and the team needs to retrieve the secret number from the .env file and display it on a webpage for testing purposes. You are tasked with writing a GET route using the provided code to retrieve the secret number stored in the .env file and display it on the webpage. The success of the game's testing phase relies heavily on the accurate retrieval of the secret number, so your task is crucial to the success of the startup.

Features:

To complete this project, you will need to implement the following features:

Implement a GET Route:
You need to return the value stored in the NUMBER variable stored in the .env file

Sample Response: Status Code 200
{
    "number" : "2"
}

In Case of any error send error code 404, with the following response:
{ "err": "Not Found"}

Database information: 

No Database is required for this project.

Folder Structure:  The Project follows a standard Node.js file structure, you need to edit ./src/app.js and complete the GET /api/get-env route to finish the task

Response for different scenarios:

GET /api/get-env - This route extracts the value from the env variable and return them.

Now that you have a clear understanding of the project requirements and guidelines, start by editing the files mentioned above.
