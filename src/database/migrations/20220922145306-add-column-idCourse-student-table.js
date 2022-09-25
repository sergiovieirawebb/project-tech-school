module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Students', 'id_course', {
      allowNull: false,
      type: Sequelize.INTEGER,
      after: 'active',
      references: {
        model: 'Courses',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Students', 'id_course');
  },
};
