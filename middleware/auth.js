const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.body.jwt) {
    const token = req.body.jwt;
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: err });
      }
      return next();
    });
  } else {
    // No JWT supplied
    res.status(401).json({ error: 'Unauthorized, no jwt' });
  }
};
