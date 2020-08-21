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
    res.render(`./products/productEdit`, { product : productsData[req.params.id] });
  },  
  update: (req, res) => {
    let productList = JSON.parse(fs.readFileSync(__dirname + "/../data/products.json"));
    let indexProduct = productList.findIndex(product => product.id == req.params.id)
    let foundProduct = productList[indexProduct];
    let updatedProduct = req.body;
    updatedProduct.id = foundProduct.id;
    updatedProduct.image = foundProduct.image;
    let modifyProducts = productList.map( product => {
      if(product.id == updatedProduct.id){
        return updatedProduct;
      }else{
        return product;
      }
    })
    fs.writeFileSync(__dirname + "/../data/products.json", JSON.stringify(modifyProducts, null, " "));
    res.redirect('/products/details/'+ req.params.id);
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
  delete: (req, res) =>{
    let productList = JSON.parse(fs.readFileSync(__dirname + "/../data/products.json"));
    let indexProduct = req.params.id
    let deletedProduct= productList.filter(product => {
      if(product.id != indexProduct){
        return product
      }
    })
    fs.writeFileSync(__dirname + "/../data/products.json", JSON.stringify(deletedProduct, null, " "));
    res.redirect('/products');

  }
};

module.exports = productsController;
