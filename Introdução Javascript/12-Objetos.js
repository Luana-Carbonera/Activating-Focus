const listaCPFs = ["12365145652", "9242624465"];
const cliente0 = ["nome", "andre", "idade", 36];

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12385445698",
    email: "andre@email.com"
}

console.log(cliente.nome);
console.log(cliente.cpf.substring(0,3))

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["conta"]);

//adicionando itens no objeto

cliente.fone = "924252525";
console.log(cliente);
cliente.fone = "924252555";
console.log(cliente);

// deletando itens do objeto

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined