const { check } = require('express-validator');
// Creamos una propiedad por cada formulario que queramos validar
module.exports = {
    login: [
        check('email')
            .notEmpty().withMessage('Debes completar el campo de email').bail()
            .isEmail().withMessage('Debes completar un email válido'), 
        check('password')
            .notEmpty().withMessage('Debes completar el campo de password').bail()
    ]
}