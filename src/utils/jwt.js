require('dotenv').config();
const jwt = require('jsonwebtoken');
const error = require('./error');

const { TOKEN_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJwtToken = (payload) => ({
  token: jwt.sign({ payload }, TOKEN_SECRET, jwtConfig),
});

const authenticateJwtToken = (token) => {
  if (!token) {
    throw error(401, 'token not exists');
  }

  try {
    return jwt.verify(token, TOKEN_SECRET);
  } catch (e) {
    throw error(401, 'token malformed');
  }
};

module.exports = {
  generateJwtToken,
  authenticateJwtToken,
};
