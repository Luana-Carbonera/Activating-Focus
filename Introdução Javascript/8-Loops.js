console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador"

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador+= 1;
}

console.log("Destino existe: ", destinoExiste);
if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0; i < 3; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}