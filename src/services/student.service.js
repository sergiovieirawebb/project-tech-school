const { Course, Student } = require('../database/models');

const findAll = async () => {
  const findAllStudents = await Student.findAll({
    attributes: { exclude: ['password'] },
    include: { model: Course, as: 'course' },
  });
  return findAllStudents;
};

// lazyloading
const findByPk = async (id, includeCourse) => {
  const student = (course) => Student.findByPk(id, course);
  const attributes = { exclude: ['id_course', 'password'] };

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

const create = async (student) => {
  const createStudent = Student.create(student);
  return createStudent;
};

module.exports = {
  findAll,
  findByPk,
  create,
};
