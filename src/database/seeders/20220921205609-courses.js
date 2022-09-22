module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Fullstack',
        description: 'Formação de Pessoa Desenvolvedora Júnior',
        creation_date: '2019-06-01T00:00:00',
        active: true,
        duration: 12,
      },
      {
        name: 'Backend',
        description: 'Formação de Pessoa Desenvolvedora Júnior para Backend',
        creation_date: '2023-01-01T00:00:00',
        active: false,
        duration: 7,
      },
      {
        name: 'Mobile',
        description: 'Formação de Pessoa Desenvolvedora Júnior para Mobile',
        creation_date: '2023-01-01T00:00:00',
        active: false,
        duration: 7,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
