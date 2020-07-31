const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/cart", (req, res) => {
  res.sendFile(`${__dirname}/views/productCart.html`);
});

app.get("/us", (req, res) => {
  res.sendFile(`${__dirname}/views/about-us.html`);
});

app.get("/products", (req, res) => {
  res.sendFile(`${__dirname}/views/products.html`);
});

app.get("/details", (req, res) => {
  res.sendFile(`${__dirname}/views/productDetail.html`);
});

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/views/register.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});


app.post("/", (req, res) => {
     res.send(req.body);});