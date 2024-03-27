Imagine you are working as a back-end developer for an online platform where you have to keep the details od the registered users. In this project, you will be working on a boilerplate code that contains an array of userDetails in a JSON format. Each object in the array contains id, name, mail and number of the user. Your task is to create a new route using the HTTP DELETE request method to delete the details of a user from the given array.

Requirements:

You should delete the detail of the user by sending a DELETE request to the API endpoint /api/v1/details/:id where :id is the id of the user you want to delete.
If the user with the given id is not found, the API should return a 404 Not Found status code along with an error message.
If the user is deleted successfully, the API should return a 200 OK status code along with a success message.
Database:

The project is using a JSON file to store the user details. The JSON file contains an array of details, with each object representing a single user. The detail objects have the following properties:

id: The unique identifier for the user.
name: The name of the user.
mail: The mail id of the user.
number: The number of the user.
Folder Structure:

The project has the following folder structure:

data/userDetails.json : Has an array of json objects, used as a mock data dump file.
app.js : Contains the route which needs to be implemented.
Response for different scenarios:

If the details of the user with the given id is found the details with the id will we deleted and a message and the API should return a 201 status code along with the message User details deleted successfully and the deleted user detail.
If no detail with the given id is found, the API should return a 404 Bad Request status code along with an error message.
Routes and request parameters: The API endpoint for deleting a user detail is /api/v1/details/:id where :id is the id of the user to be deleted.

Third Party Libraries: There are no third-party libraries required for this project.

Now that you have a clear understanding of the project requirements and guidelines, start by editing the ./src/app.js file to delete the detail of the user using the HTTP DELETE request method.

Sample Inputs/Outputs: 
Case 1: Valid user id

Input: DELETE /api/v1/details/1

Output: 
{    

    "status": "success", 

    "message": "User details deleted successfully",

    "data": { 

        "details": { 

            "id": 1, 

            "name": "Sameer", 

            "mail": "bangersammy242@gmail.com", 

            "number": 97765679850 

          } 

     } 

}

Case 2: Invalid user id

Input: DELETE /api/v1/details/7

Output: { "status": "failed", "message": "User not found!" }
