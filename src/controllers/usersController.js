const usersModel = require("../model/usersModel");

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
    res.send(req.body)
  }  
};

module.exports = usersController;
