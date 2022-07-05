const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const uploadFile = require("../middlewares/multerMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const validateUserRegister = require("../middlewares/validateUserRegister");
const validateLogin = require("../middlewares/validateLogin");
const validateUserUpdate = require("../middlewares/validateUserUpdate");

// Modificar para vista solo de usuarios
router.get("/", usersController.index);
router.get("/create", usersController.create);
router.post("/register", validateUserRegister, usersController.register);
router.post("/login", validateLogin, usersController.loginProcess);
router.post(
  "/create",
  uploadFile.single("image"),
  validateUserRegister,
  usersController.store
);

// Logout
router.get("/logout/", usersController.logout);

// Perfil & Update user
router.get("/profile", authMiddleware, usersController.profile);
router.get("/edit/:id", usersController.edit);

// Edit & delete user
router.put(
  "/update/:id",
  uploadFile.single("image"),
  //validateUserUpdate,
  usersController.update
);
router.delete("/delete/:id", usersController.delete);

module.exports = router;
