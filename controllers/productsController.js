const productsData = require("../JSON/productsObject");

const productsController = {
    main: (req, res) => {
        res.render('./products/products', {productsData});
    },
    details: (req, res) => {
        res.render('./products/productDetail');
    },
    cart: (req, res) => {
        res.render(`./products/productCart`);
    },
    add: (req, res) => {
        res.render(`./products/productAdd`);
    },
    edit: (req, res) => {
        res.render(`./products/productEdit`);
    }
}

module.exports = productsController;
