const path = require("path");

const productsController = {
    main: (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../views/products.html`));
      },
    details: (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../views/productDetail.html`));
      }
}

module.exports = productsController;
