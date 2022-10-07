// tipagem dinâmica 
// unytyped
// multiparadigma

let minhaVar = 567;
minhaVar = "texto";
minhaVar = true;

// == (comparação implícita) - compara somente o valor

const numero = 5;
const texto = "5";

console.log(numero == texto);

// === (comparação explícita) - compara o valor e o tipo de dado

console.log(numero === texto);

//typeof
console.log(typeof numero);
console.log(typeof texto);

// utilizar conversão explícita number() ou string()

// || - ou
// && - e (and)
// !== - diferente

// operador ternário

const idadeMinima = 18;
const idadeCliente = 19;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja");
} else {
    console.log("suco");
}

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");