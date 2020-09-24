'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product);
      this.belongsTo(models.user);     
    }
  };
  cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};