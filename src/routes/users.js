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
router.get("/register", usersController.register);
router.get("/login", usersController.login);

router.post("/register", upload.single("image"), usersController.store);



module.exports = router;
