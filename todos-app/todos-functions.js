let renderTodos = function(todos){
    pendingTasks.innerHTML = '';
    completeTasks.innerHTML = '';
    todos.sort((a, b)=>{
        return a.deadline-b.deadline;
    });
    todos.sort((a, b)=>{
        return b.completedAt-a.completedAt;
    });
    todos.forEach((element, index) => {
        if(element.task.toLowerCase().includes(filters.searchText.toLowerCase())){
            if(element.done){
                let item = generateTask(element);
                completeTasks.appendChild(item);
            } else {
                let item = generateTask(element);
                pendingTasks.appendChild(item);
                //pendingTasks.appendChild(document.createElement('br'));
            }
        }
    });
};


let storeTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
};

let retrieveTodos = function(){
    let todoText = localStorage.getItem('todos');
    if(todoText){
        try{
            return JSON.parse(todoText);
        }
        catch{
            return [];
        }
    } else {
        return [];
    }
};



let defineDelete = function(button, identifier){
    button.addEventListener('click', function(){
        const index = todos.findIndex(function(element){
            return element.id === identifier;
        })
        if(index>-1){
            todos.splice(index, 1);
            storeTodos(todos);
            renderTodos(todos);
        }
    });
}

let generateTask = function(element){
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('id', 'div-'+element.id);
    if(element.done){
        const spanEl = document.createElement('span');
        const timeEl = document.createElement('span');
        const button = document.createElement('button');
        timeEl.innerText = `completed ${moment(element.completedAt).fromNow()}` 
        spanEl.innerText = element.task;
        button.textContent = 'Delete';
        defineDelete(button, element.id);
        timeEl.setAttribute('class', 'due-time');
        taskDiv.appendChild(spanEl);
        taskDiv.appendChild(timeEl);
        taskDiv.appendChild(button);
    } else {
        const spanEl = document.createElement('span');
        const timeEl = document.createElement('span');
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
        defineDelete(button, element.id);
        taskDiv.appendChild(boxEl);
        taskDiv.appendChild(spanEl);
        taskDiv.appendChild(timeEl);
        taskDiv.appendChild(button);
    }
    return taskDiv;
};



