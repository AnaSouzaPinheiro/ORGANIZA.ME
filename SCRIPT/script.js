const modal = document.querySelector('.modal-container');
const tablebody = document.querySelector('tbody');
const campoDisciplina = document.querySelector('#disciplina');
const campoProvaI = document.querySelector('#provaI');
const campoProvaII = document.querySelector('#provaII');
const campoProvaIII = document.querySelector('#provaIII');
const campoTrabalho = document.querySelector('#trabalho');
const btnSalvar = document.querySelector('#btnSalvar');
const disciplinaAdd = document.querySelector('#disciplinaAdd');

let teste = [];
let id = undefined;
let nextID;
let campoTotal;

tablebody.innerHTML = '';

function calculaTotal() {
    campoTotal = parseFloat(campoProvaI.value) + parseFloat(campoProvaII.value) + parseFloat(campoProvaIII.value) + parseFloat(campoTrabalho.value);
}

function createItem() {
    nextID = findNextId();

    campoDisciplina.value = campoDisciplina.value || "Indefinido";
    campoProvaI.value = campoProvaI.value || 0;
    campoProvaII.value = campoProvaII.value || 0;
    campoProvaIII.value = campoProvaIII.value || 0;
    campoTrabalho.value = campoTrabalho.value || 0;


    let item = {
        'id': nextID,
        'disciplina': campoDisciplina.value,
        'provaI': campoProvaI.value,
        'provaII': campoProvaII.value,
        'provaIII': campoProvaIII.value,
        'trabalho': campoTrabalho.value,
        'total': parseFloat(campoProvaI.value) + parseFloat(campoProvaII.value) + parseFloat(campoProvaIII.value) + parseFloat(campoTrabalho.value),
    };
    insertHTMLTableRow(item);
    teste.push(item);
    setItensBD();
}

function editItem(index) {
    openModal(true, index);
}

function deleteItem(id) {
    let index = teste.findIndex(contato => contato.id === id);
    document.getElementById(`tr-${id}`).remove();
    teste.splice(index, 1);
    setItensBD();
}

/* TA DANDO ERRADO

    function validaCor(item) {
    const provaIValue = parseFloat(item.provaI);

    if (valor === 30 && provaIValue < 18) {
        const cellProvaI = document.getElementById(`provaI-${item.id}`);
        cellProvaI.style.color = "red";
    }
} */

function updateItem() {
    calculaTotal();

    campoDisciplina.value = campoDisciplina.value || 0;
    campoProvaI.value = campoProvaI.value || 0;
    campoProvaII.value = campoProvaII.value || 0;
    campoProvaIII.value = campoProvaIII.value || 0;
    campoTrabalho.value = campoTrabalho.value || 0;

    let item = {
        'id': id,
        'disciplina': campoDisciplina.value,
        'provaI': campoProvaI.value,
        'provaII': campoProvaII.value,
        'provaIII': campoProvaIII.value,
        'trabalho': campoTrabalho.value,
        'total': campoTotal,
    };

    if (id !== undefined) {
        let index = teste.findIndex(contato => contato.id === id);
        teste[index] = item;
    }

    document.getElementById(`disciplina-${item.id}`).innerHTML = item.disciplina;
    document.getElementById(`provaI-${item.id}`).innerHTML = item.provaI;
    document.getElementById(`provaII-${item.id}`).innerHTML = item.provaII;
    document.getElementById(`provaIII-${item.id}`).innerHTML = item.provaIII;
    document.getElementById(`trabalho-${item.id}`).innerHTML = item.trabalho;
    document.getElementById(`total-${item.id}`).innerHTML = item.total;

    setItensBD();
}

function modalAddEvents() {
    // para cada clique fora da área do modal ele será fechado
    // quando clica dentro = -1, quando clica fora = 0
    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1)
            modal.classList.remove('active');
    }
    document.onkeydown = e => {
        if (e.key === 'Escape')
            modal.classList.remove('active');
    }
}

function openModal(edit = false, index = 0) {
    modal.classList.add('active');
    modalAddEvents();
    // quando for pra editar os valores dos campos serão carregados
    if (edit) {
        id = index
        campoDisciplina.value = document.getElementById(`disciplina-${index}`).innerHTML;
        campoProvaI.value = document.getElementById(`provaI-${index}`).innerHTML;
        campoProvaII.value = document.getElementById(`provaII-${index}`).innerHTML;
        campoProvaIII.value = document.getElementById(`provaIII-${index}`).innerHTML;
        campoTrabalho.value = document.getElementById(`trabalho-${index}`).innerHTML;
        campoTotal = document.getElementById(`total-${index}`).innerHTML;
    } else {
        campoDisciplina.value = '';
        campoProvaI.value = '';
        campoProvaII.value = '';
        campoProvaIII.value = '';
        campoTrabalho.value = '';
        campoTotal = '';
    }
}

function findNextId() {
    if (teste.length === 0) return 1;
    let actualId = 0;
    teste.forEach(contato => {
        if (contato.id > actualId) actualId = contato.id
    })
    return actualId + 1;
}

function salvarNotas(e) {
    e.preventDefault();

    if (id !== undefined) updateItem();
    else createItem();
    modal.classList.remove('active');
    id = undefined;
}

function insertHTMLTableRow(item) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `tr-${item.id}`);

    tr.innerHTML = `
      <td id="disciplina-${item.id}">${item.disciplina}</td>
      <td id="provaI-${item.id}">${item.provaI}</td>
      <td id="provaII-${item.id}">${item.provaII}</td>
      <td id="provaIII-${item.id}">${item.provaIII}</td>
      <td id="trabalho-${item.id}">${item.trabalho}</td>
      <td id="total-${item.id}">${item.total}</td>
      <td class="acao">
        <button onclick="editItem(${item.id})"><i class='bx bx-edit'></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${item.id})"><i class='bx bx-trash'></i></button>
      </td>
    `;
    tablebody.appendChild(tr);
}

function getItensBD() {
    return JSON.parse(localStorage.getItem('db')) ?? [];
}

function setItensBD() {
    localStorage.setItem('db', JSON.stringify(teste));
}

function loadItens() {
    let itens = getItensBD();
    tablebody.innerHTML = '';
    itens.forEach((item) => {
        insertHTMLTableRow(item);
    })
    teste.push(...itens);
}

function init() {
    loadItens();
    nextID = findNextId();
}

init();

disciplinaAdd.onclick = e => openModal();
btnSalvar.onclick = e => salvarNotas(e);


function entrar() {
  window.location.href = "./index2.html";
}
