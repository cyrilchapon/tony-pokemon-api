'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pokemons', {
      id: {
        field: 'id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        field: 'name',
        allowNull: false,
        type: Sequelize.STRING,
      },
      hp: {
        field: 'hp',
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cp: {
        field: 'cp',
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      picture: {
        field: 'picture',
        allowNull: false,
        type: Sequelize.STRING,
      },
      types: {
        field: 'types',
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('pokemons');
  }
};
