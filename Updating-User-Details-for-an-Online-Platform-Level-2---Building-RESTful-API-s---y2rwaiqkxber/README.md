Imagine you are working as a back-end developer for an online platform where you have to keep the details of the registered users. In this project, you will be working on a boilerplate code that contains an array of userDetails in a JSON format. Each object in the array contains id, name, mail and number of the user. Your task is to implement a PATCH request to update the detail of the user.

Features:

Implement a PATCH request (PATCH /api/v1/details/:id) to update the detail of the user in the database when some change is made by the user.
The PATCH request should contain the user id.
Return the updated user detail after the encountering the change made in it.
The API endpoint for this request should be: /api/v1/details/:id
Database:

The userDetails are stored in a JSON file named "userDetails.json". In the data directory.

Folder Structure:

The project has the following folder structure:

data/useraDetails.json : Has an array of json objects, used as a mock data dump file.
app.js : Contains the route which needs to be implemented.
Response:

If the PATCH request is successful, the server should return a JSON object containing the updated user details.
If the user id sent in the PATCH request is not found in the database, the server should return a 404 error.
If there is an error in the server, the server should return a 500 error.
Routes and Request Parameters:

The student needs to edit the ./src/app.js file to add the PATCH request. The request parameters should contain the user id as a URL parameter.

Third-Party Libraries:

There are no third-party libraries used in this project.

Sample Input and Output:

Case 1: Valid user id

1. PATCH /api/v1/details/2 

Sample Input:

Body containing the details to be updated

{
   "name": "Jaskaran Singh",
   "mail": "jasssahni47@gmail.com",
   "number": 9655758657
}
Sample Output:

{
    "status": "success",
    "message": "User details updated successfully for id: 2",
    "product": {
        "id": 2,
        "name": "Jaskaran Singh",
        "mail": "jasssahni47@gmail.com",
        "number": 9655758657
    }
}
2.PATCH /api/v1/details/1 

Sample Input: 

Body containing the details to be updated

{
   "name": "Sammy",
   "mail": "sammybanger1921@hotmail.com",
   "number": 9687589776
}
Sample Output:

{
    "status": "success",
    "message": "User details updated successfully for id: 1",
    "product": {
        "id": 1,
        "name": "Sammy",
        "mail": "sammybanger1921@hotmail.com",
        "number": 9687589776
    }
}
 

Case 2: Invalid user id

PATCH /api/v1/details/6

Sample Input:

Body containing the details to be updated

{
   "name": "Sameer",
   "mail": "sam19@gmail.com",
   "number": 76819955636
}
Sample Output:

{ "status": "failed", "message": "User not found!" } 
