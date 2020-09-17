'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //product.belongsTo(models.category, {foreignKey: product.id, as: category});
    }
  };
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    alt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};