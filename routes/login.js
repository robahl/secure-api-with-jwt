const router = require('express').Router();
const User = require('../models/User');

router.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({username: req.body.username})
      .then(user => {
        if (user.password === req.body.password) {
          res.json({success: "username and password matched"});
        } else {
          res.json({error: "Username and password mismatch"});
        }
      })
      .catch(err => {
        res.json({error: err})
      });
  } else {
    res.json({error: "Must provide username and password"});
  }
});

module.exports = router;
