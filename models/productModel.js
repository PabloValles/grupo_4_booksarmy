const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/books.json");
const libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productModel = {
  get: () => libros,
  getById: (id) => libros.find((libro) => libro.id == id),
};

module.exports = productModel;
