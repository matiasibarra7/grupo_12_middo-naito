const path = require("path");

const mainController = {
    main: (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../views/index.html`));
      },
    us: (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../views/about-us.html`));
      }
}

module.exports = mainController;