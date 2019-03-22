// Save a reference to the Schema constructor
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            function(input){
                return input.length >= 6;
            },
            "Password should be longer"
        ]
<<<<<<< HEAD
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    // Populate users with the wishlist.
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: "Wishlist"
        }
    ]
=======
    }
>>>>>>> 308394635f1cadfc4b8c47b47bf8d4f5883f7674
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
