const path = require("path");
const productModel = require("../models/productModel");
let libros = productModel.get();

let productsController = {
  productList: function (req, res) {
    res.render("products/products", { libros });
  },
  cart: function (req, res) {
    res.render("products/productCart");
  },
  detailsProduct: function (req, res) {
    let libroObjeto = productModel.getById(req.params.id);

    res.render("products/productDetail", { libro: libroObjeto });
  },
  createProduct: function (req, res) {
    res.render("products/createProduct", { libros });
  },
  editProduct: function (req, res) {
    let libroObjeto = productModel.getById(req.params.id);
    res.render("products/editProduct", { libro: libroObjeto });
  },
};

module.exports = productsController;
