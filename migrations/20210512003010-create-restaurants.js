'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        location_photo_id: {
        type: Sequelize.STRING
      },
      price_range: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.INTEGER
      },
      menu_id: {
        type: Sequelize.INTEGER
      },
      cuisine_type: {
        type: Sequelize.STRING
      },
      chef_id: {
        type: Sequelize.INTEGER
      },
      hours: {
        type: Sequelize.INTEGER
      },
      website: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants');
  }
};