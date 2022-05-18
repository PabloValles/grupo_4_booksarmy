const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/index", mainController.index);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/about", mainController.about);
router.get("/admin", authMiddleware, mainController.admin);

module.exports = router;
