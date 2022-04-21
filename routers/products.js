const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.productList);
router.get("/detail/:id", productsController.detailsProduct);
router.get("/cart", productsController.cart);
router.get("/create", productsController.createProduct);
router.get("/editProduct/:id", productsController.editProduct);

module.exports = router;
