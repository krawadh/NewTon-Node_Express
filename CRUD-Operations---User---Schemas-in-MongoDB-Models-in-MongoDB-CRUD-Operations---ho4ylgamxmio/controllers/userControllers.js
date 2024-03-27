// Import the necessary modules and models
const User = require("../model/userModel");
const Profile = require("../model/profileModel");
const express = require("express");

const router = express.Router();

// Create a new user
router.post("/users", async (req, res) => {
  // Implement user creation logic here
  // 1. Extract user data from the request body (req.body)

  // 2. Create a new user using User.create()
  try {
    const { name, email } = req.body;
    await User.create(req.body);
    res.status(201).json("User created");
  } catch (error) {
    res.status(500).json("Internal server error");
  }

  // 3. Handle success: Respond with a 201 status code and the created user
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

// Retrieve a user by ID
router.get("/users/:id", async (req, res) => {
  // Implement user retrieval logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Find the user by ID using User.findById()
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try {
    const id = req.params.id;
    const userRs = await User.findById(id);
    if (userRs) {
      res.status(200).json({ message: "success", userRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

// Retrieve all users
router.get("/users", async (req, res) => {
  // Implement user retrieval logic here
  // 2. Find the user by ID using User.find()
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try {
    const usersRs = await User.find();
    if (usersRs) {
      res.status(200).json({ message: "success", usersRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

// Update a user by ID
router.patch("/users/:id", async (req, res) => {
  // Implement user update logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Extract updated user data from the request body (req.body)
  // 3. Use User.findByIdAndUpdate() to update the user
  // 4. Handle success: Respond with a 200 status code and the updated user data
  // 5. Handle errors: Respond with appropriate error messages and status codes
  try {
    const id = req.params.id;
    //const updateNew = req.body;
    // Create a new object without _id and __v fields
    const { _id, __v, ...updateNew } = req.body;

    const userUpdatedRs = await User.findByIdAndUpdate(id, updateNew, {
      new: true,
    });

    if (userUpdatedRs) {
      res.status(200).json({ message: "User updated", userUpdatedRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

// Delete a user by ID
router.delete("/users/:id", async (req, res) => {
  // Implement user deletion logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Use User.findByIdAndDelete() to delete the user
  // 3. Handle success: Respond with a 200 status code and a deletion confirmation message
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try {
    const id = req.params.id;
    const userDeletedRs = await User.findByIdAndDelete(id);
    console.log(userDeletedRs);
    if (userDeletedRs) {
      res.status(200).json({ message: "User deleted", userDeletedRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

// Create a new user
router.post("/profile", async (req, res) => {
  // Implement user creation logic here
  // 1. Extract profile data from the request body (req.body)
  try {
    console.log(req.body);
    await Profile.create(req.body);
    res.status(201).json("Profile created");
  } catch (error) {
    console.log(error);

    res.status(500).json("Internal server error");
  }
});

module.exports = router;
