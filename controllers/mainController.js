const mainController = {
    main: (req, res) => {
        res.render('./index/index');
      },
    us: (req, res) => {
        res.render('./index/about-us');
      }
}

module.exports = mainController;