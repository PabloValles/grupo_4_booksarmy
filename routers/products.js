const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/productDetail/:id", productsController.detailsProduct);
router.get("/cart", productsController.cart);

module.exports = router;
