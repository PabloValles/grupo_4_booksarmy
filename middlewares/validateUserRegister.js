// Validar el registro de usuarios desde la pagina register
const { body } = require("express-validator");

const formValidate = [
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("first_name").notEmpty().withMessage("Por favor completa este campo"),
  body("password").notEmpty().withMessage("Por favor ingrese una contraseña"),
];

module.exports = formValidate;
