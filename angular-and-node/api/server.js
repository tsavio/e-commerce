const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
// Iniciando o App
const app = express();
app.use(express.json()); //premite enviar dados json para minha aplicação
// Iniciando o DB
mongoose.connect(
    "mongodb://192.168.99.100:27017/e-commerce",
     {useNewUrlParser: true}
);
requireDir("./models");
const Produto = mongoose.model("Produto");


//Rotas
app.use("/api", require("./routes"));

app.listen(3001);
