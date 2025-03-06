////
let produtos = [];
console.log(typeof(produtos));

let Produtos = ["Computador","Notebook","Celular","Tablet"];

console.log(Produtos);

console.log("Exibindo pelos indices");

console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

console.log("Usando repeticao");

for(let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`);
};

console.log("Usando forEach");
Produtos.forEach(function(produtos){
    console.log(produtos)
})

console.log("Usando forEach com indice");

Produtos.forEach((produtos, i ) => {
    console.log(`${i+1} - ${produtos}`)
})