'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Restaurants.init({
    restaurant_name: DataTypes.STRING,
    location_photo_id: DataTypes.STRING,
    price_range: DataTypes.INTEGER,
    address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    cuisine_type: DataTypes.STRING,
    chef_id: DataTypes.INTEGER,
    hours: DataTypes.INTEGER,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurants',
  });
  return Restaurants;
};