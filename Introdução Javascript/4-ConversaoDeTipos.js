console.log("Conversão de tipos");

console.log("ano" + 2022);
console.log("2" + "2")
console.log(parseInt("2") + parseInt("2"));

console.log("10" / "2"); //obriga a converter em numero
console.log("Ricardo" / "2"); //NaN - Not a Number

// conversão implícita

const numero = 456;
const numeroString = "456";
console.log(numero === numeroString);
console.log(numero == numeroString);

console.log(numero + numeroString);

//conversão explícita

console.log(numero + Number(numeroString));

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// teremos a conversão do número 12341234 para uma string “12341234” 
// e assim poderemos fazer a concatenação entre as strings

console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, 
// que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); 
// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 
// teremos a conversão de String para números, possibilitando a realização da da multiplicação

let cpfUsuario = "12312312312"

//let var = 0; (erro)
//let if = 0; (erro)
//let const = "Alura"; (erro)

let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";


