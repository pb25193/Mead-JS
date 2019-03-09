let notes = [
    {
        title: 'Blue Lights',
        body: 'Blue lights lights lights lights lights lights lights lights lights lights lights lights lights lights',
        tag: 'story'
    },
    {
        title: 'Bomb blast',
        body: 'boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom boom ',
        tag: 'news'
    },
    {
        title: 'what happened other day',
        body: 'this that this that this that this that this that this that this that this that this that this that this that this that ',
        tag: 'story'
    },
    {
        title: 'californication',
        body: 'secret spies from china try to steal your minds elation, little girls from sweden dream of silver screen quotations',
        tag: 'lyrics'
    },
    {
        title: 'tum hi ho',
        body: 'hum tere bin ab reh nahi sakte tere bina kya kasoor mera, tujhse juda agar ho jayenge to khud se hi ho jayenge juda',
        tag: 'lyrics'
    },
    {
        title: 'govinda dead',
        body: 'govinda died this week while gardening his flowers, nobody knows what to do and what will happen with hera pheri',
        tag: 'news'
    }
];

// elements
let searchBox = document.querySelector('#search-box');
let notesDiv = document.querySelector('#notes');
let newNoteForm = document.querySelector("#new-note-form");

const filters = {
    searchText: ''
};


let renderNotes = function(notes){
    notesDiv.innerHTML = ''
    notes.forEach(function(element){
        let searchAllows = element.title.includes(searchBox.value);
        if(searchAllows){
            let p = document.createElement('p');
            p.innerText = element.body;
            notesDiv.appendChild(p);
        }
    });
}

renderNotes(notes);

searchBox.addEventListener('input', function(e){
    let searchText = e.target.value;
    filters.searchText = searchText;
    renderNotes(notes);
    console.log(searchText);
});


newNoteForm.addEventListener('submit', function(e){
    e.preventDefault();
    notes.push({
        title: e.target.title.value,
        body: e.target.note.value,
        tag: e.target.tag.value
    });
    e.target.title.value = '';
    e.target.note.value = '';
    e.target.tag.value = '';
    renderNotes(notes);
});