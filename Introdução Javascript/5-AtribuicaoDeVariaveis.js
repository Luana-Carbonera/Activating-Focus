console.log("Trabalhando com atribuição de variáveis");
const idade = 29; //const não varia
let nome = "Ricardo"; // let varia
let sobrenome = "Bugan";

console.log(nome + sobrenome);
console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome}`);

nome = nome + sobrenome;

// var
//var altura  = 5;
//var comprimento = 7;
//var area = altura * comprimento;
//console.log(area);

// let

let forma = "retangulo";
let alturaR = 2;
let comprimentoR = 7;
let areaR;

if (forma === "retângulo") {
    areaR = alturaR * comprimentoR;
}   else {
    areaR = (alturaR * comprimentoR) / 2;
}
console.log(areaR);

//const

const formaQ = "quadrado";
const ladoQ = 4;
const areaQ = ladoQ ** 2;
console.log(areaQ);

