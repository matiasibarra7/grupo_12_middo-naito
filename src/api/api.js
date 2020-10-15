const express = require("express");
const router = express.Router();
const apiController = require("./apiController");
const path = require("path");


router.get("/", (req, res) => { res.send("Esta es la api, mi gente") }); 

router.get("/products", apiController.products); 
router.get("/users", apiController.users); 


module.exports = router;
