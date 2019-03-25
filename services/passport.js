const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using a "username"
    {
      usernameField: "username"
    },
    function(username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({ username }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (dbUser.password !== password) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

const jwtOptions = {
  // extract the jwt token we created from the header
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  // pass in the jwt secret to decode the token
  secretOrKey: "kittens"
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user exist in the DB
  db.User.findById(payload.sub)
    .then(user => {
      // If the user exists, call the done function with that user
      if (user) {
        done(null, user);
      } else {
        // If not call the done function without a user object
        done(null, false);
      }
    })
    .catch(err => {
      // if there is an error call the done function with the err and no user
      return done(err, false);
    });
});

passport.use(jwtLogin);

// Exporting our configured passport
module.exports = passport;
