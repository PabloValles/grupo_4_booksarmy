const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/detalle/:id", productsController.detailsProduct);
router.get("/cart", productsController.cart);

module.exports = router;
