const { body } = require("express-validator");

const formValidate = [
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar tu email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un formato de email válido"),
  body("password").notEmpty().withMessage("Debes ingresar tu password"),
];

module.exports = formValidate;
