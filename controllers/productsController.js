const fs = require("fs");

const path = require("path");
const productsModel = require("../database/productsModel");

const productsController = {
  main: (req, res) => {
    let productsData = productsModel.readFile();
    res.render("./products/products", { productsData });
  },
  details: (req, res) => {
    let productsData = productsModel.readFile();
    let id = req.params.id;
    res.render("./products/productDetail", { productData: productsData[id] });
  },
  cart: (req, res) => {
    let productsData = productsModel.readFile();
    
    res.render(`./products/productCart`, { productsData });
  },
  add: (req, res) => {
    res.render(`./products/productAdd`);
  },
  edit: (req, res) => {
    let productsData = productsModel.readFile();
    
    res.render(`./products/productEdit`, { product : productsData[req.params.id] });
  },  
  update: (req, res) => {
    productsModel.update(req);
    res.redirect('/products/details/'+ req.params.id);
  },
  store: (req, res) => {
    productsModel.store(req);

    res.redirect("/products");
  },  
  delete: (req, res) =>{
    productsModel.delete(req);
    res.redirect('/products');

  }
};

module.exports = productsController;
