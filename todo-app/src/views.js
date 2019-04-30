// renderTodos
// Arguments: none
// Return value: none

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

//DOM
let completeTasks = document.querySelector('#completed-todos');
let pendingTasks = document.querySelector('#incomplete-todos');
let completeBtn = document.querySelector('#mark-complete');

//import
import {getTodos, removeTodo} from './todos';
import { getFilters } from './filters';
import moment from 'moment';


// Make sure to set up the exports

let renderTodos = function(){
    pendingTasks.innerHTML = '';
    completeBtn.style.display = "none";
    completeTasks.innerHTML = '';
    const todos = getTodos();
    const filters = getFilters();
    let empty = true;
    todos.forEach((element, index) => {
        if(element.task.toLowerCase().includes(filters.searchText.toLowerCase())){
            empty = false;
            if(element.done){
                if(completeTasks.innerHTML === ''){
                    completeTasks.textContent = "The following tasks have been completed:";
                }
                let item = generateTask(element);
                completeTasks.appendChild(item);
            } else {
                completeBtn.style.display = "inline";
                if(pendingTasks.innerHTML === ''){
                    pendingTasks.textContent = "Here are your to-dos:";
                }
                let item = generateTask(element);
                pendingTasks.appendChild(item);
                //pendingTasks.appendChild(document.createElement('br'));
            }
        }
    });
    if(empty){
        pendingTasks.textContent = "You have no to-dos! Add a to-do to get started!";
    }
};

let defineDelete = function(button, identifier){
    button.addEventListener('click', function(){
        removeTodo(identifier);
        renderTodos();
    });
}


// fix delete bug

let generateTask = function(element){
    const taskDiv = document.createElement('label');
    const containerEl = document.createElement('div');
    taskDiv.setAttribute('id', 'div-'+element.id);
    if(element.done){
        const spanEl = document.createElement('div');
        spanEl.setAttribute('class', 'block');
        const timeEl = document.createElement('div');
        timeEl.setAttribute('class', 'block');
        const button = document.createElement('button');
        timeEl.innerText = `completed ${moment(element.completedAt).fromNow()}` 
        spanEl.innerText = element.task;
        button.textContent = 'Delete';
        button.classList.add('button', 'button--text','button--text--complete');
        defineDelete(button, element.id);
        timeEl.setAttribute('class', 'due-time');
        containerEl.appendChild(spanEl);
        containerEl.classList.add('list-item__container');
        taskDiv.classList.add('list-item', 'list-item--complete');
        taskDiv.appendChild(containerEl)
        taskDiv.appendChild(button);
        taskDiv.appendChild(timeEl);
    } else {
        const spanEl = document.createElement('div');
        spanEl.setAttribute('class', 'block');
        const timeEl = document.createElement('div');
        timeEl.setAttribute('class', 'block');
        spanEl.innerText = element.task;
        if(moment().valueOf()<element.deadline){
            timeEl.innerText = `due at ${moment(element.deadline).format("hh:mma, Do MMMM, YYYY")}, added ${moment(element.createdAt).fromNow()}`;
        } else {
            timeEl.innerText = `this task is overdue, it was added ${moment(element.createdAt).fromNow()}`
        }
        const boxEl = document.createElement('input');
        boxEl.setAttribute('type', 'checkbox');
        boxEl.setAttribute('id', 'check-'+element.id);
        timeEl.setAttribute('class', 'due-time');
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.classList.add('button', 'button--text');
        defineDelete(button, element.id);
        containerEl.appendChild(boxEl);
        containerEl.appendChild(spanEl);
        containerEl.appendChild(timeEl);
        containerEl.classList.add('list-item__container');
        taskDiv.classList.add('list-item');
        taskDiv.appendChild(containerEl)
        taskDiv.appendChild(button);
    }
    return taskDiv;
};


export {renderTodos};