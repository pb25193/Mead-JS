import uuidv4 from 'uuid/v4';
import moment from 'moment';

let notes = [];

const sorters = {
    byTitle: function(a, b){
        if(a.title<b.title){
            return -1;
        }
        if(a.title>b.title){
            return 1;
        }
        return 0;
    },
    byEdited: function(a, b){
        return b.updatedAt-a.updatedAt;
    },
    byCreated: function(a, b){
        return b.createdAt-a.createdAt;
    }
};

let loadNotes = function(){
    let notesText = localStorage.getItem('notes');
    if(notesText){
        try{
            return JSON.parse(notesText);
        }
        catch(e){
            return [];
        }    
    } else {
        return [];
    }
};

let saveNotes = function(){
    const notesText = JSON.stringify(notes);
    localStorage.setItem('notes', notesText);
};

const getNotes = () => loadNotes();

const createNote = () => {
    const identifier = uuidv4();
    const timestamp = moment().valueOf();
    // saveEditedTime(timestamp);
    notes.push({
        id: identifier,
        title: '',
        body: '',
        tag: '',
        createdAt: timestamp,
        updatedAt: timestamp,
    });
    saveNotes();
    return identifier;
}

const removeNote = (identifier) => {
    const index = notes.findIndex((note) => note.id === identifier);
    if (index > -1){
        notes.splice(index, 1);
        saveNotes();
        // renderNotes(notes);
    }
};

const updateNote = (identifier, updates) => {
    const note = notes.find((note) => note.id === identifier);
    if(!note) return;
    if(typeof updates.title === 'string') note.title = updates.title;
    if(typeof updates.body === 'string') note.body = updates.body;
    if(typeof updates.tag === 'string') note.tag = updates.tag;
    note.updatedAt = moment().valueOf();
    saveNotes();
    return note;
}

const sortNotes = (sortBy) => sorters[sortBy] ? getNotes().sort(sorters[sortBy]) : notes;

notes = loadNotes();

export {getNotes, createNote, removeNote, sortNotes, updateNote};


