'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.token);

      //this.belongsToMany(models.product, {through: "cart"});
      //this.belongsToMany(models.size, {through: "cart"});
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    province: DataTypes.STRING,
    location: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    alt: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    registerDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};