'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Restaurant.init({
    restaurant_name: DataTypes.STRING,
    location_photo: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    menu_photo: DataTypes.STRING,
    cuisine_type: DataTypes.STRING,
    chef_id: DataTypes.INTEGER,
    chef_photo: DataTypes.STRING,
    hours: DataTypes.STRING,
    website: DataTypes.STRING,
    popular_dish: DataTypes.STRING,
    food_photo: DataTypes.STRING,
    liked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};