//definir constantes para uso no código
const btnadd =document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa')
const tastlist = document.getElementById('tasklist')
const titulo = document.getElementById('titulo')

let nome = prompt("qual o seu nome? ")
if(nome==""){
    titulo.innerHTML = "lista de tarefa Genérica"
}
else{
titulo.innerHTML = `Lista de tarefa: ${nome}`;
}

tarefa.focus()

// acompanha o evento de clique do botão adicionar tarefa
btnadd.addEventListener("click",criaTarefa);

tarefa.addEventListener('keypress', function(e){
    if (e.key === "Enter")criaTarefa();
});



function criaTarefa(){

    if(tarefa.value==""){
        alert("Digite o nome da sua tarefa")
    }
    else{
    const listItem =document.createElement('li');
    listItem.textContent = tarefa.value;
    tasklist.appendChild(listItem);


    //criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id ="remove";
    removeButton.textContent ="X"

    removeButton.addEventListener("click", function(){
        tasklist.removeChild(listItem)
    })


    //criar botão de concluir tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id="conclui";
    concluirButton.textContent="✓"

    // LISTEitem 
    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    
    concluirButton.addEventListener("click",function(){
        listItem.classList.toggle('completed');
    })
}
    tarefa.value = '';
tarefa.focus();//RETORNE O FOCO PARA O CAMPO DE EMTRADA
}
