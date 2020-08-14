const fs= require("fs");
const productsJson = fs.readFileSync(__dirname + "/../data/products.json");
const productsData= JSON.parse(productsJson);

const mainController = {
    main: (req, res) => {
        res.render('./index/index', { productsData });
      },
    us: (req, res) => {
        res.render('./index/about-us');
      }
}

module.exports = mainController;