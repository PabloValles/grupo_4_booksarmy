const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const usersController = require("../controllers/usersController");
//const uploadFile = require("../middlewares/multerMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./public/img/users"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

// Modificar para vista solo de usuarios
router.get("/", usersController.index);
router.get("/create", usersController.create);
router.post("/create", uploadFile.single("imagen"), usersController.store);

module.exports = router;
