let add = (a,b) => {
    return a+b;
}

console.log(add(3,1));

const people = [
    {
        name: 'Andrew',
        age: 25
    },
    {
        name: 'James',
        age: 15
    },
    {
        name: 'Harold',
        age: 53
    },
    {
        name: 'Toby',
        age: 34
    },
];

const under30 = people.filter((person)=>(person.age<30));
console.log(under30);