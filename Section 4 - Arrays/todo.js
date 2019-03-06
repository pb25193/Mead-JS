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
        done: false
    },
    {
        task: 'try to do a leet code',
        done: false
    }
];

//addToDo <= array and todo text
//markAsDone <= array and todo text
//removeToDo <= array and todo text
//isDone <= array and todo text

let addToDo = function(todos, todoText){
    let todoToAdd = {
        task: todoText,
        done: false
    };
    todos.push(todoToAdd);
};

let markAsDone = function(todos, todoText){
    let markIndex = todos.findIndex(function(item){
        return (item.task.toLowerCase() === todoText.toLowerCase());
    });
    if(markIndex > -1){
        todos[markIndex].done = true;
    }
};

let removeToDo = function(todos, todoText){
    let removeIndex = todos.findIndex(function(item){
        return (item.task.toLowerCase() === todoText.toLowerCase());
    });
    todos.splice(removeIndex, 1);
};

let isDone = function(todos, todoText){
    let checkIndex = todos.findIndex(function(item){
        return (item.task.toLowerCase() === todoText.toLowerCase());
    });
    if(checkIndex > -1){
        return todos[checkIndex].done;
    }
}


// testing directives

console.log(todos[3]);
removeToDo(todos, 'do javascript on browser');
console.log(todos[3]);
addToDo(todos, 'do javascript on server');
console.log(todos[4]);
console.log(isDone(todos, 'do javascript on server'));
markAsDone(todos, 'do javascript on server');
console.log(isDone(todos, 'do javascript on server'));

