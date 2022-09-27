console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;
//console.log("Destinos possiveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`); //add itens na lista
listaDeDestinos.splice(1,1); //deletar itens da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[2]); //pesquisar item especifico []