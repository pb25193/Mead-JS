// let notes = [
//     {
//         title: 'Blue Lights',
//         body: 'Blue lights lights lights lights lights lights lights lights lights lights lights lights lights lights',
//         tag: 'story'
//     },
//     {
//         title: 'Bomb blast',
//         body: 'boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom ',
//         tag: 'news'
//     },
//     {
//         title: 'what happened other day',
//         body: 'this that this that this that this that this that this that this that this that this that this that this that this that ',
//         tag: 'story'
//     },
//     {
//         title: 'californication',
//         body: 'secret spies from china try to steal your minds elation, little girls from sweden dream of silver screen quotations',
//         tag: 'lyrics'
//     },
//     {
//         title: 'tum hi ho',
//         body: 'hum tere bin ab reh nahi sakte tere bina kya kasoor mera, tujhse juda agar ho jayenge to khud se hi ho jayenge juda',
//         tag: 'lyrics'
//     },
//     {
//         title: 'govinda dead',
//         body: 'govinda died this week while gardening his flowers, nobody knows what to do and what will happen with hera pheri',
//         tag: 'news'
//     }
// ];


notes = getSavedNotes();

// elements
let searchBox = document.querySelector('#search-box');
let notesDiv = document.querySelector('#notes');
let newNote = document.querySelector("#new-note");

const filters = {
    searchText: ''
};



renderNotes(notes);

searchBox.addEventListener('input', function(e){
    let searchText = e.target.value;
    filters.searchText = searchText;
    renderNotes(notes);
});

window.addEventListener('storage', function(){
    notes = getSavedNotes();
    renderNotes(notes);
})

newNote.addEventListener('click', function(e){
    e.preventDefault();
    const identifier = uuidv4();
    notes.push({
        id: identifier,
        title: '',
        body: '',
        tag: ''
    });
    saveNotes(notes);
    location.assign(`/edit.html#${identifier}`);
});