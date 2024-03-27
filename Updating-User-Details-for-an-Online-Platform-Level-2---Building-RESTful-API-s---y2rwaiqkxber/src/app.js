const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from userDetails.json file
const userDetails = JSON.parse(
  fs.readFileSync(`${__dirname}/data/userDetails.json`)
);

//Middlewares
app.use(express.json());

// Write PATCH endpoint for editing user details

app.patch("/api/v1/details/:id", (req, res) => {
  let { id } = req.params;
  const { name, mail, number } = req.body;
  
  const index = userDetails.findIndex((e) => e.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).send({
      status: "failed",
      message: "User not found!",
    });
  }else{
    const newProducts = userDetails.map(e =>
      e.id === parseInt(id)
        ? { ...e, name, 'mail-Id':mail, number }
        : e
    );
    fs.writeFile(`${__dirname}/data/userDetails.json`, JSON.stringify(newProducts), (err)=>{
      if(err){
        return res.status(500).json({
          status: "error",
          message: "Internal server error"
        });
      }else{
        return res.status(200).json({
          status: "Success",
          message: "User details updated successfully for id: 1",
          product: {
            userDetails: { id, name, mail, number },
          },
        });
      }
    })
    
  }
  
});

// POST endpoint for registering new user
app.post("/api/v1/details", (req, res) => {
  const newId = userDetails[userDetails.length - 1].id + 1;
  const { name, mail, number } = req.body;
  const newUser = { id: newId, name, mail, number };
  userDetails.push(newUser);
  fs.writeFile(
    `${__dirname}/data/userDetails.json`,
    JSON.stringify(userDetails),
    (err) => {
      res.status(201).json({
        status: "Success",
        message: "User registered successfully",
        data: {
          userDetails: newUser,
        },
      });
    }
  );
});

// GET endpoint for sending the details of users
app.get("/api/v1/details", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Detail of users fetched successfully",
    data: {
      userDetails,
    },
  });
});

// GET endpoint for sending the details of users by id
app.get("/api/v1/userdetails/:id", (req, res) => {
  let { id } = req.params;
  id *= 1;
  const details = userDetails.find((details) => details.id === id);
  if (!details) {
    return res.status(404).send({
      status: "failed",
      message: "User not found!",
    });
  } else {
    res.status(200).send({
      status: "success",
      message: "Details of users fetched successfully",
      data: {
        details,
      },
    });
  }
});

module.exports = app;
