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