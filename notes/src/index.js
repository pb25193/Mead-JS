import {createNote} from './notes';
import {setFilters} from './filters';
import {renderNotes} from './views';


let searchBox = document.querySelector('#search-box');
let newNote = document.querySelector("#new-note");
let sortBy = document.querySelector('#sort-by');


renderNotes();

searchBox.addEventListener('input', function(e){
    setFilters({searchText: e.target.value});
    renderNotes();
});

sortBy.addEventListener('change', function(){
    renderNotes();
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        renderNotes();
    }
})

newNote.addEventListener('click', function(e){
    e.preventDefault();
    const identifier = createNote();
    location.assign(`./edit.html#${identifier}`);
});

