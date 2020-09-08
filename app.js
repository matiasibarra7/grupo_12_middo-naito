const express = require("express");
const app = express();
const session = require("express-session");
const auth = require("./src/middlewares/auth");
const cookieParser = require('cookie-parser');



app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");


const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(session({
    secret: "Middo Naito",
    resave: false,
    saveUninitialized: true
}));

app.use(cookieParser());

app.use(auth);

const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const userRoutes = require("./src/routes/users");

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", userRoutes);


app.listen(3000, () => {
    console.log("Middo Naito en marcha en puerto 3000");
});

app.post("/", (req, res) => {
    res.send(req.body);
});

