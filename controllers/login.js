const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({username: req.body.username})
      .then(user => {
        if (user.comparePassword(req.body.password)) {
          let payload = {
            username: user.username
          }

          jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 500}, jwt => {
            res.json({
              success: "username and password matched",
              jwt
            });
          });
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
