/**
 * named exports
 * default exports, can have only one.
 */

const add = function(a,b){
    return a+b;
};

const name = "some bjyoiy";

console.log('from my code');

const square = (n) => n*n;

export { add, name, square as default}