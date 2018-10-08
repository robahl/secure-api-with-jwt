const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.body.jwt) {
    const token = req.body.jwt;
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.json({error: err});
      }
      return next();
    });
  } else {
    res.json({error: "Unauthorized, no jwt"});
  }
};
