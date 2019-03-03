let n = 103.941;

console.log(n.toFixed(2));

console.log(Math.round(n));
console.log(Math.ceil(n));
console.log(Math.floor(n));

let sum = 0;

let samples = 1000000;
let min = 10;
let max = 20;

for(let i = 0; i < samples; i++){
    let randNum = Math.random()*(max-min)+min;
    sum += randNum;
}
let avg = sum/samples;
console.log(avg);


// guess game

let makeGuess = function(guess){
    let randNum = Math.floor(Math.random()*5)+1;
    console.log(randNum, guess);
    return (guess === randNum);
}

console.log(makeGuess(3));