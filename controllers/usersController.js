const User = require("../models/User");

const userController = {
  index: function (req, res) {
    const usuarios = User.findAll();

    return res.render("users/index", { usuarios });
  },
  profile: function (req, res) {
    return res.render("users/profile");
  },
  login: function (req, res) {
    return res.render("users/login");
  },
  register: function (req, res) {
    return res.render("users/register");
  },

  // Luego realizar el crude
  create: function (req, res) {
    return res.render("users/create");
  },
  store: function (req, res) {
    let userCheck = User.findByField("email", req.body.email);

    if (userCheck) {
      let error = "Error el usuario ya existe";
      return res.send(error);
    }

    let userToCreate = {
      ...req.body,
      image: req.file.filename,
    };

    let userNew = User.create(userToCreate);

    return res.redirect("/users");
  },
  update: function (req, res) {},
  delete: function (req, res) {},

  // Funciones de login
  login: function (req, res) {},
  logout: function (req, res) {},
};

module.exports = userController;
