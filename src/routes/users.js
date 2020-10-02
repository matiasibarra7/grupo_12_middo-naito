const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const path = require("path");
const validate = require("../validators/users");
const adminRoute = require("../middlewares/adminRoute");
const guestRoute = require("../middlewares/guestRoute");
const userRoute = require("../middlewares/userRoute");


const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../../public/images/users`);
  },
  filename: function (req, file, cb) {
    cb(null, "prof-img-" + path.basename(file.originalname));
  },
});

upload = multer({ storage });

// guestRoutes ↓
router.get("/register", guestRoute, usersController.register); // Formulario de regitro

router.post("/register", upload.single("image"), validate.register, usersController.store); // Acción de registrarse (a donde se envía el formulario)

router.get("/login", guestRoute, usersController.login); // Formulario de login

router.post("/login",/*validate.login*/ usersController.authenticate); // Autenticación de existencia y tipo de usuario

// userRoutes ↓
router.get("/profile/", userRoute, usersController.profile)  // Vista de perfil

router.get("/profile/edit", userRoute, usersController.profileEdit)  // Formulario de edición de perfil

router.put("/profile/edit", upload.single("image"), validate.edit, usersController.updateProfile) // Acción de edición (a donde se envía el formulario)

router.get("/logout", userRoute, usersController.logout); // Deslogueo

router.get("/changePass", userRoute, usersController.changePass); // Formulario de cambio de contraseña del usuario

router.put("/changePass", userRoute, usersController.editPass); // Acción de cambio de contraseña

// adminRoutes ↓
router.get("/panelAdmin", userRoute, adminRoute, usersController.panelAdmin); // Ver panel de administrador

router.get("/usersList", userRoute, adminRoute, usersController.usersList) // Listado de usuarios registrados

router.delete("/edit/:id", userRoute, adminRoute , usersController.delete); // 7 -- Acción de borrar un usuario

router.put("/editUser", userRoute, adminRoute , usersController.toggleAdm); // Dar permiso a un usuario









module.exports = router;
