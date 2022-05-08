const path = require("path");
const productModel = require("../models/productModel");
let libros = productModel.getData();

let mainController = {
  index: function (req, res) {
    res.render("index", { libros });
  },
  login: function (req, res) {
    res.render("login");
  },
  register: function (req, res) {
    res.render("register");
  },
  about: function (req, res) {
    res.render("about");
  },
  admin: function (req, res) {
    res.render("admin");
  },
};

module.exports = mainController;
