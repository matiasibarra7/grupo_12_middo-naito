const { check } = require('express-validator');
const path = require('path')

module.exports = {
  register:[
    check('firstName')
      .notEmpty().withMessage('Debes completar el campo Nombre').bail()
      .isLength({ min: 2 }).withMessage('Debes completar el campo con al menos 2 carácteres'),

    check('lastName')
      .notEmpty().withMessage('Debes completar el campo Apellido').bail()
      .isLength({ min: 2 }).withMessage('Debes completar el campo con al menos 2 carácteres'),

    check('email')
      .notEmpty().withMessage('Debes completar el campo de email').bail()
      .isEmail().withMessage('Debes completar un email válido'),

    check('password')
      .notEmpty().withMessage('Debes completar el campo de Contraseña').bail()
      .isLength({ min: 8 }).withMessage('Debes ingresar una contraseña con al menos 8 carácteres').bail()
      .custom((value) => {
        const validationPass = /^(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        return validationPass.test(value);
      }).withMessage('La contraseña debe al menos una mayúscula, un número y un carácter especial'),

    // Validación de la imagen
    // Créditos Grupo 1: 6pimientas
    check('image')
      .custom((value, { req }) => {
        const acceptedExtensions = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
      })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      ),
  ],
  login: [
    check('email')
      .notEmpty().withMessage('Debes completar el campo de email').bail()
      .isEmail().withMessage('Debes completar un email válido'), 
    check('password')
      .notEmpty().withMessage('Debes completar el campo de password').bail()
  ],
  edit: [
    check('firstName')
      .notEmpty().withMessage('Debes completar el campo Nombre').bail()
      .isLength({ min: 2 }).withMessage('Debes completar el campo con al menos 2 carácteres'),

    check('lastName')
      .notEmpty().withMessage('Debes completar el campo Apellido').bail()
      .isLength({ min: 2 }).withMessage('Debes completar el campo con al menos 2 carácteres'),

    check('email')
      .notEmpty().withMessage('Debes completar el campo de email').bail()
      .isEmail().withMessage('Debes completar un email válido')
  ],
  changePass: [
    check('oldPass')
      .notEmpty().withMessage('Debes completar el campo').bail(),
    check('newPass')
      .notEmpty().withMessage('Debes completar el campo de Contraseña').bail()
      .isLength({ min: 8 }).withMessage('Debes ingresar una contraseña con al menos 8 carácteres').bail()
      .custom((value) => {
        const validationPass = /^(?=.*\d)(?=.*[!@#\$%\^\&*\)\(+=._-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        return validationPass.test(value);
      }).withMessage('La contraseña debe al menos una mayúscula, un número y un carácter especial').bail(),
    check('confirmNewPass')
      .notEmpty().withMessage('Debes repetir tu nueva Contraseña')
  ]
}