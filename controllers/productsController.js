const path = require("path");

let productsController = {
  cart: function (req, res) {
    res.render("products/productCart");
    // res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
  },
  detailsProduct: function (req, res) {
    let id = req.params.id;
    res.render("products/productDetail", { id: id });
  },
  addProduct: function (req, res) {
    res.render("products/addProduct");
  },
};

module.exports = productsController;
