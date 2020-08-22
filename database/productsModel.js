const fs = require("fs");
const path = require("path");

const productsModel = {
readFile: function(){
    let productsJson = fs.readFileSync(__dirname + "/../data/products.json");
    return JSON.parse(productsJson)},
writeFile: function(el){
    fs.writeFileSync(__dirname + "/../data/products.json", JSON.stringify(el, null, " "));
},
update: function(req){
    let productList = this.readFile();
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
    if (req.file) updatedProduct.image = `imagen - ${path.basename(req.file.originalname)}`;
    this.writeFile(modifyProducts);
},
store: function(req) {
    let productsData = this.readFile();
    let id = productsData.pop().id;
    let newProduct = req.body;
    newProduct.id = ++id;
    newProduct.alt = req.body.name;
    newProduct.image = "imagen - " + path.basename(req.file.originalname);

    let newProductList = this.readFile();
    newProductList.push(newProduct);

    this.writeFile(newProductList); },
delete: function(req){
    let productList = this.readFile();
    let indexProduct = req.params.id
    let deletedProduct= productList.filter(product => {
      if(product.id != indexProduct){
        return product
      }
    })
    this.writeFile(deletedProduct);
}



}

module.exports = productsModel;