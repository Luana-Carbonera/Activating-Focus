const nome = ["Ana", "Ju", "Paula", "Leo"];

nome.forEach(ImprimeNomes);

function ImprimeNomes(nome){
    console.log(nome)
}

const notas = [7, 4.5, 8, 7.6];
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);
console.log(notasAtualizadas);

const alunos = ["ana Julia", "Caio vinicius", "BIA silva"];

const alunosAtualizados = alunos.map(aluno => aluno.toUpperCase());
console.log(alunosAtualizados);

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura


const reprovados = nome.filter( (aluno, indice) => notas[indice] < 5);
console.log(`reprovados; ${reprovados}`);


const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDasSalas) {
    const somaSalas = notasDasSalas.reduce((acum, atual) => 
    atual + acum, 0)
    return somaSalas/notasDasSalas.length
}

console.log(mediaSala(salaJS))
console.log(mediaSala(salaJava))
console.log(mediaSala(salaPython))

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;
console.log(media);


const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const soma2 = numeros.reduce(operacaoNumerica, 0)