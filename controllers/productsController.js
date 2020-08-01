const productsController = {
    main: (req, res) => {
        res.render('./products/products');
    },
    details: (req, res) => {
        res.render('./products/productDetail');
    },
    cart: (req, res) => {
        res.render(`./products/productCart`);
    },
}

module.exports = productsController;
