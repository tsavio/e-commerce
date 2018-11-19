const express = require("express");
const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController');

routes.get("/produto", ProdutoController.listar);
routes.get("/produto/:id", ProdutoController.visualizar);
routes.post("/produto", ProdutoController.criar);
routes.put("/produto/:id", ProdutoController.visualizar);
routes.delete("/produto/:id", ProdutoController.excluir); 

module.exports = routes;
