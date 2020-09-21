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
      .catch(error => {
        res.send(error)
      })
  },
  details: (req, res) => {
    db.product.findOne({
      where: {id: req.params.id}
    }).then(productData => {
      res.render("./products/productDetail", { productData, toThousand });
    })
    .catch(error => {
      res.send(error)
    })
    
  },
  cart: (req, res) => {
    db.product.findAll({include: ['category','sizes']})
      .then(productsData => {
        //res.render(`./products/productCart`, { productsData, toThousand });
        res.send(productsData);
      })
      .catch(error => {
        res.send(error)
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
    let newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: parseFloat(req.body.price),
      image: "imagen - " + path.basename(req.file.originalname),
      alt: req.body.name,
      category_id: req.body.category
    }
    db.product.create(newProduct)
    .then(product => {
      let newRelation = {
        sizeId: parseInt(req.body.size),
        stock: parseInt(req.body.stock),
        productId: product.id
      }
      db.products_sizes.create(newRelation)
      .then(result => {
        res.redirect("/products/details/" + product.id);  
      })
      .catch(error => {
        res.send(error)
      });
    })
    .catch(error => {
      res.send(error)
    });
    
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
