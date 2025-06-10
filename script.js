//definindo constantes para uso no codigo
const bntAdd = document.getElementById("bnt-add");
const tarefa =  document.getElementById("tarefa");
const tasklist = document.getElementById("tasklist");
const titulo = document.getElementById("titulo");

let nome = prompt("Qual o seu nome?");

//if serve para se digitarem vazio fica vazio e nao dá erro
if (nome){
    titulo.innerHTML = "Lista de tarefas Generica";
};
else{
    titulo.innerHTML = `Lista de tarefas: ${nome}`;
};
bntAdd.addEventListener("click",criaTarefa);

function criaTarefa(){
    
}