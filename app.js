const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')

const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', userRoutes);


app.listen(3000, () => {
  console.log("MIDDO NAITO RUNNING!!");
  console.log("Servidor escuchando en el puerto 3000");
});


app.post("/", (req, res) => {
     res.send(req.body);});