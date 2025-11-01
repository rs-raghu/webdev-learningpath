// 1. Abstraction: encapsulating logic in a reusable function
function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}
console.log("Area of circle (r=5):", calculateAreaOfCircle(5)); // Easier to reuse, debug

// 2. Functions as Data: assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("VITian"));

// 3. Functions are First-Class Objects: properties & methods
function add(x, y) {
    return x + y;
}
add.description = "Adds two numbers"; // Property assignment
console.log("Function property 'description':", add.description); // Prints: Adds two numbers

// 4. Passing Functions as Parameters
function repeatAction(action, times) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}
repeatAction(index => console.log(`Action at index: ${index}`), 3);

// 5. Higher-order Functions: functions that take other functions or return them
function multiplier(factor) {
    // Returns a new function
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log("Double of 6:", double(6)); // 12

// 6. Assigning Functions to New Variables
const originalFunc = n => n * n;
const aliasFunc = originalFunc;
console.log("Square (using alias):", aliasFunc(7)); // 49

// 7. Functions as Methods in Objects
const calculator = {
    value: 10,
    increment(amount) {
        this.value += amount;
    },
    getValue() {
        return this.value;
    }
};
calculator.increment(5);
console.log("Calculator value:", calculator.getValue()); // 15
