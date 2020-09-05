const usersModel = require("../model/usersModel");
const path = require("path");
const bcryptjs = require("bcryptjs");

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
    res.render("./users/profile");
  },
  profileEdit: (req, res) => {
    let usersData = usersModel.getAll();
    res.render("./users/profileEdit");
  },
  uploadProfile: (req, res) => {
    usersModel.update(req);
    res.redirect("/users/profile");
  },
  delete: (req, res) => {
    usersModel.delete(req);
    res.redirect("/users/usersList");
  },
  authenticate: (req,res) => {
    let usersData = usersModel.getAll();
    let found
    usersData.forEach(user =>{
      
      if(user.email === req.body.email){
        if(bcryptjs.compareSync(req.body.password, user.password)){
          req.session.user = user;
          found = true;
        }
      }
    });
    if(found){
      if (req.session.user.admin){
        res.redirect("/users/panelAdmin");
      } else  {
        res.redirect("/users/profile");
      }  
    } else  {
      res.redirect('/users/login')
    } 
  },
  logout: (req, res) => {      
    req.session.destroy();
    return res.redirect('/');},
  panelAdmin: (req, res) => {
    res.render('./users/panelAdmin');
  }  

};

module.exports = usersController;
