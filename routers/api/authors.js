const express = require("express");
const router = express.Router();
const authorsAPIController = require("../../controllers/api/authorsAPIController");

//Rutas
// api/users

router.get("/", authorsAPIController.list);

module.exports = router;
