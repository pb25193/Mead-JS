let renderNotes = function(notes){
    notesDiv.innerHTML = ''
    notes.forEach(function(element){
        let searchAllows = element.title.includes(filters.searchText);
        if(searchAllows){
            let noteEl = generateNote(element);
            notesDiv.appendChild(noteEl);
        }
    });
}

let getSavedNotes = function(){
    let notesText = localStorage.getItem('notes');
    if(notesText){
        return JSON.parse(notesText);
    } else {
        return [];
    }
}

let saveNotes = function(notes){
    const notesText = JSON.stringify(notes);
    localStorage.setItem('notes', notesText);
}

let defineDelete = function(button, identifier){
    button.addEventListener('click', function(){
        const index = notes.findIndex(function(note){
            return note.id === identifier;
        });
        if (index > -1){
            notes.splice(index, 1);
            saveNotes(notes);
            renderNotes(notes);
        }
    });
}

let defineEdit = function(button, identifier){
    button.addEventListener('click', function(){
        location.assign(`/edit.html#${identifier}`);
    });
}

let generateNote = function(element){
    const noteEl = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('p');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    editButton.textContent = 'Edit';
    title.textContent = element.title;
    body.textContent = element.body;
    defineDelete(deleteButton, element.id);
    defineEdit(editButton, element.id);
    noteEl.appendChild(title);
    noteEl.appendChild(body);
    noteEl.appendChild(deleteButton);
    noteEl.appendChild(editButton);
    return noteEl;
}

