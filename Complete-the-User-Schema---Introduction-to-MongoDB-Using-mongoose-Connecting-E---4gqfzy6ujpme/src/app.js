const express = require("express");
const fs = require("fs");
const app = express();
var users = require("../models/user.js");
const users_data = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/users.json`)
);

//Router Middlewares
app.use(express.json());

app.get("/:id", async function (req, res) {
  try {
    var id = req.params.id;
    var name, email, pswd, role;

    for (var i = 0; i < users_data.length; i++) {
      if (users_data[i]["id"] == id) {
        name = users_data[i]["name"];
        email = users_data[i]["email"];
        pswd = users_data[i]["pswd"];
        role = users_data[i]["role"];
      }
    }

    var newUser = new users({
      name: name,
      email: email,
      pswd: pswd,
      role: role,
    });
    newUser
      .save(newUser)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    const userRs = await users.find();
    res.send(userRs);
  } catch (err) {
    console.log(err);
  }
});
module.exports = app;
