const User = require("../models/User");

const userController = {
  index: function (req, res) {
    const usuarios = User.findAll();

    return res.render("users/index", { usuarios });
  },
  profile: function (req, res) {
    return res.render("users/profile");
  },
  login: function (req, res) {
    return res.render("users/login");
  },
  register: function (req, res) {
    return res.render("users/register");
  },

  // Luego realizar el crud
  create: function (req, res) {
    return res.render("users/create");
  },
  store: function (req, res) {
    let userCheck = User.findByField("email", req.body.email);

    if (userCheck) {
      let error = "Error el usuario ya existe";
      return res.send(error);
    }

    let userToCreate = {
      ...req.body,
      image: req.file.filename,
    };

    let userNew = User.create(userToCreate);

    return res.redirect("/users");
  },
  edit: function (req, res) {
    let user = User.findByPk(req.params.id);
    return res.render("users/edit", { user });
  },
  update: function (req, res) {
    let userDB = User.findByPk(req.params.id);

    let userImg = req.file ? req.file.filename : userDB.image;
    let userPass = req.body.password ? req.body.password : userDB.password;

    let userToUpdate = {
      id: parseInt(req.params.id),
      ...req.body,
      password: userPass,
      image: userImg,
    };

    let response = User.update(userToUpdate);

    if (response == null) {
      // Enviar Error
    }

    return res.redirect("/users");
  },
  delete: function (req, res) {
    let userToDelete = User.findByPk(req.params.id);

    let response = User.delete(userToDelete);

    if (response == null) {
      // Enviar Error
    }

    return res.redirect("/users");
  },

  // Funciones de login
  login: function (req, res) {},
  logout: function (req, res) {},
};

module.exports = userController;
