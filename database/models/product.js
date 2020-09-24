'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category);
      this.belongsToMany(models.size, {through: 'products_sizes'} );
      this.belongsToMany(models.user, {through: "cart"})

    }
  };
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    alt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};