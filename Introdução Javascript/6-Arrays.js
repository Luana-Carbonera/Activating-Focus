console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log("Destinos possiveis");
console.log(salvador, saoPaulo, rioDeJaneiro); 

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`); //add itens na lista
listaDeDestinos.splice(1,1); //deletar itens da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[2]); //pesquisar item especifico []

// medias 10, 6.5, 8, 7.5

const notas = [
    10, 6.5, 8, 7.5
];

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// adicionando elementos a um array

notas.push(7);
console.log(notas);

let media2 = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
console.log(media2);

const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)

let jantar = [
    '🍔', '🌭', '🍕'
];

jantar.pop()
jantar.pop()

jantar.push('🍳')
jantar.push('🥗')
jantar.push('🍏')

console.log(jantar)

// slice()

const nomes = [
    "joão", "juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme",
     "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", 
    "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"
    ];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(sala1);
console.log(sala2);

const listaDeChamada = ["joão", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
// splice() - 3 parametros, indice para começar, quantos queremos remover,
// e se queremos substituir por outro termo.
listaDeChamada.splice(1, 2, "Rodrigo");
console.log(listaDeChamada);

//listaDeChamada.splice(2,0,"Rodrigo") - nesse caso,
//Rodrigo seria adicionado após Caio, que é o indice 2 (nada seria retirado)

// concatenando arrays
const salasUnificadas = sala1.concat(sala2);
console.log(salasUnificadas);

//Matrizes

const alunos = ["joão", "juliana", "Ana", "Caio"];
const mediasDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos [1] [0]}`);
console.log(listaDeNotasEAlunos);