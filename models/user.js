/* Implementation Notes
  Uses ajax call to create an account in the mongodbdatabase. Each user is given a starting point value of 2500
  */
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    total_points: {
      type: Number,
      default: 2500,
    },
    hunger: {
      type: Number,
      default: 2500,
    },
    token: String,
  });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
