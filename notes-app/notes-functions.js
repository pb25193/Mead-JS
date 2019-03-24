let renderNotes = function(notes){
    notesDiv.innerHTML = '';
    notes.sort(sorters[sortBy.value]);
    notes.forEach(function(element){
        let searchAllows = element.title.includes(filters.searchText);
        if(searchAllows){
            let noteEl = generateNote(element);
            notesDiv.appendChild(noteEl);
        }
    });
}

let renderEditedTime = function(timestamp){
    if(timestamp){
        editedFromNow.textContent = `This list was edited ${moment(timestamp).fromNow()}`;
    } else {
        editedFromNow.textContent = `Please create a note!`;
    }
}


let getSavedNotes = function(){
    let notesText = localStorage.getItem('notes');
    if(notesText){
        try{
            return JSON.parse(notesText);
        }
        catch{
            return [];
        }    
    } else {
        return [];
    }
}

let getEditedTime = function(){
    let timeText = localStorage.getItem('editedTime');
    if(timeText){
        return JSON.parse(timeText);
    } else {
        return 0;
    }
}


let saveNotes = function(notes){
    const notesText = JSON.stringify(notes);
    localStorage.setItem('notes', notesText);
}

let saveEditedTime = function(timestamp){
    const timeText = JSON.stringify(timestamp);
    localStorage.setItem('editedTime', timeText);
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
        location.assign(`./edit.html#${identifier}`);
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

