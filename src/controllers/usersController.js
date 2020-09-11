const usersModel = require("../model/usersModel");
const path = require("path");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto")
const tokensModel = require("../model/tokensModel");

const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  store: (req, res) => {
    newUser = usersModel.store(req);
    req.session.user = newUser;
    res.locals.user = newUser;
    res.redirect("/users/profile");
  },
  usersList: (req, res) => {
    let usersData = usersModel.getAll();
    res.render("./users/usersList", { usersData });
  },
  profile: (req, res) => {
    res.render("./users/profile");
  },
  profileEdit: (req, res) => {
    /* let usersData = usersModel.getAll(); */
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

            if(req.body.remember){

              const token = crypto.randomBytes(64).toString('base64');

              tokensModel.store(req, token);

              // Seteamos una cookie en el navegador   msec   seg  min  hs  dias  meses
              res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 24 * 30 * 3} )
            }

          res.redirect("/users/profile");
        }  
      } else  {
        res.redirect('/users/login')
      } 
  },
  logout: (req, res) => { 
    tokensModel.delete(req.session.user.email); 
    res.clearCookie("userToken");
    req.session.destroy();
    return res.redirect('/');},
  panelAdmin: (req, res) => {
    res.render('./users/panelAdmin');
  },
  changePass: (req, res) => {
    res.render('./users/changePass');
  },
  toggleAdm: (req, res) => {

    let usersList = usersModel.getAll()

    let modifyUsers = usersList.map((user) => {
      if (user.id == req.body.id) {
        user.admin = !user.admin
      }
      return user;
    });
    
    usersModel.writeFile(modifyUsers)

    res.redirect("/users/usersList")
  },
  editPass: (req,res) => {
    let userFull = usersModel.getOneByEmail(res.locals.user.email);
    let dataNewPass = req.body;
    
    if(bcryptjs.compareSync(dataNewPass.oldPass, userFull.password)){
      if (dataNewPass.newPass !== dataNewPass.confirmNewPass) {
        return false
      }
      let usersList = usersModel.getAll()
      let modifiedUsers = usersList.map((user) => {
        if (user.id == res.locals.user.id) {
          user.password = bcryptjs.hashSync(dataNewPass.newPass, 10);  
        }
        return user;
      });
      usersModel.writeFile(modifiedUsers);
    }else {
      res.send("Contraseña ingresada erronea");
    }
    res.redirect("/users/profile");  
  }

};

module.exports = usersController;
