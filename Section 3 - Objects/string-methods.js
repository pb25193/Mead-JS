let p = 'hello my fren!!';

// length

console.log(p.length);

console.log(p.toUpperCase());

let password = "6iuhioopasswjordgkfyu76";

let isValidPassword = function(password){
    return !(password.includes('password') || password.length < 8);
}

console.log(isValidPassword('jgjh'));
console.log(isValidPassword('jgjpasswordh'));
console.log(isValidPassword('jpoooopfggjh'));