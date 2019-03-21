const db = require("../models");

module.exports = {
    // Finds all the Users
    findAll: function(req, res) {
        db.User
            .find()
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // Finds one User
    findById: function(req, res) {
        db.User
            .find(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // Creates a new User
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // Updates data on the User.
    update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
      },    

    // Removes a User
    remove: function(req, res) {
        db.User
            .findById({_id: req.params.id})
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    } 
};