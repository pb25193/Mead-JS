// let todos = [
//     {
//         task: 'Eat BCAA',
//         done: false
//     },
//     {
//         task: 'Check mac music and export it',
//         done: false
//     },
//     {
//         task: 'watch cherno on templates',
//         done: false
//     },
//     {
//         task: 'do javascript on browser',
//         done: true
//     },
//     {
//         task: 'try to do a leet code',
//         done: false
//     }
// ];

let filters = {
    searchText: ''
};

/// things to do
/// local storage management
/// refactoring
/// UUID integration
/// storage event listener 



todos = retrieveTodos();

//DOM elements
let pendingTasks = document.querySelector('#incomplete-todos');
let completeTasks = document.querySelector('#completed-todos');
let completeBtn = document.querySelector('#mark-complete');
let searchBox = document.querySelector('#search-box');
let addForm = document.querySelector('#add-todo');


//render



renderTodos(todos);

//listeners

completeBtn.addEventListener('click', function(){
    todos.forEach((element, index) => {
        if(!element.done){
            let checkBox = document.querySelector(`#check-${element.id}`);
            if(checkBox.checked){
                element.done = true;
            }
        }
    });
    storeTodos(todos);
    renderTodos(todos);
});

searchBox.addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderTodos(todos);
});

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if(e.target.task.value){
        let todo = {
            id: uuidv4(),
            task: e.target.task.value,
            done: false
        };
        e.target.task.value='';
        todos.push(todo);
        storeTodos(todos);
        renderTodos(todos);
    }
});

a=uuidv4();
console.log(a);