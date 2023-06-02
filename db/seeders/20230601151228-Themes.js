'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
    await queryInterface.bulkInsert('Themes', [
      {
      name: 'Угадай фильм по фразе',
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name: 'Harry Potter',
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name: 'Вопросы о музыке',
      createdAt: new Date(),
        updatedAt: new Date(),
    }
  ], {});
      },

  async down (queryInterface) {
    
    await queryInterface.bulkDelete('Themes', null, {});
    
  }
};
