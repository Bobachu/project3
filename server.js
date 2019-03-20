const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Requiring the `User` model for accessing the `users` collection
const User = require("./models/User");

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/GameAdvisor", { useNewUrlParser: true })

// Define API routes here
app.use(require("./routes"))

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function (req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function (gameAdvisor) {
      // If saved successfully, send the the new User document to the client
      res.json(gameAdvisor);
    })
    .catch(function (err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
