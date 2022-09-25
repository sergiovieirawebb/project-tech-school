const { Sequelize, Op } = require('sequelize');
const config = require('../database/config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const {
  Course, Student, Module, CourseModule,
} = require('../database/models');

const findAll = async (search = '') => {
  const findAllCourses = await Course.findAll({
    include: [
      { model: Student, as: 'students' },
      { model: Module, as: 'modules' },
    ],
    where: {
      name: { [Op.like]: `%${search}%` },
    },
  });
  return findAllCourses;
};

const findByPk = async (id) => {
  const findAllCourses = await Course.findByPk(id, {
    include: [
      { model: Student, as: 'students' },
      { model: Module, as: 'modules' },
    ],
  });
  return findAllCourses;
};

const create = async (course) => {
  const createCourse = await Course.create(course);
  return createCourse;
};

const createCourseWithModule = async (course) => {
  let result;

  await sequelize.transaction(async (t) => {
    const newCourse = await Course.create(course, { transaction: t });

    const promises = course.modules.map(async (module) => {
      const newModule = await Module.create(module, { transaction: t });

      await CourseModule.create({
        id_course: newCourse.id,
        id_module: newModule.id,
      }, { transaction: t });
    });

    await Promise.all(promises);

    result = Course.findByPk(newCourse.dataValues.id, {
      include: [{ model: Module, as: 'modules' }],
    });
  });

  return result;
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
  findByPk,
  create,
  update,
  destroy,
  createCourseWithModule,
};
