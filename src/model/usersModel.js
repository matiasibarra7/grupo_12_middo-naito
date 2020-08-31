const fs = require("fs");
const path = require("path");

const usersModel = {
  getAll: function () {
    let usersJson = fs.readFileSync(__dirname + "/../data/users.json");
    return JSON.parse(usersJson);
  },

  writeFile: function (el) {
    fs.writeFileSync(__dirname + "/../data/users.json", JSON.stringify(el, null, " "));
  },

  getOne: function (id) {
    let usersList = this.getAll();
    let indexUser = usersList.findIndex((user) => user.id == id);
    return usersList[indexUser];
  },

  //  update: function (req) {
  //   let productList = this.getAll();
  //   let foundProduct = this.getOne(req.params.id);
  //   let updatedProduct = req.body;
  //   updatedProduct.id = foundProduct.id;
  //   updatedProduct.image = foundProduct.image;
  //   updatedProduct.alt = foundProduct.name;
  //   updatedProduct.price = parseFloat(updatedProduct.price);
  //   updatedProduct.stock = parseFloat(updatedProduct.stock);

  //   let modifyProducts = productList.map((product) => {
  //     if (product.id == updatedProduct.id) {
  //       return updatedProduct;
  //     } else {
  //       return product;
  //     }
  //   });
  //   if (req.file) {
  //     if (foundProduct.image) {
  //       fs.unlinkSync(`${__dirname}/../../public/images/products/${foundProduct.image}`);
  //     }
  //     updatedProduct.image = `imagen - ${path.basename(req.file.originalname)}`;
  //   }
  //   this.writeFile(modifyProducts);
  // },

  store: function (req) {
    let newUser = req.body;
    newUser.id = this.lastID() + 1;
    newUser.alt = req.body.name;
    newUser.image = "imagen - Perfil" + path.basename(req.file.originalname);

    let newUserList = this.getAll();
    newUserList.push(newUser);

    this.writeFile(newUserList);
  },

  // delete: function (req) {
  //   let productList = this.getAll();
  //   let indexProduct = req.params.id;
  //   let deletedProduct = productList.filter((product) => {
  //     if (product.id != indexProduct) {
  //       return product;
  //     }
  //   });

  //   let productToDelete = this.getOne(indexProduct);
  //   if (productToDelete.image) {
  //     fs.unlinkSync(`${__dirname}/../../public/images/products/${productToDelete.image}`);
  //   }

  //   this.writeFile(deletedProduct);
  // },

  lastID: function () {
    let usersData = this.getAll();
    return usersData.pop().id;
  },
};

module.exports = usersModel;
