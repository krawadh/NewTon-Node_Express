Imagine you are working as a back-end developer for an online store that sells various products. The store has a database of products containing the product id, name, price, and quantity. Your task is to implement a PATCH request to reduce the quantity of a product when it is purchased.

Features:

Implement a PATCH request to reduce the quantity of a product in the database when it is purchased.
The PATCH request should contain the product id.
Return the updated product list after the quantity is reduced.
The API endpoint for this request should be: /api/v1/products/:id
Database:

The products are stored in a JSON file named "products.json". In the data directory.

Folder Structure:

The project has the following folder structure:

data/products.json : Has an array of json objects, used as a mock data dump file.
app.js : Contains the route which needs to be implemented.
Response:

If the PATCH request is successful, the server should return a JSON object containing the updated product list with status code 200.
If the product id sent in the PATCH request is not found in the database, the server should return a 404 error.
If the product id sent in the PATCH request is found but the product is out of stock show retuen code 404 with the staus success and the message.
If there is an error in the server, the server should return a 500 error.
Routes and Request Parameters:

The student needs to edit the ./src/app.js file to add the PATCH request. The request parameters should contain the product id as a URL parameter.

Third-Party Libraries:

There are no third-party libraries used in this project.

Sample Input and Output:

Sample Input:

PATCH /api/v1/products/2 

Sample Output:

status code: 200

{
    "status": "success",
    "message": "Thank you for purchasing Product 2",
    "product": {
        "id": 2,
        "name": "Product 2",
        "price": 20,
        "quantity": 9
    }
}
Sample Input:

PATCH /api/v1/products/1 

Sample Output:

status code: 200

{
    "status": "success",
    "message": "Thank you for purchasing Product 1",
    "product": {
        "id": 1,
        "name": "Product 1",
        "price": 10,
        "quantity": 4
    }
}
Sample Input: (Invalid ID Case)

PATCH /api/v1/products/3 

Sample Output:

status code:404

{ "status": "failed", "message": "Product not found!" } 
Sample Input: (Out of Stock Case)

PATCH /api/v1/products/2 

Sample Output:

status code: 404

{ "status": "success", "message": "Product 2, Out of stock!", }
