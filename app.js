const express = require("express");
const app = express();

const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");

/*======> Requerimos nuestros routers <======*/
const mainRouter = require("./routers/main");
const productsRouter = require("./routers/products");

/*======> Declaramos el puerto donde se ejecutará nuestra app <======*/
const PORT = process.env.PORT || 3000;

/*======> Utlizaremos ejs como motor de vistas <======*/
app.set("view engine", "ejs");

/*======> Definimos los archivos que serán estáticos <======*/
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

/*======> Declaramos las rutas <======*/
app.use("/", mainRouter);
app.use("/products", productsRouter);

/*======> Iniciamos nuestra app <======*/
app.listen(PORT, () => console.log(`Server runing in port ${PORT}`));
