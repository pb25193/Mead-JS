const add = function(a,b){
    console.log(arguments);
    return 0;
};


const sum = add(31,232,31,45);


const car = {
    color: 'red',
    sound: 'vroom',
    start: () => {
        console.log(`${this.color} colored car be like ${this.sound}!`);
    }
};

car.start();
