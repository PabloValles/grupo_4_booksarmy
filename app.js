const express = require("express");
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const mainRouter = require("./routers/main");
const productsRouter = require("./routers/products");

const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.set( 'view engine', 'ejs');

app.listen(PORT, () => console.log(`Server runing in port ${PORT}`));

app.use(express.static(publicPath));

app.use("/", mainRouter);

app.use("/products", productsRouter);
