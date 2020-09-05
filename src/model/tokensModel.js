const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");

const tokensModel = {
  getAll: function () {
    let tokensJson = fs.readFileSync(__dirname + "/../data/tokens.json");
    return JSON.parse(tokensJson);
  },

  writeFile: function (el) {
    fs.writeFileSync(__dirname + "/../data/tokens.json", JSON.stringify(el, null, " "));
  },

  getOne: function (id) {
    let tokensList = this.getAll();
    let indexToken = tokensList.findIndex((token) => token.id == id);
    return tokensList[indexToken];
  },

  store: function (req, token) {
    let newToken = {
      user: req.body.email,
      id: token,
    };
    let tokensList = this.getAll();
    tokensList.push(newToken)
    this.writeFile(tokensList);
  },

  delete: function (user) {
    let tokensList = this.getAll();
    let newTokensList = tokensList.filter((token) => {
      if (token.user != user) {
        return token;
      }
    });

    this.writeFile(newTokensList);
  },
};

module.exports = tokensModel;
