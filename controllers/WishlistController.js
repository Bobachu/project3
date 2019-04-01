const db = require("../models");

module.exports = {
    // Finds all the titles that have been added to the Wishlist
    findAll: function (req, res) {
        db.Wishlist
            .find()
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Finds one item on the Wishlist
    findById: function (req, res) {
        db.Wishlist
            .find(req.params.id)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Adds titles to the Wishlist and pushes them to the User
    create: function (req, res) {
        db.Wishlist
            .create(req.body)
            .then(function () {
                console.log(req.body)
                if (id.match(/^[0-9a-fA-F]{24}$/)) {
                    return db.User.findByIdAndUpdate({ _id: req.body.id }, { $push: { wishlist: req.body.title } }, { new: true, upsert: true });
                }
            })
            .then(function (dbUser) {
                // If the User was updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    },

    // Updates a title on the Wishlist if needed
    update: function (req, res) {
        db.Wishlist
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Removes a title from the wishlist
    remove: function (req, res) {
        db.Wishlist
            .findById({ _id: req.params.id })
            .then(dbWishlist => dbWishlist.remove())
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    }
};