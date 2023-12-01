// Carregar disciplinas do localStorage
var disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];

// Função para salvar disciplinas no localStorage
function salvarDisciplinas() {
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
}

// Função para adicionar uma nova disciplina
function adicionarDisciplina(nome, limiteFaltas) {
    disciplinas.push({
        nome: nome,
        limiteFaltas: limiteFaltas,
        faltas: 0
    });
    salvarDisciplinas();
    atualizarInterface();
}

// Função para adicionar uma falta a uma disciplina
function adicionarFalta(nome) {
    var disciplina = disciplinas.find(function (disciplina) {
        return disciplina.nome === nome;
    });
    if (disciplina) {
        disciplina.faltas++;
        if (disciplina.limiteFaltas - disciplina.faltas === 2) {
            alert('Atenção! Restam apenas duas faltas para repetir na disciplina ' + disciplina.nome);
        } else if (disciplina.faltas > disciplina.limiteFaltas) {
            alert('Limite de faltas excedido para a disciplina ' + disciplina.nome);
        }
    }
    salvarDisciplinas();
    atualizarInterface();
}

// Função para retirar uma falta de uma disciplina
function retirarFalta(nome) {
    var disciplina = disciplinas.find(function (disciplina) {
        return disciplina.nome === nome;
    });
    if (disciplina && disciplina.faltas > 0) {
        disciplina.faltas--;
    }
    salvarDisciplinas();
    atualizarInterface();
}
// Função para remover uma disciplina
function removerDisciplina(nome) {
    var index = disciplinas.findIndex(function (disciplina) {
        return disciplina.nome === nome;
    });
    if (index !== -1) {
        disciplinas.splice(index, 1);
    }
    salvarDisciplinas();
    atualizarInterface();
}

// Função para atualizar a interface do usuário
function atualizarInterface() {
    var listaDisciplinas = document.getElementById('listaDisciplinas');
    listaDisciplinas.innerHTML = '';
    disciplinas.forEach(function (disciplina) {
        var item = document.createElement('li');
        item.textContent = disciplina.nome + ': ' + disciplina.faltas + '/' + disciplina.limiteFaltas;
        var botaoRetirarFalta = document.createElement('img');
        botaoRetirarFalta.src = "../IMG/menos.png";
        /*botaoRetirarFalta.textContent = 'Retirar falta';*/
        botaoRetirarFalta.addEventListener('click', function () {
            retirarFalta(disciplina.nome);
        });
        item.appendChild(botaoRetirarFalta);
        var botaoAdicionarFalta = document.createElement('img');
        botaoAdicionarFalta.src = "../IMG/botao-adicionar.png"
        /*botaoAdicionarFalta.textContent = 'Adicionar falta';*/
        botaoAdicionarFalta.addEventListener('click', function () {
            adicionarFalta(disciplina.nome);
        });
        item.appendChild(botaoAdicionarFalta);
        var botaoRemoverDisciplina = document.createElement('img');
        botaoRemoverDisciplina.src = "../IMG/lixeira.png";
        /*botaoRemoverDisciplina.textContent = 'Remover disciplina';*/
        botaoRemoverDisciplina.addEventListener('click', function () {
            removerDisciplina(disciplina.nome);
        });
        item.appendChild(botaoRemoverDisciplina);
        listaDisciplinas.appendChild(item);
    });
}
// Evento de clique do botão de adicionar disciplina
document.getElementById('adicionarDisciplina').addEventListener('click', function () {
    var nome = document.getElementById('nomeDisciplina').value;
    var limiteFaltas = document.getElementById('limiteFaltas').value;
    adicionarDisciplina(nome, limiteFaltas);
    document.getElementById('nomeDisciplina').value = '';
    document.getElementById('limiteFaltas').value = '';
});

// Atualizar a interface do usuário quando a página é carregada
atualizarInterface();

$('#meuBotaoAdicionarDisciplina').click(function () {
    $('#meuModal').modal('show');
});