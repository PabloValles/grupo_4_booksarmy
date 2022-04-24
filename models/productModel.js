const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/books.json");
const libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productModel = {
  get: () => libros,
  getById: (id) => libros.find((libro) => libro.id == id),
  create: (producto) => {
    let crear = libros.push(producto);
    fs.writeFileSync(productsFilePath, JSON.stringify(libros), "utf-8");

    if (crear) {
      return "ok";
    } else {
      return "error";
    }
  },
};

module.exports = productModel;
