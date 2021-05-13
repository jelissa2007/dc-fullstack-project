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
      restaurant_name: {
        type: Sequelize.STRING
      },
      location_photo: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      menu_photo: {
        type: Sequelize.STRING
      },
      cuisine_type: {
        type: Sequelize.STRING
      },
      chef_id: {
        type: Sequelize.INTEGER
      },
      chef_photo: {
        type: Sequelize.STRING
      },
      hours: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      popular_dish: {
        type: Sequelize.STRING
      },
      food_photo: {
        type: Sequelize.STRING
      },
      liked: {
        type: Sequelize.BOOLEAN
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