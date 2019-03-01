let farenheit = 37;
let celcius = (farenheit - 32) / 9 * 5;

let isFreezing = celcius < 0;

console.log(celcius);
console.log(isFreezing);


age = 1;
isChild = age < 7;
isSenior = age > 65;

kidPrice = 70;
price = 100;
seniorPrice = 70;


price += isChild * (kidPrice-price) + isSenior * (seniorPrice-price);

console.log(price);