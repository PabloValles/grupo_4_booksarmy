const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

// Modificar para vista solo de usuarios
router.get("/", productsController.all);
router.get("/detail/:id", productsController.detailsProduct);
router.get("/cart", productsController.cart);

// Solo los administradores pueden ingresar a estas rutas
router.get("/admin/create", productsController.createProduct);
router.get("/admin/edit/:id", productsController.editProduct);
router.get("/admin/", productsController.productList);

module.exports = router;
