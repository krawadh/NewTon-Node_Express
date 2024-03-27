// Import the necessary modules and models
const Profile = require("../model/profileModel");
const express = require("express");

const router = express.Router();

// Create a new user
router.post("/profile", async (req, res) => {
  // Implement user creation logic here
  // 1. Extract profile data from the request body (req.body)
  try {
    const { name, email } = req.body;
    await Profile.create(req.body);
    res.status(201).json("Profile created");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
