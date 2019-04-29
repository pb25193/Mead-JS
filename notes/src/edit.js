import {initializeEditPage, renderEditedTime} from './views';
import { removeNote, updateNote } from './notes';


let deleteBtn = document.querySelector('#edit-delete');
let titleBox = document.querySelector('#note-title');
let bodyBox = document.querySelector('#note-body');
let tagBox = document.querySelector('#note-tag');
let noteID = location.hash.substring(1);

initializeEditPage(noteID);

//functionality

titleBox.addEventListener('input', function(e){
    const note = updateNote(noteID, {title: e.target.value});
    renderEditedTime(note.updatedAt);
});

bodyBox.addEventListener('input', function(e){
    const note = updateNote(noteID, {body: e.target.value});
    renderEditedTime(note.updatedAt);
});

tagBox.addEventListener('input', function(e){
    const note = updateNote(noteID, {tag: e.target.value});
    renderEditedTime(note.updatedAt);
});

deleteBtn.addEventListener('click', function(){
    removeNote(noteID);
    location.assign('/index.html');
});

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        initializeEditPage(noteID);
    }
})