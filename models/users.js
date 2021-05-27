'use strict';
const {
  Model
}=require('sequelize');
module.exports=(sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Restaurant, {
        through: 'User_restaurant.restaurant_id',
        foreignKey: 'user_id'
      });
    }
  };
  Users.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};