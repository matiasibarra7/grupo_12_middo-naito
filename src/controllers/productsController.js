const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const path = require("path");
const fs = require("fs");

let db = require("../../database/models");

const productsController = {
  main: (req, res) => {
    db.product.findAll()
      .then(productsData => {
        res.render("./products/products", { productsData, toThousand });
      
      })
  },
  details: (req, res) => {
   db.product.findOne({
    where: {id: req.params.id}}
    ).then(productData => {
      res.render("./products/productDetail", { productData, toThousand });
    })
    
  },
  cart: (req, res) => {
    db.product.findAll()
      .then(productsData => {
        //res.render(`./products/productCart`, { productsData, toThousand });
        res.send(productsData);
      })
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
    //Faltan modelos de stock y de talle
    //productsModel.store(req);
    let newProduct = req.body;
    newProduct.alt = req.body.name;
    newProduct.image = "imagen - " + path.basename(req.file.originalname);
    newProduct.price = parseFloat(newProduct.price);
    newProduct.stock = parseInt(newProduct.stock);
    
    db.product.create(newProduct
    ).then(product => {
      res.redirect("/products/details/" + product.id);  
    });
    // db.product.findOne({
    //   where: {name: req.body.name}
    // })
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
