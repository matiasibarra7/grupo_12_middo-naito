const express = require("express");
const router = express.Router();
const apiController = require("./apiController");


router.get("/", (req, res) => { res.send("Esta es la api") }); 

router.get("/products", apiController.products); 
router.get("/products/:id", apiController.productsDetails); 
router.get("/users", apiController.users); 
router.get("/users/:id", apiController.userDetails);


module.exports = router;
