const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/productDetail/:id", productsController.detailsProduct);
router.get("/cart", productsController.cart);
router.get("/addProduct", productsController.addProduct);
router.get("/editProduct", productsController.editProduct);

module.exports = router;
