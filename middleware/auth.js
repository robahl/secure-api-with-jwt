const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.body.jwt) {
    const jwt = req.body.jwt;
    jwt.verify(jwt, process.env.JWT_SECRET, (err, token) => {
      if (err) {
        return res.json({error: "Error verifying token"});
      }
      return next();
    });
  } else {
    res.json({error: "Unauthorized, no jwt"});
  }
};
