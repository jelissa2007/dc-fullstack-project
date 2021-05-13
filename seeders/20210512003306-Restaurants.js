'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Restaurants', [{  
    restaurant_name: "Aziza",
    location_photo_id: 'https://cdn.vox-cdn.com/thumbor/cf5QVu8FQKjHEWVACY6J9dr36XA=/0x0:3000x1924/3820x1528/filters:focal(1260x722:1740x1202):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64819129/Aziza_19.0.jpg',
    price_range: 100,
    address: '1170 Howell Mill Rd NW, Suite P10b, Atlanta GA 30318',
    phone_number: 4049689437,
    cuisine_type: 'Mediterranean, Vegitarian',
    website: 'https://aziza-restaurant.com/',
  }],  {});
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
