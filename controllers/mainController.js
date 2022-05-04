const path = require("path");
const productModel = require("../models/productModel");
let libros = productModel.getData();

let mainController = {
  index: function (req, res, next) {
    res.render("index", { libros });
  },
  login: function (req, res, next) {
    res.render("login");
  },
  register: function (req, res, next) {
    res.render("register");
  },
  about: function (req, res, next) {
    res.render("about");
  },
};

module.exports = mainController;
