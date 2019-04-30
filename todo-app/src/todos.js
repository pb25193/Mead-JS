import uuidv4 from 'uuid/v4';
import moment from 'moment';


// Setup the empty todos array

let todos = [];

// loadTodos
// Arguments: none
// Return value: none
let loadTodos = function(){
    let todoText = localStorage.getItem('todos');
    if(todoText){
        try{
            return JSON.parse(todoText);
        }
        catch(e){
            return [];
        }
    } else {
        return [];
    }
};

// saveTodos
// Arguments: none
// Return value: none
let saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
};

// getTodos
// Arguments: none
// Return value: todos array
let getTodos = () => {
    return loadTodos().sort((a, b)=>{
        return a.deadline-b.deadline;
    }).sort((a, b)=>{
        return b.completedAt-a.completedAt;
    });
};


// createTodo
// Arguments: todo text
// Return value: none
let createTodo = (days, hours, text) => {
    if(text.length===0) return;
    let deadline;
    if(!days && !hours){
        deadline = moment().add({
            hours: 6
        });
    } else {
        deadline = moment().add({
            days: days,
            hours: hours
        });
    }
    let todo = {
        id: uuidv4(),
        task: text,
        done: false,
        deadline: deadline.valueOf(),
        completedAt: 0,
        createdAt: moment().valueOf()
    };
    todos.push(todo);
    saveTodos(todos);
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none

const removeTodo = (identifier) => {
    const index = todos.findIndex((todo) => todo.id === identifier);
    if (index > -1){
        todos.splice(index, 1);
        saveTodos(todos);
    }
};

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodos = () => {
    todos.forEach((element, index) => {
        if(!element.done){
            let checkBox = document.querySelector(`#check-${element.id}`);
            if(checkBox.checked){
                element.done = true;
                element.completedAt = moment().valueOf();
            }
        }
    });
    saveTodos(todos);
}

// Make sure to call loadTodos and setup the exports

todos = loadTodos();

export {getTodos, createTodo, removeTodo, toggleTodos};