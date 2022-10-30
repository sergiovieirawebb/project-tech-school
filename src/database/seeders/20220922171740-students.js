module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Students', [{
      name: 'Pessoa Estudante 1',
      email: 'estudate1@teste.com',
      password: '1234567',
      birth_date: '1984-03-05T02:00:00',
      active: true,
      id_course: 2,
    },
    {
      name: 'Pessoa Estudante 2',
      email: 'estudante2@teste.com',
      birth_date: '1974-03-05T02:00:00',
      password: '1234567',
      active: true,
      id_course: 2,
    },
    {
      name: 'Pessoa Estudante 3',
      email: 'estudante3@teste.com',
      password: '1234567',
      birth_date: '1989-03-05T02:00:00',
      active: false,
      id_course: 3,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
