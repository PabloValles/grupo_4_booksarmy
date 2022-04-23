const path = require("path");
const productModel = require("../models/productModel");

let libros = productModel.get();
const librosArray = "";

let productsController = {
  get: function () {
    librosArray = productModel.get();
    return librosArray;
  },
  all: function (req, res) {
    let librosThis = this.get;
    res.render("products/products", { librosThis });
  },
  cart: function (req, res) {
    res.render("products/productCart");
  },
  detailsProduct: function (req, res) {
    let libroObjeto = productModel.getById(req.params.id);
    res.render("products/productDetail", { libro: libroObjeto });
  },

  // ADMIN methods
  productList: function (req, res) {
    res.render("admin/products", { libros });
  },
  createProduct: function (req, res) {
    res.render("admin/create", { libros });
  },
  editProduct: function (req, res) {
    let libroObjeto = productModel.getById(req.params.id);
    res.render("admin/edit", { libro: libroObjeto });
  },
};

module.exports = productsController;
