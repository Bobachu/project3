const express = require("express");
const passport = require("passport");
require("./services/passport");
const requireSignin = passport.authenticate("local", { session: false });
const requireToken = passport.authenticate("jwt", { session: false });
const jwt = require("jsonwebtoken");
// const path = require("path");
const config = require("./config");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Requiring the `User` model for accessing the `users` collection
const User = require("./models/User");

// Initialize Express
const app = express();
//these are for the "scraper"
const cheerio = require("cheerio");
const axios = require("axios");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("client/build"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GameAdvisor";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here
app.use(require("./routes"));

// Route to post our form submission to mongoDB via mongoose
app.post("/api/signup", function(req, res) {
  // Create a new user using req.body
  console.log(req.body);
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      console.log(dbUser);
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.post("/api/login", requireSignin, function(req, res) {
  // console.log(req.user);
  jwt.sign({ sub: req.user.id }, config.secret, function(err, token) {
    res.json({ token });
  });
  // res.send("You are logged in!");
});

app.get("/api/gamerankings", function(req, res) {
  // First, tell the console what server.js is doing
  console.log(
    "\n***********************************\n" +
      "Grabbing current top games" +
      "\n***********************************\n"
  );

  // Making a request via axios for "npd"scrape.
  axios
    .get(
      "https://www.npd.com/wps/portal/npd/us/industry-expertise/video-games/"
    )
    .then(function(response) {
      // Load the Response into cheerio and save it to a variable
      // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
      var $ = cheerio.load(response.data);

      // An empty array to save the data that we'll scrape
      var results = [];

      // With cheerio, find the "table" class
      // (i: iterator. element: the current element)
      $("table tbody tr").each(function(i, element) {
        let tr = {
          rank: "",
          rankLastMonth: "",
          title: "",
          publisher: ""
        };
        // Save the text of the element in a "table" variable
        $(element)
          .find("td")
          .each(function(i, element) {
            switch (i) {
              case 0:
                tr.rank = $(element).text();
                break;
              case 1:
                tr.rankLastMonth = $(element).text();
                break;
              case 2:
                tr.title = $(element)
                  .text()
                  .replace(/\^|\*/, " ");
                break;
              case 3:
                tr.publisher = $(element).text();
                break;
            }
          });
        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        results.push(tr);
        // console.log(results)
      });

      // Log the results once you've looped through each of the elements found with cheerio
      res.send(results);
    });
});

app.get("/api/esrb/:game", function (req, res) {
  // First, tell the console what server.js is doing
  console.log("\n***********************************\n" +
    "Grabbing current top games" +
    "\n***********************************\n");
 
  axios.get("https://www.esrb.org/ratings/search.aspx?searchType=title&titleOrPublisher=" + req.params.game).then(function (response) {
    let $ = cheerio.load(response.data);
    let esrbData = [];
    const dataRow = $("tbody tr").eq(0);

    const img = dataRow.find("td[data-title=Ratings] img").attr("src");
    const descriptor = dataRow.find('td[data-title="Content Descriptors"] div').text().trim();
    // console.log(img);
    // console.log(descriptor);
    esrbData.push(img, descriptor)
    res.json(esrbData);
    console.log(req.params);
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/client/build/index.html"));
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

