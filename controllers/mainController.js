const path = require("path");
const productModel = require("../models/productModel");
const db = require("../database/models/index");

let mainController = {
  index: function (req, res) {
    db.Books.findAll({
      include: [{ association: "authors" }, { association: "booksFormat" }],
      //limit: 6
    }).then(function (result) {
      return res.render("index", { libros: result });
    });
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
