const path = require("path");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto")
const tokensModel = require("../model/tokensModel");
const moment = require("moment");
const fs = require("fs");


let db = require("../../database/models");

const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  store: (req, res) => {
    if (req.body.password !== req.body.confirmPassword) {
      return false
    }
    let newUser = req.body;
    newUser.alt = req.body.firstName;

    if (req.file) {
      newUser.image = "prof-img-" + path.basename(req.file.originalname)
    } else {
      newUser.image = null;
    };
    newUser.admin = false;
    newUser.registerDate = moment().format("DD-MM-YYYY")
    newUser.password = bcryptjs.hashSync(newUser.password, 10);
    
    delete newUser.confirmPassword;
    
    db.user.create(newUser)


    delete newUser.password
    req.session.user = newUser;

    res.redirect("/users/profile");
  },
  usersList: (req, res) => {
    db.user.findAll()
      .then(usersData => {
        res.render("./users/usersList", { usersData });
      })
  },
  profile: (req, res) => {
    res.render("./users/profile");
  },
  profileEdit: (req, res) => {
    res.render("./users/profileEdit");
  },
  uploadProfile: (req, res) => {
    let updatedUser = req.body;
    updatedUser.id = req.session.user.id;

    if (req.file) {
      updatedUser.image = "prof-img-" + path.basename(req.file.originalname)
    } else if (req.session.user.image) {
      updatedUser.image = req.session.user.image;
    } else {
      updatedUser.image = null;
    }

    db.user.findOne({
      where: {email: req.body.email}
    }).then(user => {

      if (user.admin) {
        updatedUser.admin = user.admin;
      } else {
        updatedUser.admin = false
      }
      if (user.registerDate) {
        updatedUser.registerDate = user.registerDate;
      }

      db.user.update(updatedUser,
        {where: {id: req.session.user.id}})

      delete updatedUser.password
      req.session.user = updatedUser
      
      res.redirect("/users/profile");
    })

  },
  delete: (req, res) => {

    let idUser = parseInt(req.params.id)

    db.user.findOne({
      where: {id: idUser}
    }).then(user => {
      if (user.image) {
        fs.unlinkSync(`${__dirname}/../../public/images/users/${user.image}`);
      }

      db.user.destroy({
        where: {id: idUser}
      }).then(() =>{
        res.redirect("/users/usersList");
      })

    })
    .catch(error => {return console.log(error)})




  },
  authenticate: (req,res) => {
    db.user.findOne({
      where: {email: req.body.email}
    }).then(user => { 
      if (user) {
        if(bcryptjs.compareSync(req.body.password, user.password)){
          delete user.password
          req.session.user = user;
        } else {
          res.redirect("/users/login")
        }
  
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
      } else {
        res.redirect("/users/login")
      }
    })
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
    db.user.findOne({
      where: {id: req.body.id}
    }).then(user => {
      let newValue = !user.admin
      db.user.update(
        {admin : newValue},
        {where: {id: req.body.id}})
        .then(() => {
          res.redirect("/users/usersList")
        })
    })
  },
  editPass: (req,res) => {

    db.user.findOne({
      where: {email: res.locals.user.email}
    }).then(user => {
      let dataNewPass = req.body;

      
      if(bcryptjs.compareSync(dataNewPass.oldPass, user.password)) {
        if (dataNewPass.newPass !== dataNewPass.confirmNewPass) {
          res.send("Contraseña nueva y confirmación distintas");
        } else {

          let newPassToWrite = bcryptjs.hashSync(dataNewPass.newPass, 10)

          db.user.update(
            {password : newPassToWrite},
            {where: {email: res.locals.user.email}})
              .then(() => {
                res.redirect("/users/profile");
              })
        }
      } else {
        res.send("Contraseña ingresada erronea");
      }
    })
  }
};

module.exports = usersController;
