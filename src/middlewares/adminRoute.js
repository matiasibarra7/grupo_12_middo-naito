module.exports = (req, res, next) => {
  if (req.session.user && !req.session.user.admin) {
    return res.redirect('/')
  }
  next();
};