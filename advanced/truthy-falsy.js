const validNum = 1;
const invalidNum = 0/0;
const anotherInvalidNum = 0;
const validStr = "avd";
const invalidStr = "";

if(undefined) console.log('undefined is truthy');
else console.log("undefined is a falsy value");

if(validNum) console.log('1 is truthy');
else console.log("1 is a falsy value");

//console.log(invalidNum);
if(invalidNum) console.log('NaN is truthy');
else console.log("NaN is a falsy value");

if(anotherInvalidNum) console.log('0 is truthy');
else console.log("0 is a falsy value");

if(validStr) console.log('avd is truthy');
else console.log("avd is a falsy value");

if(invalidStr) console.log('emptystr is truthy');
else console.log("emptystr is a falsy value");

if(null) console.log('null is truthy');
else console.log("null is a falsy value");

const a = [];

if(a) console.log('empty array is truthy');
else console.log("empty array is a falsy value");

const b = {};

if(b) console.log('empty objec is truthy');
else console.log("empty objec is a falsy value");