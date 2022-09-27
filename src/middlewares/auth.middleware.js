const { authenticateJwtToken } = require('../utils/jwt');
const error = require('../utils/error');

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const user = authenticateJwtToken(token);

  req.user = user;

  return next();
};

const authValidationMiddleware = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw error(401, 'Fields email or password not found!');
  }

  return next();
};

module.exports = {
  authenticateMiddleware,
  authValidationMiddleware,
};
