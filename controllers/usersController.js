const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models/index");

const userController = {
  index: function (req, res) {
    db.User.findAll({
      include: [
        {
          association: "categorias",
        },
      ],
    }).then((u) => res.render("users/index", { usuarios: u }));
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
    let validacion = validationResult(req);

    if (validacion.errors.length > 0) {
      console.log(validacion.errors);
      return res.render("register", {
        errors: validacion.mapped(),
        oldData: req.body,
      });
    }

    db.User.findAll({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user.length > 0) {
        return res.render("register", {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          oldData: req.body,
        });
      }

      let userToCreate = {
        first_name: req.body.first_name,
        last_name: req.body.first_name,
        email: req.body.email,
        // armar el password
        password: bcryptjs.hashSync(req.body.password, 10),
        category_id: 2,
        image: "default.png",
      };

      // Crear usuario
      db.User.create(userToCreate);

      // Crear la sesión y redirigir al home
      return res.redirect("/login");
    });
  },
  loginProcess: function (req, res) {
    let validation = validationResult(req);

    if (validation.errors.length > 0) {
      console.log(validation.errors);
    }

    db.User.findAll({
      where: { email: req.body.email },
    }).then((userToLogin) => {
      if (userToLogin.length > 0) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin[0].password
        );

        if (isOkThePassword) {
          delete userToLogin[0].password;

          // Crear la sesión
          req.session.userLogged = userToLogin[0];

          return res.redirect("/users/profile");
        }

        return res.send("La contraseña es incorrecta");
      }

      // Enviar error el usuario no existe
      return res.send("el user NO EXISTE");
    });
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
  create: (req, res) => res.render("users/create"),

  store: function (req, res) {
    //let userCheck = User.findByField("email", req.body.email);

    db.User.findAll({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user.length > 0) {
        let error = "Error el usuario ya existe";
        return res.send(error);
      }

      let img_user = "default.png";

      if (req.file) {
        img_user = req.file.filename;
      }

      let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        category_id: parseInt(req.body.category_id),
        image: img_user,
      };

      db.User.create(userToCreate);
      return res.redirect("/users");
    });
  },
  edit: function (req, res) {
    const user = db.User.findByPk(req.params.id);
    const categorias = db.categorias.findAll();

    Promise.all([user, categorias]).then(([usuarios, categorias]) => {
      return res.render("users/edit", { user: usuarios, categorias });
    });
  },
  update: function (req, res) {
    db.User.findByPk(req.params.id).then((usuario) => {
      let userImg = req.file ? req.file.filename : usuario.image;

      let userPass = req.body.password
        ? bcryptjs.hashSync(req.body.password, 10)
        : usuario.password;

      let userToUpdate = {
        id: parseInt(req.params.id),
        ...req.body,
        password: userPass,
        category_id: parseInt(req.body.category_id),
        image: userImg,
      };

      db.User.update(userToUpdate, {
        where: {
          id: req.params.id,
        },
      });
      User.update(userToUpdate);

      return res.redirect("/users");
    });
  },
  delete: function (req, res) {
    console.log("desde el controlador", req.params.id);

    db.User.findByPk(req.params.id)
      .then((user) => {
        User.delete(user);
        db.User.destroy({
          where: { id: req.params.id },
        });

        return res.redirect("/users");
      })
      .catch((err) => console.log(err));
  },
};

module.exports = userController;
