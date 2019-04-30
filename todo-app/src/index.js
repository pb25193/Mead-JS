// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary



// --

// Add necessary imports
import {setFilters} from './filters';
import {toggleTodos, createTodo} from './todos';
import {renderTodos} from './views';

//DOM elements
let completeBtn = document.querySelector('#mark-complete');
let searchBox = document.querySelector('#search-box');
let addForm = document.querySelector('#add-todo');

// Render initial todos

renderTodos();

// Set up search text handler

searchBox.addEventListener('input', e => {
    setFilters({searchText: e.target.value});
    renderTodos();
});

// Set up checkbox handler

completeBtn.addEventListener('click', function(){
    toggleTodos();
    renderTodos();
});

// Set up form submission handler

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = e.target.task.value.trim();
    const days = e.target.days.value.trim();
    const hours = e.target.hours.value.trim();
    createTodo(days, hours, text);
    e.target.task.value='';
    e.target.days.value='';
    e.target.hours.value='';
    renderTodos();
});


// Bonus: Add a watcher for local storage