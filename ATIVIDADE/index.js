import express from "express";

const app = express(); 

import ProdutosControllers from "./controllers/ProdutosController.js"
import PedidosControllers from "./controllers/PedidosController.js"
import ClientesControllers from "./controllers/ClientesController.js"



app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", ProdutosControllers);
app.use("/", PedidosControllers);
app.use("/", ClientesControllers);

app.get("/", (req, res) => {
  res.render("index");
});




app.listen(8085, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
