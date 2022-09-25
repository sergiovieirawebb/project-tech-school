module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('CourseModules', [
      {
        id_course: 1,
        id_module: 1,
      },
      {
        id_course: 1,
        id_module: 2,
      },
      {
        id_course: 1,
        id_module: 3,
      },
      {
        id_course: 2,
        id_module: 3,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('CourseModules', null, {});
  },
};
