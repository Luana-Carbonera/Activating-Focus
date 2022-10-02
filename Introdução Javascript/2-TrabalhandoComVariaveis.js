// curso 1

console.log("Trabalhando com variáveis");
// JS é case sensitive
// não fazer para declarar variável "idade = 29;"

const idade = 29;
const nome = "Ricardo";

// curso 2

// tipo Number

const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;
const opMatematica = primeiroNumero + segundoNumero;
console.log(opMatematica);
const numberFloat = 3.3;
const numberFloatSemZero = .5;
const novaOp = numberFloat * numberFloatSemZero;
console.log(novaOp);

// tipo String

const texto1 = "Olá, mundo!";
const texto2 = "34567";
const citacao = "ele disse 'oi!'";
const meuNome = "Luana";
console.log(citacao);

// concatenação (+)

console.log(citacao + meuNome);

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
