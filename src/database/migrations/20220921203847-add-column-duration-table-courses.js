module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Courses', 'duration', {
      allowNull: false,
      type: Sequelize.INTEGER,
      after: 'active',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Courses', 'duration');
  },
};
