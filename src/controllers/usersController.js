const usersModel = require("../model/usersModel");
const path = require("path")

const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  store: (req, res) => {
    usersModel.store(req);
    
    res.redirect("/users/usersList");
  },
  usersList: (req, res) => {
    let usersData = usersModel.getAll();
    res.render("./users/usersList", { usersData });
  },
  profile: (req, res) => {
    let usersData = usersModel.getAll();
    res.render("./users/profile", { userData: usersData[req.params.n]});
  },
  profileEdit: (req, res) => {
    let usersData = usersModel.getAll();
    res.render("./users/profileEdit", { userData: usersData[req.params.n]});
  },
  uploadProfile: (req, res) => {
    let userData = req.body;
    userData.id= req.params.id
    if (req.file) {
      userData.image = "imagen - perfil " + path.basename(req.file.originalname)
    }
    res.send(userData)
  },
  delete: (req, res) => {
    usersModel.delete(req);
    res.redirect("/users/usersList");
  }
};

module.exports = usersController;
