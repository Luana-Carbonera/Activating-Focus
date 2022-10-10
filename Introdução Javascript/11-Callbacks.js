const nome = ["Ana", "Ju", "Paula", "Leo"];

nome.forEach(ImprimeNomes);

function ImprimeNomes(nome){
    console.log(nome)
}

const notas = [10, 9, 8, 7, 6];
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);
console.log(notasAtualizadas);

const alunos = ["ana Julia", "Caio vinicius", "BIA silva"];

const alunosAtualizados = alunos.map(aluno => aluno.toUpperCase());
console.log(alunosAtualizados);

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
