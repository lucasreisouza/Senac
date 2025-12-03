const tarefas = [];
const form = document.querySelector('#formulario');
const lista = document.querySelector('#lista');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.querySelector('#titulo').value;
    const descricao = document.querySelector('#descricao').value;
    const prioridade = document.querySelector('#prioridade').value;
    const tarefa = { titulo, descricao, prioridade };
    tarefas.push(tarefa);
    mostrartarefa();
    form.reset();
});
function mostrartarefa() {
    lista.innerHTML = "";
    // contador === indice === i
    for (let indice = 0; indice < tarefas.length; indice++) {
        const tarefa = tarefas[indice];     // se   else
        const cor = tarefa.prioridade === 'Alta' ? 'red' : tarefa.prioridade === 'Média' ? 'orange' : 'green';
        lista.innerHTML += `<div class="card" style="background-color: ${cor};">
            <h3><b>${tarefa.titulo}</b></h3>
            <p>${tarefa.descricao}</p>
            <p class="prioridade">Prioridade: <span>${tarefa.prioridade}</span>
            </p>
        </div>`
    }
}