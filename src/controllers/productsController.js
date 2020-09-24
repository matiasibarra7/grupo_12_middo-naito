const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const path = require("path");
const fs = require("fs");
const db = require("../../database/models");


const productsController = {
  main: (req, res) => {
    db.product.findAndCountAll({
      limit: 12,
      offset: req.query.page? req.query.page * 12 : 0
    })
      .then(productsData => {
        let totalPages = Math.ceil(productsData.count / 12)
        let currentPage
        req.query.page? currentPage = parseInt(req.query.page) : currentPage = 0

        //res.send(productsData)
        res.render("./products/products", { productsData: productsData.rows, toThousand, totalPages, currentPage });
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
    db.cart.findAll({where: {"user_id" : res.locals.user.id}},{include: [/*'category','sizes',*/ 'users', 'product']})
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
        categoryId: parseInt(req.body.category),
        price: parseFloat(req.body.price),
        image: null,
        alt: req.body.name  
      }
      if (req.file) {
        if (foundProduct.image) {
          fs.unlinkSync(`${__dirname}/../../public/images/products/${foundProduct.image}`);
        }
        updatedProduct.image = `imagen - ${path.basename(req.file.originalname)}`;
      } else {
        updatedProduct.image = foundProduct.image;
      }
      db.product.update(
        updatedProduct,
        {where: {id: req.params.id}}
      )
      .then(() => {
        db.products_sizes.upsert(
          {productId: req.params.id, sizeId: req.body.size, stock: req.body.stock}, 
          {where: {productId: parseInt(req.params.id), sizeId: parseInt(req.body.size)}}
        )
        .then(() => {
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
      categoryId: req.body.category
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
        console.log(result)
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
