'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('endpoints', {
      id: {
        field: 'id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        field: 'type',
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        field: 'name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      adress: {
        field: 'adress',
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        field: 'description',
        allowNull: false,
        type: Sequelize.STRING,
      },
      condition: {
        field: 'condition',
        allowNull: false,
        type:Sequelize.STRING,
      },
      created: {
        field: 'created',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('endpoints');
  }
};
