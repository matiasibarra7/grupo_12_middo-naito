const fs = require("fs");
const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models");


const mainController = {
  main: (req, res) => {
    db.product.findAll()
      .then(productsData => {
        res.render("./index/index", { productsData, toThousand });
      })
      .catch(error => {
        res.send(error)
      })
  },
  us: (req, res) => {
    res.render("./index/about-us");
  },
  carousel: (req, res) => {
    res.render("./index/carousel");
  },
};

module.exports = mainController;
