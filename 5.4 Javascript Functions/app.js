// Function Declaration with parameter and default parameter
function greet(name = "Guest") {
  // Statement: Variable assignment
  let message = "Hello, " + name + "!";
  // Statement: Return statement
  return message;
}

// Call the function with and without argument
console.log(greet("Alice"));    // Output: Hello, Alice!
console.log(greet());           // Output: Hello, Guest!

// Function Expression
const add = function(x, y) {
  // Statement: Arithmetic operation and return
  return x + y;
};
console.log(add(2, 3));         // Output: 5

// Arrow Function Notation
const multiply = (a, b = 1) => {
  return a * b;
};
console.log(multiply(4, 6));    // Output: 24
console.log(multiply(5));       // Output: 5

// Concise Arrow Function (single-line return)
const square = n => n * n;
console.log(square(7));         // Output: 49
