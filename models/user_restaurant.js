'use strict';
const {
  Model
}=require('sequelize');
module.exports=(sequelize, DataTypes) => {
  class User_restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_restaurant.init({
    user_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    restaurant_photo: DataTypes.INTEGER,
    restaurant_name: DataTypes.INTEGER,
    cuisine_type: DataTypes.INTEGER,
    address: DataTypes.INTEGER,
    phone_number: DataTypes.INTEGER,
    website: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'User_restaurant',
  });
  return User_restaurant;
};
