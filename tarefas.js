function adicionarTarefas() {
    const tarefa = document.getElementById('novaTarefa').Value;
    if (tarefa.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = tarefa;

        const btnExcluir = document.createElement('button');
                btnExcluir.textContent = 'Excluir';
                btnExcluir.classList.add('delete');
                btnExcluir.onclick = function() {
                    li.remove();
                };
        li.appendChild(btnExcluir);
        document.getElementById('listaTarefas').appendChild(li);
        document.getElementById('novaTarefa').value = '';
    }
}