const person = function(name, age){
    this.name = name;
    this.age = age || 23;
};

person.prototype.logBio = function(){
    console.log(`this persons name is ${this.name} and they are ${this.age} years old. They live in ${this.address}.`);
};

person.prototype.address = "khau galli";

let friend = new person("vinay",34);
console.log(friend);

friend.address = "serenade royale";

friend.logBio();