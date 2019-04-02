const db = require("../models");

module.exports = {
    // Finds all the Users
    findAll: function (req, res) {
        db.User
            .find()
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // Finds one User
    findOne: function (req, res) {
        db.User
            .findOne({ username: req.params.username })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    findWithWish: function (req, res) {
        console.log("hi");
        // Find all users
        db.User.find()
            // Specify that we want to populate the retrieved users with any associated notes
            .populate("wishlist")
            .then(dbUser => res.json(dbUser))
            .catch(err => res.json(err));
    },

    // Creates a new User
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // Updates data on the User.
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // Removes a User
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};