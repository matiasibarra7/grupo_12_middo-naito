const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
  main: (req, res) => {
    let productsData = productsModel.getAll();
    res.render("./products/products", { productsData, toThousand });
  },
  details: (req, res) => {
    let productData = productsModel.getOne(req.params.id);
    res.render("./products/productDetail", { productData, toThousand }); 
  },
  cart: (req, res) => {
    let productsData = productsModel.getAll();
    res.render(`./products/productCart`, { productsData, toThousand });
  },
  add: (req, res) => {
    res.render(`./products/productAdd`);
  },
  edit: (req, res) => {
    let productData = productsModel.getOne(req.params.id);
    res.render(`./products/productEdit`, { product: productData });
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
  listAdmin: (req, res) => {
    let productsData = productsModel.getAll();
    res.render(`./products/productListAdmin`, { productsData, toThousand })
  }
};

module.exports = productsController;
