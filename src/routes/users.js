const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const path = require("path");

const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../../public/images/users`);
  },
  filename: function (req, file, cb) {
    cb(null, "imagen - perfil " + path.basename(file.originalname));
  },
});

upload = multer({ storage });

router.get("/usersList", usersController.usersList)
// router.get("/profile", usersController.profile)


router.get("/profile/:n", usersController.profile)  /* ESTO ES SOLO DE PRUEBA, DESPUES BORRAR Y ACCEDER POR POST */
router.get("/profile/edit/:n", usersController.profileEdit)  /* ESTO ES SOLO DE PRUEBA, DESPUES BORRAR Y ACCEDER POR POST */
router.put("/profile/edit/:id", upload.single("image"), usersController.uploadProfile)  /* ESTO ES SOLO DE PRUEBA, DESPUES BORRAR Y ACCEDER POR POST */
router.get("/register", usersController.register);
router.get("/login", usersController.login);

router.post("/register", upload.single("image"), usersController.store);



module.exports = router;
