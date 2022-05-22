const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const userController = {
  index: function (req, res) {
    const usuarios = User.findAll();

    return res.render("users/index", { usuarios });
  },
  profile: function (req, res) {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  },
  login: function (req, res) {
    return res.render("users/login");
  },
  register: function (req, res) {
    let userCheck = User.findByField("email", req.body.email);

    if (userCheck) {
      let error = "Error el usuario ya existe";
      return res.send(error);
    }

    let userToCreate = {
      first_name: req.body.first_name,
      last_name: req.body.first_name,
      email: req.body.email,
      // armar el password
      password: bcryptjs.hashSync(req.body.password, 10),
      category: "user",
      image: "default.png",
    };

    // Crear usuario
    let userNew = User.create(userToCreate);

    // Crear la sesión y redirigir al home
    return res.redirect("/login");
  },
  loginProcess: function (req, res) {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      // Comparar contraseña / Luego hacerlo con bcrypt
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (isOkThePassword) {
        delete userToLogin.password;

        // Crear la sesión
        req.session.userLogged = userToLogin;

        return res.redirect("/users/profile");
      }

      return res.send("La contraseña es incorrecta");
    }

    // Enviar error el usuario no existe
    return res.send("el user NO EXISTE");
  },
  logout: function (req, res) {
    // Borramos la cookie
    //res.clearCookie('userEmail');

    // Eliminamos la sesión
    req.session.destroy();

    // Redireccionamos a la home
    return res.redirect("/");
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
      password: bcryptjs.hashSync(req.body.password, 10),
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

    let userPass = req.body.password
      ? bcryptjs.hashSync(req.body.password, 10)
      : userDB.password;

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
};

module.exports = userController;
