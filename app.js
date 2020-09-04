const express = require("express");
const app = express();
const session = require("express-session");
const auth = require("./src/middlewares/auth");


app.use(session({secret: "Admin", resave: false, saveUninitialized: true}));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");


const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const userRoutes = require("./src/routes/users");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(auth);

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", userRoutes);



app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

