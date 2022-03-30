const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.listen(3030, () => console.log("Server runing in port 3030"));

app.use(express.static(publicPath));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/index.html"))
);

app.get("/index", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/index.html"))
);

app.get("/productDetail", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
);

app.get("/productCart", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/login.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
);
