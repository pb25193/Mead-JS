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
                element.completedAt = moment().valueOf();
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
    const text = e.target.task.value.trim();
    if(text.length===0) return;
    let deadline;
    if(!e.target.days.value && !e.target.hours.value){
        deadline = moment().add({
            hours: 6
        });
    } else {
        deadline = moment().add({
            days: e.target.days.value,
            hours: e.target.hours.value
        });
    }
    console.log(deadline.toString());
    if(e.target.task.value){
        let todo = {
            id: uuidv4(),
            task: text,
            done: false,
            deadline: deadline.valueOf(),
            completedAt: 0,
            createdAt: moment().valueOf()
        };
        e.target.task.value='';
        todos.push(todo);
        storeTodos(todos);
        renderTodos(todos);
    }
});
