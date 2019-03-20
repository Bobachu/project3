var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a Wishlist object.
var WishlistSchema = new Schema({
  // `title` must be of type String
  title: String,
});

// This creates our model from the above schema, using mongoose's model method
var Wishlist = mongoose.model("Wishlist", WishlistSchema);

// Export the Wishlist model
module.exports = Wishlist;
