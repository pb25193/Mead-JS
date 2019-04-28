//set up

let deleteBtn = document.querySelector('#edit-delete');
let titleBox = document.querySelector('#note-title');
let editedFromNow = document.querySelector('#last-edited');
let bodyBox = document.querySelector('#note-body');
let tagBox = document.querySelector('#note-tag');
let noteID = location.hash.substring(1);
let notes=getSavedNotes();
let note = notes.find(function(element){
    return (element.id === noteID);
});
if(!note){
    console.log('in!');
    location.assign('/index.html');
}

// fill em in

renderEditedTime(getEditedTime());
titleBox.value = note.title;
bodyBox.textContent = note.body;
tagBox.value = note.tag;

//functionality



titleBox.addEventListener('input', function(e){
    const timestamp = moment().valueOf();
    saveEditedTime(timestamp);
    note.title = e.target.value;
    note.updatedAt = timestamp;
    saveNotes(notes);
});

bodyBox.addEventListener('input', function(e){
    const timestamp = moment().valueOf();
    saveEditedTime(timestamp);
    note.body = e.target.value;
    note.updatedAt = timestamp;
    renderEditedTime(getEditedTime());
    saveNotes(notes);
});

tagBox.addEventListener('input', function(e){
    const timestamp = moment().valueOf();
    saveEditedTime(timestamp);
    note.tag = e.target.value;
    note.updatedAt = timestamp;
    saveNotes(notes);
});

deleteBtn.addEventListener('click', function(){
    const index = notes.findIndex(function(note){
        return note.id === noteID;
    });
    console.log('hi', index);
    if (index > -1){
        notes.splice(index, 1);
        saveNotes(notes);
    }
    location.assign('/index.html');
});