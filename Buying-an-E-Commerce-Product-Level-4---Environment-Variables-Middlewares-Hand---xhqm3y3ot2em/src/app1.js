const fs = require("fs").promises; // Use fs.promises for async file operations
const express = require("express");
const app = express();

// Importing products from products.json file
const productsFilePath = `${__dirname}/data/product.json`;

// Middlewares
app.use(express.json());

// Write PATCH endpoint to buy a product for the client here
// Endpoint /api/v1/products/:id
app.patch("/api/v1/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let productsData = await fs.readFile(productsFilePath);
    let products = JSON.parse(productsData);

    const index = products.findIndex((product) => product.id === Number(id));
    if (index === -1) {
      res.status(404).send({ status: "failed", message: "Product not found!" });
    } else {
      if (products[index].quantity === 0) {
        res.status(404).send({
          status: "success",
          message: `${products[index].name}, Out of stock!`,
        });
      } else {
        products[index].quantity -= 1;

        await fs.writeFile(productsFilePath, JSON.stringify(products));

        res.status(200).send({
          status: "success",
          message: `Thank you for purchasing Product ${products[index].name}`,
          product: products[index],
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
