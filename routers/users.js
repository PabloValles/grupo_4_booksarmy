const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const uploadFile = require("../middlewares/multerMiddleware");
// Modificar para vista solo de usuarios
router.get("/", usersController.index);
router.get("/create", usersController.create);
router.post("/create", uploadFile.single("image"), usersController.store);

// Perfil & Update user
router.get("/profile", usersController.profile);
router.get("/edit/:id", usersController.edit);

// Edit & delete user
router.put("/update/:id", uploadFile.single("image"), usersController.update);
router.delete("/delete/:id", usersController.delete);

module.exports = router;
