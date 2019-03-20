const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Requiring the `User` model for accessing the `users` collection
const User = require("./models/User");

// Initialize Express
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userDB", { useNewUrlParser: true });

// Routes

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
