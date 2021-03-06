const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const validateCreateProduct = require("../middlewares/validateCreateProduct");

// storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/img/uploads"));
  },
  filename: function (req, file, cb) {
    let archivo = `${Date.now()}-img${path.extname(file.originalname)}`;
    cb(null, archivo);
  },
});

//upload
const upload = multer({ storage });

const productsController = require("../controllers/productsController");

// Modificar para vista solo de usuarios
router.get("/", productsController.all);
router.get("/cart", productsController.cart);
router.get("/search", productsController.find);
router.get("/admin/", productsController.productList);
router.get("/admin/create", productsController.createProduct);
router.post(
  "/admin/create",
  upload.single("image"),
  validateCreateProduct,
  productsController.store
);

router.get("/detail/:id", productsController.detailsProduct);
router.get("/admin/edit/:id", productsController.editProduct);
router.put(
  "/admin/edit/:id",
  upload.single("imagen"),
  productsController.update
);
router.delete("/admin/delete/:id", productsController.delete);

module.exports = router;
