const { check } = require('express-validator')
const path = require('path')

module.exports = {
  validateProduct: [
    check('name')
      .notEmpty().withMessage('Debes completar el campo de nombre').bail()
      .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'), 

    check('description')
      .notEmpty().withMessage('Debes completar el campo de descripción').bail()
      .isLength({ min: 20 }).withMessage('La descripción del producto debe tener al menos 20 caracteres'),

    check('category')
      .notEmpty().withMessage('Debes seleccionar una categoria'),

    check('price')
      .notEmpty().withMessage('Debes ingresar un valor mayor a 0 para el precio').bail().isInt({ gt: 0 }),

    //Validación de los stocks
    check('stockS')
      .notEmpty().withMessage('Debes ingresar algún valor para el stock S, 0 si no hay stock').isInt(),
    check('stockM')
      .notEmpty().withMessage('Debes ingresar algún valor para el stock M, 0 si no hay stock').isInt(),
    check('stockL')
      .notEmpty().withMessage('Debes ingresar algún valor para el stock L, 0 si no hay stock').isInt(),
    check('stockXL')
      .notEmpty().withMessage('Debes ingresar algún valor para el stock XL, 0 si no hay stock').isInt(),
    check('stockXXL')
      .notEmpty().withMessage('Debes ingresar algún valor para el stock XXL, 0 si no hay stock').isInt(),

    // Validación de la imagen
    // Créditos Grupo 1: 6pimientas
    check("image")
      .custom((value, { req }) => req.file)
      .withMessage("Debes ingresar una imagen para tu producto").bail()
      .custom((value, { req }) => {
        const acceptedExtensions = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
      })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      )

  ]
}