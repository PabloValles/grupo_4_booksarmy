const db = require("../../database/models/index");
const Products = db.Books;

const productsAPIController = {
  list: function (req, res) {
    Products.findAll({
      include: [{ association: "authors" }, { association: "booksFormat" }],
      order: [["name", "ASC"]],
    })
      .then(function (prods) {
        return res.status(200).json({
          totals: prods.length,
          data: prods,
          status: 200,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({ error: err });
      });
  },
  show: function (req, res) {
    let autores = db.autores.findAll({
      order: [["last_name", "ASC"]],
    });
    let formatos = db.formatos.findAll();
    let libroEditar = db.Books.findByPk(req.params.id, {
      include: [{ association: "authors" }, { association: "booksFormat" }],
    });

    Promise.all([libroEditar, autores, formatos])
      .then(([book, autores, formatos]) => {
        return res.status(200).json({
          data: {
            book,
            author: [book.authors],
            formats: book.booksFormat,
            url: "/api/products/:id",
          },
          urlImagen: book.image,
          status: 200,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

module.exports = productsAPIController;
