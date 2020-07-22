const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/site/html/index.html`);
});

app.get("/cart", (req, res) => {
  res.sendFile(`${__dirname}/public/site/html/productCart.html`);
});

app.get("/details", (req, res) => {
  res.sendFile(`${__dirname}/public/site/html/productDetail.html`);
});

app.get("/registro", (req, res) => {
  res.sendFile(`${__dirname}/public/site/html/register.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/site/html/login.html`);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
