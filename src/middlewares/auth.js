const moment = require("moment");
const db = require("../../database/models");

module.exports = (req, res, next) => {
  // Si hay un usuario en sesión
  if (req.session.user) {
    // Se lo paso a la vista
    res.locals.user = req.session.user;

    // Aca calculamos la edad en base a nacimiento
    if (req.session.user.birthday) {
      let formatBirth = moment(req.session.user.birthday);
      let age = moment().diff(formatBirth) / 31536000000;
      age = parseInt(age)
      res.locals.user.age = age;
    }

    // El texto que imprimimos por genero
    switch (req.session.user.gender) {
      case "male":
        res.locals.user.genderSpa = "Hombre"
        break;
      case "female":
        res.locals.user.genderSpa = "Mujer"
        break;
      case "unicorn":
        res.locals.user.genderSpa = "Unicornio"
        break;
      default:
        res.locals.user.genderSpa = "Sin especificar"
        break;
    }

  // O si tiene la cookie de recordar
  } else if (req.cookies.userToken) {
    db.token.findOne({where : {name : req.cookies.userToken}})
    .then((token)=>{
      if (token) {
        db.user.findOne({where : {id : token.userId}})
        .then((userFull)=>{
          
          delete userFull.password

           // Aca calculamos la edad en base a nacimiento
          if (userFull.birthday) {
            let formatBirth = moment(userFull.birthday);
            let age = moment().diff(formatBirth) / 31536000000;
            age = parseInt(age)
            userFull.age = age;
          }
      
          // El texto que imprimimos por genero
          switch (userFull.gender) {
            case "male":
              userFull.genderSpa = "Hombre"
              break;
            case "female":
              userFull.genderSpa = "Mujer"
              break;
            case "unicorn":
              userFull.genderSpa = "Unicornio"
              break;
            default:
              userFull.genderSpa = "Sin especificar"
              break;
          }
          
          req.session.user = userFull;
          res.locals.user = userFull;
        })
        .catch(error => {
          res.send(error)
        })
      } else {
        res.clearCookie('userToken');
      };
    })
    

  };

  setTimeout(()=> {
    next()
  }, 50);
  //next()
};