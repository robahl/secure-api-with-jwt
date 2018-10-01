const router = require('express').Router();
const User = require('../models/User.js');

// Index route - lists all users
router.get('/', (req, res) => {
  console.log("Hit users index");
  User.find().then((users) => res.json(users));
});

router.post('/add', (req, res) => {
  let q = req.query;
  console.log(q);
  if (!q.username || !q.password || !q.admin) {
    return res.json({error: "Required query parameters, username, password, admin"});
  }

  // else
  User.create({
    username: q.username, password: q.password, admin: q.admin
  }).then(user => res.json({success: true}));
});

module.exports = router;
