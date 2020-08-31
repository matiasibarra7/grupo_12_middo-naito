const usersModel = require("../model/usersModel");
const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  store: (req, res) => {
    usersModel.store(req);
    res.send(req.body);
  },
};

module.exports = usersController;
