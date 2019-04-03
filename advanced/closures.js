//encapsulating

const createCounter = ()=> {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
counter.increment();
console.log(counter.get());

// currying

const createAdder = (a) => {
    return (b) => {
        return a+b;
    };
};

const add10 = createAdder(10);
const add100 = createAdder(100);

console.log(add10(23));
console.log(add100(134));

const createTipper = (rate) => {
    return (amount) => {
        return amount*rate/100;
    };
};

const tip10 = createTipper(10);
const tip15 = createTipper(15);

console.log(tip10(4391));
console.log(tip15(214));