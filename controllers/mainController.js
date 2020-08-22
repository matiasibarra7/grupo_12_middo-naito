const fs= require("fs");
const productsModel = require("../model/productsModel");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const mainController = {
    main: (req, res) => {
        res.render('./index/index', { productsData: productsModel.readFile(), toThousand });
      },
    us: (req, res) => {
        res.render('./index/about-us');
      },
    carousel: (req, res) => {
      res.render('./index/carousel')
    }
}

module.exports = mainController;