const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/product.json`));

// Middlewares
app.use(express.json());

// Write POST endpoint for creating new product here
// Endpoint /api/v1/products
app.post("/api/v1/products", (req, res) => {
  const { name, price, quantity } = req.body;
  if (
    typeof name === "string" &&
    typeof price === "number" &&
    typeof quantity === "number"
  ) {
    const id = products.length + 1;
    const newProduct = { id, name, price, quantity };
    console.log("data is correct", newProduct);

    fs.writeFileSync(
      `${__dirname}/data/product.json`,
      JSON.stringify([...products, newProduct]),
      (err) => {
        if (err) {
          return res.status(500).send("Internal server error.");
        }
      }
    );
    return res.status(201).json({
      status: "Success",
      message: "Product added successfully",
      data: {
        products,
      },
    });
  } else {
    console.log("data is incorrect");
  }
});

// GET endpoint for sending the details of users
app.get("/api/v1/products", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Details of products fetched successfully",
    data: {
      products,
    },
  });
});
app.get("/api/v1/products/:id", (req, res) => {
  let { id } = req.params;
  id *= 1;

  const product = products.find((product) => product.id === id);
  if (!product) {
    return res
      .status(404)
      .send({ status: "failed", message: "Product not found!" });
  }

  res.status(200).send({
    status: "success",
    message: "Product fetched successfully",
    data: {
      product,
    },
  });
});

module.exports = app;
