const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const path = require("path");

const multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/images/products`);
  },
  filename: function (req, file, cb) {
    cb(null, "imagen - " + path.basename(file.originalname));
  },
});

upload = multer({ storage });

router.get("/", productsController.main); //1 -- Listado de productos

router.get("/add", productsController.add); //2 -- Formulario de creación de productos

router.post("/add", upload.single("image"), productsController.store); //4 -- Acción de creación (a donde se envía el formulario)

router.get("/cart", productsController.cart);
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", upload.single("image"), productsController.update); // 6 -- Edición de un producto

router.get("/details/:id", productsController.details); //3 -- Detalle de un producto particular

router.delete("/edit/:id" , productsController.delete); // 7 -- Eliminar un producto

module.exports = router;
