const jwt = require('jsonwebtoken');

// eslint-disable-next-line func-names
module.exports = function (req, res, next) {
  // Get the header token
  const token = req.header('x-auth-token');

  // Checks if the token exists
  if (!token) {
    return res.status(401).json({ message: 'No hay Token, permiso no válido' });
  }

  // Checks if the token is valid
  try {
    const hashToken = jwt.verify(token, process.env.CODE);
    req.user = hashToken.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token no válido' });
  }
};
