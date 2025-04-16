import express from "express";
const router = express.Router();


router.get("/clientes", (req, res) => {

  
    const clientes = [
        { nome: "Amanda Silva", cpf: "123.456.789-01", endereco: "Rua das Flores, 123, São Paulo/SP" },
        { nome: "Carlos Alberto", cpf: "987.654.321-00", endereco: "Av. Paulista, 1000, São Paulo/SP" },
        { nome: "Fernanda Costa", cpf: "321.789.654-98", endereco: "Rua dos Lírios, 45, Curitiba/PR" },
        { nome: "João Pereira", cpf: "654.123.987-22", endereco: "Av. Brasil, 789, Belo Horizonte/MG" },
        { nome: "Larissa Monteiro", cpf: "111.222.333-44", endereco: "Rua Central, 56, Salvador/BA" },
        { nome: "Rafael Nogueira", cpf: "777.888.999-00", endereco: "Travessa Sol, 200, Recife/PE" },
        { nome: "Bianca Rocha", cpf: "159.753.486-21", endereco: "Alameda Mar, 301, Florianópolis/SC" }
    ];
    
   
    
  
    res.render("clientes", {

        clientes : clientes
    });
});



export default router;