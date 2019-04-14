let renderTodos = function(todos){
    pendingTasks.innerHTML = '';
    completeBtn.style.display = "none";
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
    if(pendingTasks.innerHTML === ''){
        pendingTasks.textContent = "You have no to-dos! Add a to-do to get started!";
    }
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
        button.classList.add('button', 'button--text');
        defineDelete(button, element.id);
        timeEl.setAttribute('class', 'due-time');
        containerEl.appendChild(spanEl);
        containerEl.appendChild(timeEl);
        containerEl.classList.add('list-item__container');
        taskDiv.classList.add('list-item');
        taskDiv.appendChild(containerEl)
        taskDiv.appendChild(button);
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



