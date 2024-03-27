const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  // Implement the user schema fields:
  // name as String and
  // email as a String,
  name: { type: "String", require: true },
  username: { type: "String", require: true },
  email: { type: "String", require: true },
  phone: { type: "Number", require: true },
});

// Create and export the User model
module.exports = new mongoose.model("user", userSchema);
