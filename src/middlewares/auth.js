const usersModel = require("../model/usersModel");
const tokensModel = require("../model/tokensModel");
const moment = require("moment");

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

    let token = tokensModel.getOne(req.cookies.userToken)

    if (token) {

      let userFull = usersModel.getOneByEmail(token.user)
      
      delete userFull.password
      console.log("Cookie detectada, usuario completo: ", userFull)
  
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
      req.locals.user = userFull;

    } else {
      res.clearCookie('userToken');
    };

  };
  next();
};