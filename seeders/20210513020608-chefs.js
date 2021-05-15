'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Chefs', [{
      first_name: 'Brandon Hughes',
      last_name: '$$$'
    },
    {
      first_name: 'Andre Gomez',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$'
    },
    {
      first_name: 'Hieu Pham',
      last_name: '$$'
    },
    {
      first_name: 'Masatomo Hamaya',
      last_name: '$$'
    },
    {
      first_name: 'Takashi Otsuka',
      last_name: '$'
    },
    {
      first_name: 'Rob Kapusta',
      last_name: '$$'
    },
    {
      first_name: 'Bruce Logue',
      last_name: '$$'
    },
    {
      first_name: 'Jeff Gomez',
      last_name: '$$'
    },
    {
      first_name: 'Andrew Isabella',
      last_name: '$$$'
    },
    {
      first_name: 'NULL',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$'
    },
    {
      first_name: 'NULL',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$$'
    },
    {
      first_name: 'Kevin Maxey',
      last_name: '$$'
    },
    {
      first_name: 'Andrew Smith',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$$$'
    },
    {
      first_name: 'Jason "Chef Jay John" Johnson',
      last_name: '$'
    },
    {
      first_name: 'Duane Kulers',
      last_name: '$$'
    },
    {
      first_name: 'Lis Hernandez',
      last_name: '$'
    },
    {
      first_name: 'Tracy Gates',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$$'
    },
    {
      first_name: 'NULL',
      last_name: '$$'
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
