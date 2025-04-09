// Importando o pacote do Express.js
//const express = require("express");

import express from "express";

// Carregando o método principal do Express
const app = express(); // Iniciando o Express


//importando os controllers 
import ProdutosControllers from "./controllers/ProdutosController.js"


// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");



app.use(express.static('public'));

//CONFIGURANDO O EXPRESS PARA UTILIZAR AS ROTAS DOS CONTROLLERS
app.use("/", ProdutosControllers);

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});



// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8085, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
