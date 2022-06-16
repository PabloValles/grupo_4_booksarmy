const fs = require("fs");
const path = require("path");
const productModel = require("../models/productModel");
const db = require("../database/models/index");

const productsFilePath = path.join(__dirname, "../data/books.json");
const libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const librosArray = "";

let productsController = {
  get: function () {
    librosArray = productModel.getData();
    return librosArray;
  },
  all: function (req, res) {
    db.Books.findAll({
      include: [{ association: "authors" }, { association: "booksFormat" }],
    }).then(function (result) {
      return res.render("products/products", { librosThis: result });
    });
  },
  cart: function (req, res) {
    res.render("products/productCart");
  },
  detailsProduct: function (req, res) {
    let autores = db.autores.findAll();
    let libros = db.Books.findAll({
      include: [{ association: "authors" }, { association: "booksFormat" }],
    });
    let libroEditar = db.Books.findByPk(req.params.id, {
      include: [{ association: "authors" }, { association: "booksFormat" }],
    });

    Promise.all([libroEditar, autores, libros])
      .then(([book, autores, libros]) => {
        //return res.send(book.booksFormat);
        return res.render("products/productDetail", {
          libro: book,
          autores: autores,
          listaLibros: libros,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },

  // ADMIN methods
  productList: function (req, res) {
    db.Books.findAll({
      include: [{ association: "authors" }, { association: "booksFormat" }],
    }).then(function (result) {
      return res.render("admin/products", { libros: result });
    });
  },
  createProduct: function (req, res) {
    res.render("admin/create", { libros });
  },
  editProduct: function (req, res) {
    // obtener todos los autores
    let autores = db.autores.findAll();
    let formatos = db.formatos.findAll();
    let libroEditar = db.Books.findByPk(req.params.id, {
      include: [{ association: "authors" }, { association: "booksFormat" }],
    });

    Promise.all([libroEditar, autores, formatos])
      .then(([book, autores, formatos]) => {
        return res.render("admin/edit", {
          libro: book,
          autores: autores,
          formatos: formatos,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  store: function (req, res) {
    // recibir datos del formulario
    let image = "default-img.png";

    // Si se envio una imagen, reemplaza la variable image
    if (req.file) {
      image = req.file.filename;
    }

    // Obtener el id a cargar
    let idProximo = libros[libros.length - 1].id + 1;

    // Armamos el objeto producto
    let libro = {
      id: idProximo,
      ...req.body,
      image: image,
    };
    //Redireccionar a productos
    libros.push(libro);
    fs.writeFileSync(productsFilePath, JSON.stringify(libros), "utf-8");

    res.redirect("../");
  },
  update: function (req, res) {
    const editBook = libros.find((book) => book.id == req.params.id);
    let imagen = editBook.image;

    if (req.file) {
      imagen = req.file.filename;
    }

    //armar objeto libro
    let nuevoLibro = {
      id: parseInt(req.params.id),
      name: req.body.name,
      autor: req.body.autor,
      description: req.body.description,
      gender: req.body.gender,
      image: imagen,
      editorial: req.body.editorial,
      isbn: req.body.isbn,
      price: req.body.precio,
      discount: req.body.discount,
      stock: req.body.stock,
      material: req.body.material,
      format: req.body.format,
    };

    // Creamos array de libros nuevos
    const newLibros = libros.map((book) => {
      if (book.id == req.params.id) {
        book = nuevoLibro;
      }
      return book;
    });

    // Sobreescribir el objeto dentro del array libros
    fs.writeFileSync(productsFilePath, JSON.stringify(newLibros), "utf-8");

    res.redirect("/products/admin");
  },
  delete: function (req, res) {
    //const bookToDelete = libros.find((book) => book.id == req.params.id);

    const newArrBooks = libros.filter((book) => book.id != req.params.id);

    fs.writeFileSync(productsFilePath, JSON.stringify(newArrBooks), "utf-8");

    res.redirect("/products/admin");
  },
};

module.exports = productsController;
