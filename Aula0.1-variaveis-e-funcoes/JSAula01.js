// leo e viado
/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */

const nome = "Bruno"; //precisa ter valor

let Nome = ""; //permite iniciar sem valor/vaziou

var cor = "azul";
var cor = "amarelo";

let cidade = "Registro";

cidade = "Jacupiranga";

const message = "Hello world, Iniciando Java script";

//esse comando exibira o tipo da variavel

const estado = "sp";
const idade = 18;
let endereco;

console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);

//o java s e uma linguagem de tipagem dinamica e tipagem fraca

////////////////////////////////////////////////

//tipo de funcoes no JS

function minhaFuncao(parametro) {}

minhaFuncao();

console.log(typeof minhaFuncao);

//Funçao simples

function saudacao() {
  console.log("Olá, Bem Vindo");
}

saudacao();

//funcao com parametro / argumento
//parametro e um dado que a funcao recebe
//argumento e o dado que e enviado para a funcao

function Saudacao(nome) {
  console.log("Ola Bem Vindo " + nome);

  //usando
  console.log(`Olá Bem Vindo ${nome}`);
  //contatenar com placeholder
}

Saudacao("Bruno");

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros e ${resultado}`);
}

let n1 = 6;
let n2 = 2;
soma(n1, n2);

//funcao com retorno

function Soma(n1, n2) {
  return n1 + n2;
}

console.log(`a soma dos dois numeros e ${Soma(2, 4)}`);

//funcao com mais de um retorno

function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let num = 4;

console.log(`Seu numero e ${parImpar(num)}`);

//funcao anonima

let dobro = function (x) {
  return x * 2;
};

console.log(`A multiplicaçao por dois e ${dobro(100)}`);


//arrow funcao com parametro unico

const Dobro = A => {
    return A*2
}

console.log(Dobro(10))

//arrow funcao com mais de um parametro

const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`);
};

console.log(`o resulatado da operacao e ${calc(10,'+',10)}`);
