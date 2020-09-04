//const usersModel = require("../model/usersModel");
// const usersTokensModel = jsonTable('usersTokens');
module.exports = (req, res, next) => {
    // Si hay un usuario en sesión
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;
    // O si tiene la cookie de recordar
    } 
    next();
};