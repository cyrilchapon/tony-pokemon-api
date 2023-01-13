'use strict';

const pokemonsData = require('../data/mock-pokemon')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemons', pokemonsData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemons', { id: pokemonsData.map(e => e.id) });
  }
};
