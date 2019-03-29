// Save a reference to the Schema constructor
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

// Using the Schema constructor, create a new UserSchema object
const UserSchema = new Schema({
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
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer"
        ]
    },

    // Populate users with the wishlist.
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: "Wishlist"
        }
    ]
});



UserSchema.pre("save", function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            this.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
}


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);
// Export the User model
module.exports = User;
