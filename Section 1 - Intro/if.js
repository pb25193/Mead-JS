let farenheit = 77;
let celcius = (farenheit - 32) / 9 * 5;

let isFreezing = celcius <= 0;
let isTooHot = celcius >=50;

if(isFreezing){
    console.log('It\'s freezing!');
} else if (isTooHot) {
    console.log('It\'s hot as fuck!');
} else {
    console.log('You can go out, you can enjoy!');
}