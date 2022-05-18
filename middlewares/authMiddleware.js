const authMiddleware = (req, res, next) => {
  // Verificamos si la sesión existe
  if (!req.session.userLogged) {
    return res.redirect("/login");
  }

  next();
};

module.exports = authMiddleware;
