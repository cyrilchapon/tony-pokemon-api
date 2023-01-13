'use strict';

const endpointsData = require('../data/endpoint')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('endpoints', endpointsData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('endpoints', { id: endpointsData.map(e => e.id) });
  }
};
