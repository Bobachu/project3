const db = require("../models");

module.exports = {
    // Finds all the titles that have been added to the Wishlist
    findAll: function(req, res) {
        db.Wishlist
            .find()
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Finds one item on the Wishlist
    findById: function(req, res) {
        db.Wishlist
            .find(req.params.id)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Adds titles to the Wishlist
    create: function(req, res) {
        db.Wishlist
            .create(req.body)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Updates a title on the Wishlist if needed
    update: function(req, res) {
        db.Wishlist
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbWishlist => res.json(dbWishlist))
          .catch(err => res.status(422).json(err));
      },    

    // Removes a title from the wishlist
    remove: function(req, res) {
        db.Wishlist
            .findById({_id: req.params.id})
            .then(dbWishlist => dbWishlist.remove())
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    } 
};