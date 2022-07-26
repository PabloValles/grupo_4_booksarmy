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
          total: prods.length,
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
    Products.findByPk(req.params.id, {
      include: [{ association: "authors" }, { association: "booksFormat" }],
    })
      .then((book) => {
        return res.status(200).json({
          data: {
            book,
            author: [book.authors],
            formats: book.booksFormat,
            urlImagen: "http://localhost:3000/img/uploads/" + book.image,
          },
          status: 200,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

module.exports = productsAPIController;
