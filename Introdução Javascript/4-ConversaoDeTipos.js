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