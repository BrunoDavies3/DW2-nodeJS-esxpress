function Simples(){
    console.log(`Seu nome e Bruno`);
    console.log(`Sua idade e 19`);
    console.log(`Sua cidade e Jacupiranga`);

};
Simples();

///////////////////////////////////

function comParametro(num1, num2) {
    let resu = num1 / num2;
    console.log("O resultado da divisão foi "+resu);
  }
  
let num1 = 6;
let num2 = 2;
comParametro(num1, num2);

///////////////////////////////////

function retorno(n1, n2,n3) {
    return n1 * n2 * n3;
  }
  
  console.log(`a multiplicacao dos três numeros e ${retorno(8, 4,10)}`);
///////////////////////////////////

function retorno2(idade) {

    if(idade >= 18){
      console.log("Maior de idade");

    }else{
      console.log("Menor de idade");
    }
};

let idade = 18; 

retorno2(idade);

//////////////////////////////////

let anonima = function(nota1,nota2){
    if(((nota1 + nota2)/2) <= 5){
      console.log("Aprovado");

    }else{
      console.log("Reprovado");
    }
};

let Nota1 = 10;
let Nota2 = 5;

anonima(Nota1,Nota2);

////////////////////////


let arrow1 = nu1 => {
   console.log("O triplo do numero e " + (nu1*3));
};

console.log(arrow1(10));


////////////////////////////

let arrow2 = (N1,N2,N3,N4) => {
  
  console.log(`${(N1+N2+N3+N4)}`);
};

console.log(arrow2(5,5,5,5));


///////////////////////////////



const IIFE = (function(nome){
  console.log(`Ola Bem vindo ${nome}`)
})('Bruno');
