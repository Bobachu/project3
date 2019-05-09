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
            .findById(req.params._id)
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    },

    // Adds titles to the Wishlist and pushes them to the User
    create: function (req, res) {
        db.Wishlist
            .create({
                title: req.body.title
            })
            .then(function(dbWish) {
                console.log(req.body.title);
                console.log(req.body.username);
                // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
                // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
                // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                return db.User.findOneAndUpdate({username: req.body.username}, { $push: { wishlist: dbWish._id } }, { new: true, upsert: true });
              })
              .then(function(dbUser) {
                // If the User was updated successfully, send it back to the client
                res.json(dbUser);
              })
              .catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
              });
          


            // .then(function () {
            //     console.log(req.body)
            //     if (id.match(/^[0-9a-fA-F]{24}$/)) {
            //         return db.User.findByIdAndUpdate({ _id: req.body.id }, { $push: { wishlist: req.body.title } }, { new: true, upsert: true });
            //     }
            // })
            // .then(function (dbUser) {
            //     // If the User was updated successfully, send it back to the client
            //     res.json(dbUser);
            // })
            // .catch(function (err) {
            //     // If an error occurs, send it back to the client
            //     res.json(err);
            // });
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
            .findOne({ _id: req.params.id })
            .then(dbWishlist => dbWishlist.remove())
            .then(dbWishlist => res.json(dbWishlist))
            .catch(err => res.status(422).json(err));
    }
};