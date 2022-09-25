const { Course, Student } = require('../database/models');

const findAll = async () => {
  const findAllStudents = await Student.findAll({
    // alias, sort, etc...
    include: { model: Course, as: 'course' },
  });
  return findAllStudents;
};

// lazyloading
const findByPk = async (id, includeCourse) => {
  const student = (course) => Student.findByPk(id, course);
  const attributes = { exclude: ['id_course'] };

  if (includeCourse === 'true') {
    return student({
      attributes,
      include: {
        model: Course,
        as: 'course',
      },
    });
  }
  return student({ attributes });
};

module.exports = {
  findAll,
  findByPk,
};
