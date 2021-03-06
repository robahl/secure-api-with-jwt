const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});

// Hash password before storing it
userSchema.pre('save', function(next) {
  bcrypt
    .hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      return next(err);
    });
});

userSchema.methods.comparePassword = async function(password) {
  // bcrypt comparison
  const res = await bcrypt.compare(password, this.password);
  return res;
};

module.exports = mongoose.model('User', userSchema);
