const express = require("express");
const router = express.Router();
const usersAPIController = require("../../controllers/api/usersAPIController");

//Rutas
// api/users

router.get("/", usersAPIController.list);
router.get("/:id", usersAPIController.show);

module.exports = router;
