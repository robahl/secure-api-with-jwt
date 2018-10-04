const router = require('express').Router();
const User = require('../models/User.js');

// Index route - lists all users
router.get('/', (req, res) => {
  console.log("Hit users index");
  User.find().then((users) => res.json(users));
});

router.post('/add', (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({error: "Required query parameters, username, password, admin"});
  }

  // else
  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json({success: true}));
});

module.exports = router;
