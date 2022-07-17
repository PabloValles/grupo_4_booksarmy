const db = require("../../database/models/index");
const Users = db.User;

const usersAPIController = {
  list: function (req, res) {
    Users.findAll()
      .then((users) => {
        return res.status(200).json({
          total: users.length,
          data: users,
          status: 200,
        });
      })
      .catch((err) => err);
  },

  show: function (req, res) {
    Users.findByPk(req.params.id)
      .then((users) => {
        res.status(200).json({
          data: users,
          status: 200,
        });
      })
      .catch((err) => err);
  },
};

module.exports = usersAPIController;
