module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Students', 'user', {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Students', 'password', {
      allowNull: false,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Students', 'role', {
      allowNull: false,
      defaultValue: 'student',
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Students', 'user');
    await queryInterface.removeColumn('Students', 'password');
    await queryInterface.removeColumn('Students', 'role');
  },
};
