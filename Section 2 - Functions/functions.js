let greetUser = function(){
    console.log('hey this is your first function');
}

greetUser();
greetUser();
greetUser();
greetUser();


let square = function (num){
    console.log(num*num);
}

let intSquare = function(num){
    return num*num;
}

square(3);
square(4);
square(5);
square(6);

console.log('now using return values');

console.log(intSquare(3));
console.log(intSquare(4));
console.log(intSquare(5));
console.log(intSquare(6));

console.log('printing console');
console.log(console);

let convert = function(fTemp){
    return (fTemp - 32)/1.8;
}

console.log(convert(212));
console.log(convert(112));
console.log(convert(22));