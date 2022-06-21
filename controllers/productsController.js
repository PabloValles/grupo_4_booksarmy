const fs = require("fs");
const path = require("path");
const productModel = require("../models/productModel");
const db = require("../database/models/index");

const productsFilePath = path.join(__dirname, "../data/books.json");
const libros = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const librosArray = "";

let productsController = {
  all: function (req, res) {
    db.Books.findAll({
      include: [{ association: "authors" }, { association: "booksFormat" }],
      order: [["name", "ASC"]],
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
      order: [["name", "ASC"]],
    }).then(function (result) {
      return res.render("admin/products", { libros: result });
    });
  },
  createProduct: function (req, res) {
    let autores = db.autores.findAll({
      order: [["last_name", "ASC"]],
    });
    let formatos = db.formatos.findAll();

    Promise.all([autores, formatos]).then(([autores, formatos]) => {
      return res.render("admin/create", { autores, formatos });
    });
  },
  editProduct: function (req, res) {
    // obtener todos los autores
    let autores = db.autores.findAll({
      order: [["last_name", "ASC"]],
    });
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

    // Armamos el objeto producto
    let {
      name,
      autor,
      description,
      gender,
      editorial,
      isbn,
      price,
      discount,
      stock,
      format,
      material,
    } = req.body;

    if (Array.isArray(gender)) {
      gender = gender.join();
      console.log(gender);
    }

    db.Books.create({
      name,
      autor_id: autor,
      description,
      gender,
      image,
      editorial,
      isbn,
      price,
      discount,
      stock,
      material,
    })
      .then((libro) => {
        let id_libro = libro.id;
        let formatos;
        if (format.length > 1) {
          formatos = [
            {
              book_id: id_libro,
              format_id: format[0],
            },
            {
              book_id: id_libro,
              format_id: format[1],
            },
          ];
        } else {
          formatos = [
            {
              book_id: id_libro,
              format_id: format,
            },
          ];
        }

        db.libroFormato.bulkCreate(formatos).then((result) => {
          console.log("!formato del libro cargado");
          return res.redirect("/products/admin/");
        });
      })
      .catch((e) => {
        console.log(e);
        console.log("Errorrrr!");
      });
  },
  update: function (req, res) {
    db.Books.findByPk(req.params.id)
      .then(function (book) {
        let imagen = book.image;

        if (req.file) {
          imagen = req.file.filename;
        }

        let gender = req.body.gender;
        if (Array.isArray(gender)) {
          gender = gender.join();
        }
        //armar objeto libro
        let nuevoLibro = {
          id: parseInt(req.params.id),
          name: req.body.name,
          autor_id: parseInt(req.body.autor),
          description: req.body.description,
          gender: gender,
          image: imagen,
          editorial: req.body.editorial,
          isbn: req.body.isbn,
          price: req.body.precio,
          discount: req.body.discount,
          stock: req.body.stock,
          material: req.body.material,
          format: req.body.format,
        };

        db.Books.update(nuevoLibro, {
          where: { id: req.params.id },
        }).then((result) => {
          console.log("FORMATO", nuevoLibro.format);

          if (nuevoLibro.format != undefined) {
            if (nuevoLibro.format.length > 1) {
              formatos = [
                {
                  book_id: nuevoLibro.id,
                  format_id: nuevoLibro.format[0],
                },
                {
                  book_id: nuevoLibro.id,
                  format_id: nuevoLibro.format[1],
                },
              ];
            } else {
              formatos = [
                {
                  book_id: nuevoLibro.id,
                  format_id: parseInt(nuevoLibro.format),
                },
              ];
            }

            console.log("ID DEL LIBRO => ", nuevoLibro.id);
            console.log("ID DEL FORMATO => ", nuevoLibro.format);
            console.log("LENGHT =>", nuevoLibro.format.length);
            //return res.send(formatos);

            if (formatos.length == 1) {
              db.libroFormato
                .update(
                  {
                    book_id: nuevoLibro.id,
                    format_id: parseInt(nuevoLibro.format),
                  },
                  {
                    where: { book_id: nuevoLibro.id },
                  }
                )
                .then((info) => {
                  console.log("Modificado correctamente");
                  return res.send("MODIFICADO CORRECTAMENTE");
                })
                .catch((err) => {
                  console.log("ERROR", err);
                });
            } else {
              return res.send(formatos);
              let eliminar = db.libroFormato.destroy({
                where: { book_id: nuevoLibro.id },
              });

              let insertar = db.libroFormato.bulkCreate(formatos);

              Promise.all([eliminar, insertar])
                .then(function ([eliminar, insertar]) {
                  return res.send({ eliminar, insertar });
                })
                .catch((err) => console.log(err));
            }
          }

          return res.redirect("/products/admin/edit/" + req.params.id);
        });

        //res.redirect("/products/admin");
      })
      .catch((e) => console.error(e));
  },
  delete: function (req, res) {
    console.log("DESDE EL CONTROLADOR ELIMINANDO LIBROOOOOOOO");
    // Eliminar aqui
    /*
    db.Books.findByPk(req.params.id)
      .then((bookToDelete) => {
        db.User.destroy({
          where: { id: req.params.id },
        });

        db.libroFormato.destroy({
          where: { book_id: req.params.id },
        });

        return res.redirect("/products/admin");
      })
      .catch((err) => console.log(err));
      */
    return res.send("Eliminando");
  },
};

module.exports = productsController;
