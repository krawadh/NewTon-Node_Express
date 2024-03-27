const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/product.json`));

// Middlewares
app.use(express.json());

// Write PATCH endpoint to buy a product for the client here
// Endpoint /api/v1/products/:id
app.patch("/api/v1/products/:id", (req, res) => {
  const id = req.params.id;
  console.log(products);
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
      products[index] = {
        ...products[index],
        quantity: products[index].quantity - 1,
      };
      fs.writeFile(
        `${__dirname}/data/product.json`,
        JSON.stringify(products),
        (err) => {
          if (err) {
            res.status(500).send({ message: "Internal server error" });
          } else {
            res.status(200).send({
              status: "success",
              message: `Thank you for purchasing Product ${products[index].name}`,
              product: products[index],
            });
          }
        }
      );
    }
  }
  console.log(index);
});

module.exports = app;
