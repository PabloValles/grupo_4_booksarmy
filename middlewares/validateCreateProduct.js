// Validar el registro de usuarios desde la pagina register
const { body } = require("express-validator");

const validateCreateProduct = [
  body("name")
    .notEmpty()
    .withMessage("Debes ingresar el nombre del producto")
    .bail()
    .isLength({ min: 5 })
    .withMessage("EL nombre debe tener al menos 5 carácteres"),
  body("description")
    .isLength({ min: 20 })
    .withMessage("La descripcion debe tener al menos 20 carácteres"),
  body("gender").notEmpty().withMessage("El género no puede estar vacio"),
  body("format").notEmpty().withMessage("El formato no puede estar vacio"),
  body("autor").notEmpty().withMessage("Debes seleccionar un autor"),
];

module.exports = validateCreateProduct;
