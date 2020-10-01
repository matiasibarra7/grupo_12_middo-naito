const { check } = require('express-validator')
const path = require('path')

module.exports = {
    validateNewProduct: [
        check('name')
        .notEmpty().withMessage('Debes completar el campo de nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'), 

        check('description')
        .notEmpty().withMessage('Debes completar el campo de descripción').bail()
        .isLength({ min: 20 }).withMessage('La descripción del producto debe tener al menos 20 caracteres'),

        check('size')
        .notEmpty().withMessage('Debes seleccionar un talle'),

        check('category')
        .notEmpty().withMessage('Debes seleccionar una categoria'),

        check('price')
        .notEmpty().withMessage('Debes ingresar un valor mayor a 0 para el precio').bail().isInt({ gt: 0 }),

        check('stock')
        .notEmpty().withMessage('Debes ingresar un valor mayor a 0 para el stock').bail().isInt({ gt: 0 }),

        //validación de la imagen
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