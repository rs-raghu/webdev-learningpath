// 1. Variables hold reusable data in a program and associate it with a name.
var oldVar = 10;

// 2. Variables are stored in memory (implicitly shown by variable declaration).
let number = 20;
const PI = 3.14;

// 3. The var keyword is used in pre-ES6 versions of JS.
var legacy = "Pre-ES6 variable";

// 4. let is the preferred way to declare a variable that can be reassigned.
let color = "red";
color = "blue";

// 5. const is the preferred way to declare a variable with a constant value.
const gravity = 9.8;
// gravity = 10; // This line would cause an error

// 6. Variables that have not been initialized store the primitive data type undefined.
let notInitialized;
console.log(notInitialized); // undefined

// 7. Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
let count = 5;
count += 3; // count = count + 3
count *= 2; // count = count * 2

// 8. The + operator is used to concatenate strings, including string values held in variables.
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "Jane Doe"

// 9. In ES6, template literals use backticks and ${} to interpolate values into a string.
let greeting = `Hello, ${fullName}. You have ${count} new messages.`;

// 10. The typeof keyword returns the data type (as a string) of a value.
console.log(typeof PI);           // "number"
console.log(typeof fullName);     // "string"
console.log(typeof notInitialized);  // "undefined"

// Output all results for demonstration
console.log(oldVar);
console.log(number);
console.log(legacy);
console.log(color);
console.log(gravity);
console.log(count);
console.log(fullName);
console.log(greeting);
