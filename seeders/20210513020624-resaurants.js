'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Restaurants', [{
      restaurant_name: 'John Doe',
      location_photo: false,
      address: '',
      phone_number: '',
      menu_photo: '',
      cuisine_type: '',
      chef_id: 1,
      chef_photo: '',
      hours: '',
      website: '',
      popular_dish: '',
      food_photo: '',
      liked: TRUE
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
