const path = require("path");

const productsController = {
    main: (req, res) => {
        res.render(path.resolve(`${__dirname}/../views/products/products`));
      },
    details: (req, res) => {
        res.render(path.resolve(`${__dirname}/../views/products/productDetail`));
      }
}

module.exports = productsController;
