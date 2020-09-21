const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const path = require("path");
const fs = require("fs");
const db = require("../../database/models");


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
    //Falta ordenar la vista
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
    db.product.findOne(
      {where: {id: req.params.id}}
    )
    .then((product)=>{
      res.render(`./products/productEdit`, { product });
    })
    .catch(error => {
      res.send(error)
    })
  },
  update: (req, res) => {
    //productsModel.update(req);
    db.product.findOne({
      where: {id: req.params.id}
    })
    .then((foundProduct)=>{
      let updatedProduct = {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        alt: req.body.name,
        category_id: req.body.category
      }
      if (req.file) {
        if (foundProduct.image) {
          fs.unlinkSync(`${__dirname}/../../public/images/products/${foundProduct.image}`);
        }
        updatedProduct.image = `imagen - ${path.basename(req.file.originalname)}`;
      } else {
        updatedProduct.image = foundProduct.image;
      }
      db.product.update({
        where: {id: updatedProduct.id}
      })
      .then(()=>{
        
        db.products_sizes.upsert(
          {stock: req.body.stock}, 
          {where: {product_id: updatedProduct.id, size_id: req.body.size}}
        )
        .then(()=>{
          res.redirect("/products/details/" + req.params.id); 
        })
        .catch(error => {
          res.send(error)
        });
      })
      .catch(error => {
        res.send(error)
      });
    })
    .catch(error => {
      res.send(error)
    });   
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
    //productsModel.delete(req);
    db.products_sizes.destroy({
      where: {product_id: req.params.id}
    })
    .then(() => {
      db.product.findOne({
        where: {id: req.params.id}
      })
      .then(productToDelete => {
        if (productToDelete.image) {
          fs.unlinkSync(`${__dirname}/../../public/images/products/${productToDelete.image}`);
        }
        db.product.destroy({
          where: {id: req.params.id}
        })
        .then(()=> {
          res.redirect("/products");
        })
        .catch(error => {
          res.send(error)
        })
      })
      .catch(error => {
        res.send(error)
      })      
    })
    .catch(error => {
      res.send(error)
    })
  },
  listAdmin: (req, res) => {
    db.product.findAll({include: ['category','sizes']})
    .then(productsData => {
      res.render(`./products/productListAdmin`, { productsData, toThousand })
    }
    )
  }
};

module.exports = productsController;
