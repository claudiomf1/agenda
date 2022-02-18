document.addEventListener("DOMContentLoaded", function () { })

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
   return document.createElement('li');

}
function teclaKeyPress(e) {
   let tecla = e.keyCode;
   if (tecla === 13) {
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value)
   }
}
function limpaInput() {
   inputTarefa.value = '';
   inputTarefa.focus();
}
inputTarefa.addEventListener('keypress', teclaKeyPress);

function criaBotaoApagar(li) {
   const botaoApagar = document.createElement('button');
   botaoApagar.innerText = 'Apagar';
   botaoApagar.setAttribute('class', 'apagar');
   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
   li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
   const li = criaLi();
   li.innerText = textoInput;
   tarefas.appendChild(li);
   limpaInput();
   criaBotaoApagar(li);
   SalvarTarefas();

}
btnTarefa.addEventListener('click', function () {
   if (!inputTarefa.value) return;
   criaTarefa(inputTarefa.value)


});

document.addEventListener('click', function (e) {
   const el = e.target;
   if (el.classList.contains('apagar')) {
      el.parentElement.remove();
      SalvarTarefas();
   }
})

function SalvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);

   }
   const tarefasJSON = JSON.stringify(listaDeTarefas);
   localStorage.setItem('tarefas',tarefasJSON);

}

function adicionaTarefasSalvas() {
   const tarefs = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefs);

   for (let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
   }
}

adicionaTarefasSalvas();