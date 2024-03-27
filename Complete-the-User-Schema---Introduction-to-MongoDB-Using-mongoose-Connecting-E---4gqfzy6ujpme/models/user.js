var mongoose = require("mongoose");

//Write your schema here with name of schema as userSchema
const userSchema = new mongoose.Schema({
  name: { type: "String", require: true },
  email: { type: "String", require: true },
  pswd: { type: "String", require: true },
  role: { type: "String", require: true },
});

module.exports = mongoose.model("users", userSchema);
