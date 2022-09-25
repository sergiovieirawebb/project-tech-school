module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Modules', [{
      name: 'Fundamentos',
      description: 'Formação de Pessoa Desenvolvedora Júnior',
      duration: 3,
      qtd_block: 8,
    },
    {
      name: 'Frontend',
      description: 'Formação de Pessoa Desenvolvedora Júnior',
      duration: 2,
      qtd_block: 10,
    },
    {
      name: 'Backend',
      description: 'Formação de Pessoa Desenvolvedora Júnior',
      duration: 4,
      qtd_block: 12,
    }], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Modules', null, {});
  },
};
