const mongoose = require('mongoose');

const Schema = mongo.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean
});

module.exports = mongoose.model('User', userSchema);
