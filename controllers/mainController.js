const path = require("path");

let mainController = {
  index: function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  },
  login: function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  },
  register: function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  },
  about: function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/about.html"));
  },
};

module.exports = mainController;
