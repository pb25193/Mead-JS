import moment from 'moment';
import {getFilters} from './filters';
import {sortNotes, getNotes} from './notes';

let renderNotes = function(){
    let notesDiv = document.querySelector('#notes');
    notesDiv.innerHTML = '';
    const filters = getFilters();
    const notes = sortNotes(document.querySelector('#sort-by').value);
    if(notes.length===0){
        const emptyEl = document.createElement('p');
        const br = document.createElement('br');
        emptyEl.textContent = 'There are no notes to show! Add a note to get started.';
        notesDiv.appendChild(emptyEl);
        notesDiv.appendChild(br);
    } else {
        const introEl = document.createElement('p');
        introEl.textContent = 'Here are your notes:';
        notesDiv.appendChild(introEl);
        notes.forEach(function(element){
            let searchAllows = element.title.includes(filters.searchText);
            if(searchAllows){
                let noteEl = generateNote(element);
                notesDiv.appendChild(noteEl);
            }
        });
    }
};


let renderEditedTime = function(timestamp){
    let editedFromNow = document.querySelector('#last-edited');
    if(timestamp){
        editedFromNow.textContent = `This note was edited ${moment(timestamp).fromNow()}`;
    } else {
        editedFromNow.textContent = `Please create a note!`;
    }
};


let initializeEditPage = (noteID) => {
    let titleBox = document.querySelector('#note-title');
    let bodyBox = document.querySelector('#note-body');
    let tagBox = document.querySelector('#note-tag');
    let notes=getNotes();
    let note = notes.find((element) => (element.id === noteID));
    if(!note){
        location.assign('/index.html');
    }

    renderEditedTime(note.updatedAt);
    titleBox.value = note.title;
    bodyBox.textContent = note.body;
    tagBox.value = note.tag;
};


let generateNote = function(element){
    const noteEl = document.createElement('a');
    noteEl.setAttribute('class', 'list-item');
    const url = `/edit.html#${element.id}`;
    noteEl.setAttribute('href', `./edit.html#${element.id}`);
    const title = document.createElement('h3');
    const body = document.createElement('p');
    title.setAttribute('class', 'list-item__title');
    body.setAttribute('class', 'list-item__subtitle');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', 'button');
    title.textContent = element.title;
    body.textContent = `edited ${moment(element.updatedAt).fromNow()}`;
    noteEl.appendChild(title);
    noteEl.appendChild(body);
    return noteEl;
};

export {generateNote, renderEditedTime, renderNotes, initializeEditPage};