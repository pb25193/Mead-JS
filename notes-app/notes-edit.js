//set up

doneBtn = document.querySelector('#edit-done');
titleBox = document.querySelector('#note-title');
bodyBox = document.querySelector('#note-body');
tagBox = document.querySelector('#note-tag');
noteID = location.hash.substring(1);
notes=getSavedNotes();
note = notes.find(function(element){
    return (element.id === noteID);
});
if(!note){
    console.log('in!');
    location.assign('/index.html');
}

// fill em in

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
    saveNotes(notes);
});

tagBox.addEventListener('input', function(e){
    const timestamp = moment().valueOf();
    saveEditedTime(timestamp);
    note.tag = e.target.value;
    note.updatedAt = timestamp;
    saveNotes(notes);
});

doneBtn.addEventListener('click', function(){
    location.assign('/index.html');
});