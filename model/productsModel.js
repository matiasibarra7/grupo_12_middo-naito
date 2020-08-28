const fs = require("fs");
const path = require("path");

const productsModel = {

  getAll: function() {
    let productsJson = fs.readFileSync(__dirname + "/../data/products.json");
    return JSON.parse(productsJson)},

  writeFile: function(el) {
    fs.writeFileSync(__dirname + "/../data/products.json", JSON.stringify(el, null, " "));
  },

  getOne: function (id) {
    let productList = this.getAll();
    let indexProduct = productList.findIndex(product => product.id == id)
    return productList[indexProduct]
  },

  update: function(req) {
    let productList = this.getAll();
    let foundProduct = this.getOne(req.params.id)
    let updatedProduct = req.body;
    updatedProduct.id = foundProduct.id;
    updatedProduct.image = foundProduct.image;
    updatedProduct.price = parseFloat(updatedProduct.price)
    updatedProduct.stock = parseFloat(updatedProduct.stock)

    let modifyProducts = productList.map( product => {
      if (product.id == updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    })
    if (req.file) {
      if (foundProduct.image) {
        fs.unlinkSync(`${__dirname}/../public/images/products/${foundProduct.image}`)
      }
      updatedProduct.image = `imagen - ${path.basename(req.file.originalname)}`;
    } 
    this.writeFile(modifyProducts);
  },

  store: function(req) {
    let newProduct = req.body;
    newProduct.id = this.lastID() + 1;
    newProduct.alt = req.body.name;
    newProduct.image = "imagen - " + path.basename(req.file.originalname);
    newProduct.price = parseFloat(newProduct.price)
    newProduct.stock = parseFloat(newProduct.stock)

    let newProductList = this.getAll();
    newProductList.push(newProduct);

    this.writeFile(newProductList); 
  },

  delete: function(req) {
    let productList = this.getAll();
    let indexProduct = req.params.id
    let deletedProduct= productList.filter(product => {
      if (product.id != indexProduct) {
        return product
      }
    })

    let productToDelete = this.getOne(indexProduct)
    if (productToDelete.image) {
      fs.unlinkSync(`${__dirname}/../public/images/products/${productToDelete.image}`)
    }

    this.writeFile(deletedProduct);
  },

  lastID: function() {
    let productsData = this.getAll();
    return productsData.pop().id;
  }
}

module.exports = productsModel;