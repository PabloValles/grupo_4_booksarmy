const path = require("path");

let mainController = {
  index: function (req, res, next) {
   // res.sendFile(path.join(__dirname, "../views/index.html"));
   res.render('index');
  },
  login: function (req, res, next) {
    res.render('login')
  },
  register: function (req, res, next) {
    res.render('register')
  },
  about: function (req, res, next) {
    res.render('about')
  },
};

module.exports = mainController;
