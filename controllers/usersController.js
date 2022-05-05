const User = require("../models/User");

const userController = {
  all: function (req, res) {
    return users;
  },
  index: function (req, res) {
    const usuarios = User.findAll();
    console.log(usuarios);

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
  create: function (req, res) {},
  update: function (req, res) {},
  delete: function (req, res) {},

  // Funciones de login
  login: function (req, res) {},
  logout: function (req, res) {},
};

module.exports = userController;
