let add = function(a, b, c = 0, d = 0){
    return (a+b+c+d);
}

let result = add(1,2,3,4);
console.log(result);
result = add(1,2,3);
console.log(result);
result = add(1,2);
console.log(result);


let nameScore = function(name = 'Anon', score = 0){
    console.log(name);
    console.log(score);
}

nameScore();
nameScore('Gabresh');
nameScore('Gabresh', 123);
nameScore(undefined, 123);
nameScore(null, 123);

let getTip = function(total, tipPct = 0.2){
    return total*tipPct;
}

tip = getTip(100);
tip2 = getTip(100, 0.25);

console.log(tip, tip2);