'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hash = await bcrypt.hash('pikachu', 10)

    await queryInterface.bulkInsert('users', [{
      id: 1,
      username:'pikachu',
      password: hash
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { id: 1 });
  }
};
