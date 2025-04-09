import express from "express";
//carrengando o metodo express para gerenciador de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
//array com lista de produtos
  
    const produtos = [
        {nome: "Celular Motorola E22", preco: 1200, categoria:"Eletroportaveis"},
        {nome: "Tablet Samsung", preco: 900, categoria:"Eletronicos"},
        {nome: "Notebook Lenovo", preco: 3200, categoria:"Computadores"},
        {nome: "Fone Bluetooth", preco: 150, categoria:"Perifericos"},
    ];
  
    res.render("produtos", {
      // Enviando a variável produto para a página
      produtos : produtos
    });
});

////exportando um modulo

export default router;