const fs= require("fs");
const productsJson = fs.readFileSync(__dirname + "/../data/products.json");
const productsData= JSON.parse(productsJson);

const productsController = {
    main: (req, res) => {
        res.render('./products/products', {productsData});
    },
    details: (req, res) => {
        res.render('./products/productDetail');
    },
    cart: (req, res) => {
        res.render(`./products/productCart`, {productsData});
    },
    add: (req, res) => {
        res.render(`./products/productAdd`);
    },
    edit: (req, res) => {
        res.render(`./products/productEdit`);
    }
}

module.exports = productsController;
