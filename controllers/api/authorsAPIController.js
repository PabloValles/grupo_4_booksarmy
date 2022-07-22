const db = require("../../database/models/index");
const Author = db.autores;

const authorsAPIController = {
  list: function (req, res) {
    Author.findAll()
      .then((autor) => {
        return res.status(200).json({
          total: autor.length,
          data: autor,
          status: 200,
        });
      })
      .catch((err) => err);
  },
};

module.exports = authorsAPIController;
