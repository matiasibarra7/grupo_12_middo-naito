const path = require("path");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto")
const moment = require("moment");
const fs = require("fs");
const db = require("../../database/models");

const { validationResult } = require('express-validator');

const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  store: (req, res) => {
    let { errors } = validationResult(req)
    // res.send(errors);

    if (errors.length > 1) {
      res.send(errors); 
    } else if (errors.length == 1 && errors[0].msg != "Cannot read property 'originalname' of undefined") {
      res.send(errors)
    } else {
      
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
      .then((userCreated)=>{
        delete newUser.password
        newUser.id = userCreated.id
  
        req.session.user = newUser;
  
        res.redirect("/users/profile");
      })
      .catch(error => {
        res.send(error)
      })
    }

  },
  usersList: (req, res) => {
    db.user.findAll()
      .then(usersData => {
        res.render("./users/usersList", { usersData });
      })
      .catch(error => {
        res.send(error)
      })
  },
  profile: (req, res) => {
    res.render("./users/profile");
  },
  profileEdit: (req, res) => {
    res.render("./users/profileEdit");
  },
  updateProfile: (req, res) => {
    let { errors } = validationResult(req)
    
    if (errors.length) {
      res.send(errors);
    } else {
      let updatedUser = req.body;
      updatedUser.id = req.session.user.id;
  
      db.user.findOne({
        where: {id: res.locals.user.id}
      })
      .then(user => {
  
        if (user.admin) {
          updatedUser.admin = user.admin;
        } else {
          updatedUser.admin = false
        }
        if (user.registerDate) {
          updatedUser.registerDate = user.registerDate;
        }
  
        if (req.file) {
          if (user.image) {
            fs.unlinkSync(`${__dirname}/../../public/images/users/${user.image}`);
          }
          updatedUser.image = "prof-img-" + path.basename(req.file.originalname)
        } else if (req.session.user.image) {
          updatedUser.image = req.session.user.image;
        } else {
          updatedUser.image = null;
        }
  
        db.user.update(updatedUser,
          {where: {id: res.locals.user.id}})
  
        delete updatedUser.password
        req.session.user = updatedUser
        
        res.redirect("/users/profile");
      })
      .catch(error => {
        res.send(error)
      })
  
    }


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
      .catch(error => {
        res.send(error)
      })

    })
    .catch(error => {
      res.send(error)
    })
  },
  authenticate: (req,res) => {
    db.user.findOne({
      where: {email: req.body.email}
    })
    .then(user => { 
      if (user) {
        if(bcryptjs.compareSync(req.body.password, user.password)) {
          delete user.password
          req.session.user = user;
        } else {
          res.redirect("/users/login")
        }
  
        if (req.session.user.admin) {
          res.redirect("/users/panelAdmin");
        } else  {
          if(req.body.remember) {
            const token = crypto.randomBytes(64).toString('base64');
            // Seteamos una cookie en el navegador   msec   seg  min  hs  dias  meses
            res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 24 * 30 * 3} )
            
            db.token.create({name: token, userId: user.id})
            .catch(error => {
              res.send(error)
            })
          }

          // Este fragmento revisa las rutas visitadas y redirecciona según a donde quiso entrar el anónimo sin loguearse antes
          let urls = req.session.history.filter(url => url != '/users/login' && url != '/products/addToCart')

          let theUrl = urls.pop()

          if (theUrl) {
            res.redirect(theUrl);
          } else {
            res.redirect("/users/profile");
          }
        }
      } else {
        res.redirect("/users/login")
      }
    })
    .catch(error => {
      res.send(error)
    })
  },
  logout: (req, res) => { 
    db.token.destroy({where: {userId : req.session.user.id}})
    .then(()=>{
      req.session.destroy();
      res.clearCookie("userToken");
      res.redirect('/');
    })
    .catch(error => {
      res.send(error)
    })
  }, 
  panelAdmin: (req, res) => {
    res.render('./users/panelAdmin');
  },
  changePass: (req, res) => {
    res.render('./users/changePass');
  },
  toggleAdm: (req, res) => {
    db.user.findOne({
      where: {id: req.body.id}
    })
    .then(user => {
      let newValue = !user.admin
      db.user.update(
        {admin : newValue},
        {where: {id: req.body.id}})
        .then(() => {
          res.redirect("/users/usersList")
        })
    })
    .catch(error => {
      res.send(error)
    })
  },
  editPass: (req,res) => {

    let { errors } = validationResult(req)
    
    if (errors.length) {
      res.send(errors);
    } else {
      db.user.findOne({
        where: {email: res.locals.user.email}
      })
      .then(user => {
        let dataNewPass = req.body;
  
        
        if(bcryptjs.compareSync(dataNewPass.oldPass, user.password)) {
          if (dataNewPass.newPass !== dataNewPass.confirmNewPass) {
            res.redirect("/users/changePass");
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
          // res.send("Contraseña ingresada erronea");
          res.redirect("/users/changePass");
        }
      })
      .catch(error => {
        res.send(error)
      })
    }
  }
};

module.exports = usersController;
