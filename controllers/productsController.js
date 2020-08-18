const fs = require("fs");
const productsJson = fs.readFileSync(__dirname + "/../data/products.json");
const productsData = JSON.parse(productsJson);
const path = require("path");

const productsController = {
  main: (req, res) => {
    res.render("./products/products", { productsData });
  },
  details: (req, res) => {
    let id = req.params.id;

    res.render("./products/productDetail", { productData: productsData[id] });
  },
  cart: (req, res) => {
    res.render(`./products/productCart`, { productsData });
  },
  add: (req, res) => {
    res.render(`./products/productAdd`);
  },
  edit: (req, res) => {
    res.render(`./products/productEdit`);
  },
  store: (req, res) => {
    let id = productsData.pop().id;

    let newProduct = req.body;
    newProduct.id = ++id;
    newProduct.alt = req.body.name;
    newProduct.image = "imagen - " + path.basename(req.file.originalname);

    let newProductList = JSON.parse(fs.readFileSync(__dirname + "/../data/products.json"));
    newProductList.push(newProduct);

    fs.writeFileSync(__dirname + "/../data/products.json", JSON.stringify(newProductList, null, " "));

    res.redirect("/products");
  },
};

module.exports = productsController;
