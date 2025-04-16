import express from "express";
const router = express.Router();


router.get("/pedidos", (req, res) => {

  
    
    const pedidos = [

        { numero: 'PED0001',nome: "Amanda Silva",  total: 'R$ 230,00',
            status: 'Entregue',
            data: '2025-02-21' },
        { numero: 'PED0002',nome: "Carlos Alberto", cpf: "987.654.321-00", total: 'R$ 329,90',
            status: 'Em preparo',
            data: '2025-04-10' },
        { numero: 'PED0003',nome: "Fernanda Costa", cpf: "321.789.654-98", total: 'R$ 79,90',
            status: 'Em preparo',
            data: '2025-05-30' },
        { numero: 'PED0004',nome: "João Pereira", cpf: "654.123.987-22", total: 'R$ 400,90',
            status: 'Entregue',
            data: '2025-04-05' },
        { numero: 'PED0005',nome: "Larissa Monteiro", cpf: "111.222.333-44", total: 'R$ 599,00',
            status: 'Entregue',
            data: '2025-02-01' },
        { numero: 'PED0006',nome: "Rafael Nogueira", cpf: "777.888.999-00", total: 'R$ 200,50',
            status: 'Em preparo',
            data: '2025-04-12' },
        { numero: 'PED0007',nome: "Bianca Rocha", cpf: "159.753.486-21", total: 'R$ 400,00',
            status: 'Entregue',
            data: '2025-03-20' }
        
      ];
    
      res.render('pedidos', { pedidos });
  
});



export default router;