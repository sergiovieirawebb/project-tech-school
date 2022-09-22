const { Course } = require('../database/models');

const findAll = async () => {
  const findAllCourses = await Course.findAll();
  return findAllCourses;
};

const create = async (course) => {
  const createCourse = await Course.create(course);
  return createCourse;
};

const update = async (course, id) => {
  const [updatedCourseQtd] = await Course.update(course, { where: { id } });
  return updatedCourseQtd > 0;
};

const destroy = async (id) => {
  const destroyedCourseQtd = await Course.destroy({ where: { id } });
  return destroyedCourseQtd > 0;
};

module.exports = {
  findAll,
  create,
  update,
  destroy,
};
