const usersModel = require("../model/usersModel");
const tokensModel = require("../model/tokensModel");

module.exports = (req, res, next) => {
    // Si hay un usuario en sesión
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;
    // O si tiene la cookie de recordar
    } else if (req.cookies.userToken) {

        let token = tokensModel.getOne(req.cookies.userToken)
        let userFull = usersModel.getOneByEmail(token.user)
        console.log("yse asdlhjas jlkd",userFull)

        delete userFull.password
        req.session.user = userFull;
        res.locals.user = userFull;

    } else {
        res.clearCookie('userToken');
    };
    next();
};