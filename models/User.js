let mongoose = require('mongoose');

let Schema = mongo.Schema;

let userSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean
});

module.exports = mongoose.model('User', userSchema);
