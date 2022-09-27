const { Student } = require('../database/models');
const { generateJwtToken } = require('../utils/jwt');
const error = require('../utils/error');

const authenticate = async ({ email, password }) => {
  const student = await Student.findOne({
    attributes: ['id', 'user', 'email', 'role'],
    where: { email, password },
  });

  if (!student) {
    throw error(401, 'Dados estão incorretos!');
  }

  return generateJwtToken(student);
};

module.exports = {
  authenticate,
};
