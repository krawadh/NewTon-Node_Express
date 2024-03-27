const { Schema, model } = require("mongoose");

//defing profile data Schemal
const profileSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true, max: 100, min: 18 },
  sex: { type: String, enum: ["male", "fimale", "other"], required: true },
  address: { type: String },
});

module.exports = model("profile", profileSchema);
