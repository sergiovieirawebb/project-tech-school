module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseModules', {
      idCourse: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id_course',
        references: {
          model: 'Courses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      idModule: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id_module',
        references: {
          model: 'Modules',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('CourseModules');
  },
};
