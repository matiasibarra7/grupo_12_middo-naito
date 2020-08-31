const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
  main: (req, res) => {
    let productsData = productsModel.getAll();
    res.render("./products/products", { productsData, toThousand });
  },
  details: (req, res) => {
    let productsData = productsModel.getAll();
    res.render("./products/productDetail", { productData: productsData[req.params.id], toThousand });
  },
  cart: (req, res) => {
    let productsData = productsModel.getAll();
    res.render(`./products/productCart`, { productsData, toThousand });
  },
  add: (req, res) => {
    res.render(`./products/productAdd`);
  },
  edit: (req, res) => {
    let productsData = productsModel.getAll();
    res.render(`./products/productEdit`, { product: productsData[req.params.id] });
  },
  update: (req, res) => {
    productsModel.update(req);
    res.redirect("/products/details/" + req.params.id);
  },
  store: (req, res) => {
    productsModel.store(req);
    res.redirect("/products/details/" + productsModel.lastID());
  },
  delete: (req, res) => {
    productsModel.delete(req);
    res.redirect("/products");
  },
};

module.exports = productsController;
