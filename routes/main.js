const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");


router.get("/", mainController.main);
router.get("/us", mainController.us);
router.get("/carousel", mainController.carousel)


module.exports = router;
