const path = require("path");

let productsController = {
  cart: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
  },
  detailsProduct: function (req, res) {
    res.sendFile(path.join(__dirname, "../views/products/productDetail.html"));
  },
};

module.exports = productsController;
