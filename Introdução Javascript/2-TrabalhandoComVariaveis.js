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

// tipo boolean

console.log(primeiroNumero === segundoNumero);
console.log(texto1 === texto2)

const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy
// 0 = false
// 1 = true

console.log(0 == false);
console.log("" == false);

console.log(1 == true);

// case sensitive

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

// tipo null e undefined

let input4 = null;

if (input4 === null) {
 console.log('não há informação');
} else {
 console.log(input4);
}

let input5 = null;
let input2;

console.log(input5); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false


// template string

const nome1 = "Luana";
const idade1 = 2022-2004;
const cidade1 = "Santiago";

// const apresentacao = "meu nome é " + nome1 + ", minha idade é " + idade1 + "
// e nasci na cidade de " + cidade1;
// console.log(apresentacao)

const apresentacao = `meu nome é ${nome1}, tenho ${idade1} anos e nasci na cidade de ${cidade1}`;
console.log(apresentacao);
