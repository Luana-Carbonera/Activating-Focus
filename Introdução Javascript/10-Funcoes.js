// 1 - declarar a função
function imprimeTexto(texto) {
    console.log(texto)
}

// 2- executar a função
imprimeTexto("oi");
imprimeTexto("tchau");
imprimeTexto("oi");

// há três formas de escrever funções
// return tem que ser a ultima tarefa do bloco
function soma() {
    return 2+2;
}
console.log(soma());

// parâmetros

 function subtracao(num1, num2) {
    return num1 - num2;
 }
 console.log(subtracao(4, 2));
 console.log(subtracao(100, 100));

 // ordem dos parâmetros

 function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
 }
 console.log(nomeIdade(40, "Luana"));

 function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
 }
 console.log(multiplicacao(subtracao(12, 2), subtracao(4,1)));

 // função sem paramêtros

 function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// função sem return

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// vários parâmetros

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
console.log(operacaoMatematica(15, 30, 45)) // 90