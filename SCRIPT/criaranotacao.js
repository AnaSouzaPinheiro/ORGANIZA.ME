var notes = JSON.parse(localStorage.getItem('notes')) || [];
var backupNotes = [];
renderNotes();

function saveNote() {
  var noteNameInput = document.getElementById('noteNameInput');
  var noteTextInput = document.getElementById('noteTextInput');
  if (!noteNameInput.value.trim()) {
    alert('O nome da nota não pode estar vazio');
    return;
  }
  var note = { name: noteNameInput.value, text: noteTextInput.value, id: Date.now() };
  notes.push(note);
  noteNameInput.value = '';
  noteTextInput.value = '';
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
  $('#noteModal').modal('hide');
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
  var noteNameInput = document.getElementById('noteNameInput');
  var noteTextInput = document.getElementById('noteTextInput');
  noteNameInput.value = '';
  noteTextInput.value = '';
}

function startEditingNote(id) {
  backupNotes = [...notes]; // Fazendo backup antes de editar
  var note = notes.find(note => note.id === id);
  var noteNameInput = document.getElementById('noteNameInput');
  var noteTextInput = document.getElementById('noteTextInput');
  noteNameInput.value = note.name;
  noteTextInput.value = note.text;
  notes = notes.filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(notes));
  $('#noteModal').modal('show');
}

function editNote(id) {
  var note = notes.find(note => note.id === id);
  var noteInput = document.getElementById('noteInput');
  noteInput.value = note.text;
  notes = notes.filter(note => note.id !== id);
  $('#noteModal').modal('show');
}

function cancelEditing() {
  notes = [...backupNotes]; // Restaurando a partir do backup
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
  var noteNameInput = document.getElementById('noteNameInput');
  var noteTextInput = document.getElementById('noteTextInput');
  noteNameInput.value = '';
  noteTextInput.value = '';
}

function renderNotes() {
  var notesDiv = document.getElementById('notes');
  notesDiv.innerHTML = '';
  for (var note of notes) {
    notesDiv.innerHTML += `
            <div class="note">
                <h2>${note.name}</h2>
                <button id="visualizar" class="btn btn-primary" onclick="startEditingNote(${note.id})">Visualizar</button>
                
            </div>
        `;
  }
}



