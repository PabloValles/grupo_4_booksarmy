const express = require("express");
const cors = require("cors");
const app = express();

const path = require("path");
const session = require("express-session");

// para poder usar los métodos PUT y DELETE en las rutas
const methodOverride = require("method-override");

// Rutas
const usersRoute = require("./routers/users");
const mainRouter = require("./routers/main");
const productsRouter = require("./routers/products");
const apiUsersRoute = require("./routers/api/users");
const apiProductsRoute = require("./routers/api/products");
const apiAuthorRoute = require("./routers/api/authors");

// Declaramos el puerto donde se ejecutará nuestra app
const PORT = process.env.PORT || 3000;

app.use(cors());

// Para poder enviar datos por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware de aplicación global para las SESIONES
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
app.use(
  session({
    secret: "Codigo secreto",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(userLoggedMiddleware);

// Utlizaremos ejs como motor de vistas
app.set("view engine", "ejs");

// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride("_method"));

// Definimos los archivos que serán estáticos
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

// Declaramos las rutas
app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRoute);
app.use("/api/users", apiUsersRoute);
app.use("/api/products", apiProductsRoute);
app.use("/api/authors", apiAuthorRoute);

/*======> Iniciamos nuestra app <======*/
app.listen(PORT, () =>
  console.log(`🚀 Server runing: http://localhost:${PORT}`)
);
