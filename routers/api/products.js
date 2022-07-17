const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

//Rutas
// api/users

router.get("/", productsAPIController.list);
router.get("/:id", productsAPIController.show);

module.exports = router;
