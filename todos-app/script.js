let todos = [
    {
        task: 'Eat BCAA',
        done: false
    },
    {
        task: 'Check mac music and export it',
        done: false
    },
    {
        task: 'watch cherno on templates',
        done: false
    },
    {
        task: 'do javascript on browser',
        done: true
    },
    {
        task: 'try to do a leet code',
        done: false
    }
];

let filters = {
    searchText: ''
};

/// things to do
/// local storage management
/// refactoring
/// UUID integration
/// storage event listener 



//DOM elements
let pendingTasks = document.querySelector('#incomplete-todos');
let completeTasks = document.querySelector('#completed-todos');
let completeBtn = document.querySelector('#mark-complete');
let searchBox = document.querySelector('#search-box');
let addForm = document.querySelector('#add-todo');


//render

let renderTodos = function(todos){
    pendingTasks.innerHTML = '';
    completeTasks.innerHTML = '';
    todos.forEach((element, index) => {
        if(element.task.toLowerCase().includes(filters.searchText.toLowerCase())){
            if(element.done){
                let p = document.createElement('p');
                p.innerText = element.task;
                completeTasks.appendChild(p);
            } else {
                let todo = document.createElement('label');
                todo.innerHTML = `<input type="checkbox" id="check-${index}"> ${element.task}`;
                pendingTasks.appendChild(todo);
                pendingTasks.appendChild(document.createElement('br'));
            }
        }
    });
};

renderTodos(todos);

//listeners

completeBtn.addEventListener('click', function(){
    todos.forEach((element, index) => {
        if(!element.done){
            let checkBox = document.querySelector(`#check-${index}`);
            if(checkBox.checked){
                element.done =true;
            }
        }
    });
    renderTodos(todos);
});

searchBox.addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderTodos(todos);
});

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let todo = {
        task: e.target.task.value,
        done: false
    };
    todos.push(todo);
    renderTodos(todos);
});
