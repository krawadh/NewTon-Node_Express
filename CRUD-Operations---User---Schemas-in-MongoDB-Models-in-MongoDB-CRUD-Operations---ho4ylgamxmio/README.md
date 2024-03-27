User Management API
Overview
This project is a User Management API built using Node.js and Express, utilizing MongoDB for data storage. It provides a set of RESTful endpoints to create, retrieve, update, and delete user records. The project is structured into separate folders for controllers, models, and the main application file.

Folder Structure
The project follows a structured folder layout for better organization:

src/: This folder contains the main application code.
app.js: The entry point for the Express application, where routes and middleware are configured.
index.js: Handles the database connection.
controllers/: Contains the controller logic for handling HTTP requests.
userControllers.js: Defines routes and implements CRUD operations for users.
models/: Contains the data models used for user records.
userModel.js: Defines the user data schema using Mongoose, and interacts with MongoDB.
API Endpoints You Need To Implement 
Create a User
Endpoint: POST /api/users
Description: Create a new user.
Request Body: JSON object containing user data (e.g., name, email).
Response: If successful, returns a 201 status code with a message indicating "User created" and the created user data. If there's an error, it returns a 500 status code with an "Internal server error" message.
Retrieve a User
Endpoint: GET /api/users/:id
Description: Retrieve a user by their ID.
Request Parameter: id - The ID of the user to retrieve.
Response: If the user is found, it returns a 200 status code with a message indicating "Profile data" and the user data. If the user is not found, it returns a 404 status code with a "User not found" message. If there's an error, it returns a 500 status code with an "Internal server error" message.
Update a User
Endpoint: PATCH /api/users/:id
Description: Update an existing user by their ID.
Request Parameter: id - The ID of the user to update.
Request Body: JSON object containing the updated user data.
Response: If the user is updated successfully, it returns a 200 status code with a message indicating "User updated" and the updated user data. If the user is not found, it returns a 404 status code with a "User not found" message. If there's an error, it returns a 500 status code with an "Internal server error" message.
Delete a User
Endpoint: DELETE /api/users/:id
Description: Delete a user by their ID.
Request Parameter: id - The ID of the user to delete.
Response: If the user is deleted successfully, it returns a 200 status code with a message indicating "User deleted." If the user is not found, it returns a 404 status code with a "User not found" message. If there's an error, it returns a 500 status code with an "Internal server error" message.
Middleware
JWT authentication is implemented as middleware to protect certain routes and ensure the validity of JWT tokens. If the token is invalid or missing, it returns a 401 status code with an appropriate error message.

Usage
To use this API, you can send HTTP requests to the specified endpoints with the required data and headers as documented above. The project uses MongoDB to store user data, and you should replace the mock data with actual database queries in a real-world application.

Note on Response Messages
In this project, all responses include a message field with appropriate messages to provide clarity regarding the outcome of the request. For example, "User created," "Profile data," "User updated," or "User deleted." This consistent messaging helps developers understand the response status and actions performed.
