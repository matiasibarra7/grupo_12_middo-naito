const path = require("path");

const usersController = {
    cart: (req, res) => {
        res.render(path.resolve(`${__dirname}/../views/users/productCart`));
    },
    register:(req, res) => {
        res.render(path.resolve(`${__dirname}/../views/users/register`));
    },
    login: (req, res) => {
        res.render(path.resolve(`${__dirname}/../views/users/login`));
    }
}

module.exports = usersController;