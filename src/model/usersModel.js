const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");

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

   update: function (req) {
    let userData = req.body;
    userData.id= req.session.user.id;
    if (req.file) {
      userData.image = "imagen - perfil " + path.basename(req.file.originalname)
    } else if (req.session.user.image){
      userData.image = req.session.user.image;
    } else {
      userDate.image = null;
    }  
    
    let usersList = this.getAll();
    let foundUser = this.getOne(userData.id);
    userData.password = foundUser.password;
    
    let modifyUsers = usersList.map((user) => {
      if (user.id == userData.id) {
        return userData;
      } else {
        return user;
      }
    });
    if (req.file) {
      if (foundUser.image) {
        fs.unlinkSync(`${__dirname}/../../public/images/users/${foundUser.image}`);
      }
      userData.image = "imagen - perfil " + path.basename(req.file.originalname);
    }
    this.writeFile(modifyUsers);
    req.session.user = userData;
   
  },

  store: function (req) {
    let newUser = req.body;
    newUser.id = this.lastID() + 1;
    newUser.alt = req.body.firstName;
    if(req.file){
      newUser.image = "imagen - perfil " + path.basename(req.file.originalname)
    } else{
      newUser.image = null;
    };
    newUser.admin = false;
    if(newUser.password !== newUser.confirmPassword){
      return false
    }
    newUser.password = bcryptjs.hashSync(newUser.password, 10);
    delete newUser.confirmPassword;
    let newUserList = this.getAll();
    newUserList.push(newUser);
    this.writeFile(newUserList);
  },

  delete: function (req) {
    let usersList = this.getAll();
    let indexUsers = req.params.id;
    let deletedUsers = usersList.filter((users) => {
      if (users.id != indexUsers) {
        return users;
      }
    });

    let usersToDelete = this.getOne(indexUsers);
    if (usersToDelete.image) {
      fs.unlinkSync(`${__dirname}/../../public/images/users/${usersToDelete.image}`);
    }

    this.writeFile(deletedUsers);
  },

  lastID: function () {
    let usersData = this.getAll();
    return usersData.pop().id;
  },
};

module.exports = usersModel;
