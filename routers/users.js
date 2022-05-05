const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const usersController = require("../controllers/usersController");

// Modificar para vista solo de usuarios
router.get("/", usersController.index);

module.exports = router;
