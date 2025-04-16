import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {

  
    const produtos = [
        {nome: "Camisa 2013 Principal", preco: 399, categoria:"Camisa",
          imagem: "/images/0ddc6f6e07a5835ad98050fbbc192e4e.jpg",},
        {nome: "Camisa 2013 Segunda", preco: 399, categoria:"Camisa",
          imagem: "images/b684919d3b37179e66ab29860460550e.jpg",},
        {nome: "Memphis Bandana", preco: 79, categoria:"Acessório",
          imagem: "/images/images.jpg",},
        {nome: "Bola Corinthians", preco: 199, categoria:"Bola",
          imagem: "/images/51DDLYglK4L._AC_UF1000,1000_QL80_.jpg",},
    ];
  
    res.render("produtos", {
  
      produtos : produtos
    });
});



export default router;