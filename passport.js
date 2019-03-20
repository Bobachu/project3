// Be sure to run this npm install below

// npm install passport passport-local mongoose passport-local-mongoose --save

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({});
 
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);

// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/user');
 
// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());
 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


