const express = require("express");
const app = express();
const cors = require("cors");
const router = require("../controllers/userControllers");

//Router Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", router);
console.log("under app.js");

module.exports = app;
