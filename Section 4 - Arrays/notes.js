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


// search by title
// filter by tag
// print body by tag
// add note


let noteSearch = function(notes, title){
    return notes.find(function(item){
        return (item.title.toLowerCase() === title.toLowerCase());
    });
};

let filterByTag = function(notes, tag){
    return notes.filter(function(item){
        return (item.tag.toLowerCase() === tag.toLowerCase());
    });
};

let printByTitle = function(notes, title){
    console.log(noteSearch(notes, title).body);
};

let addNote = function(notes, title, body, tag){
    let note ={
        title: title,
        body: body,
        tag: tag        
    };
    notes.push(note);
};


console.log(noteSearch(notes, 'govinda dead').body);
printByTitle(notes, 'govinda dead');

console.log(filterByTag(notes, 'lyrics'));
addNote(notes, 'New note', 'This is a new note added by the function, it will be amazing because the tag will be new stuff', 'new stuff');
printByTitle(notes, 'New note');
console.log(filterByTag(notes, 'new stuff'));
