const path = require("path");

const mainController = {
    main: (req, res) => {
        res.render(path.resolve(`${__dirname}/../views/index`));
      },
    us: (req, res) => {
        res.render(path.resolve(`${__dirname}/../views/about-us`));
      }
}

module.exports = mainController;