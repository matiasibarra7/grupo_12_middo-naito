

module.exports = (req, res, next) => {
  //console.log("Session IN: ", req.session.history);

  req.session.history?  req.session.history.push(req.originalUrl) : req.session.history = [req.originalUrl]

  //console.log("Session OUT: ", req.session.history);
  
  next()
}
