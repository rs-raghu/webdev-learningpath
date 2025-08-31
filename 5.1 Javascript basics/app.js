// Print data to the console
console.log("Hello, Console!");

// Single-line comment: This is a single-line comment

/*
Multi-line comment:
This comment spans
multiple lines.
*/

// Numbers (any number without quotes)
let myNumber = 23.8879;
console.log("Number:", myNumber);

// BigInt (for large integers)
let bigIntNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntNumber);

// Strings (characters wrapped in quotes)
let myString = 'Sample String';
console.log("String:", myString);

// Booleans (true or false values)
let isTrue = true;
console.log("Boolean:", isTrue);

// Null (explicitly no value)
let myNull = null;
console.log("Null:", myNull);

// Undefined (value not assigned)
let myUndefined;
console.log("Undefined:", myUndefined);

// Symbols (unique values)
let mySymbol = Symbol('unique');
console.log("Symbol:", mySymbol);

// Objects (grouping values and functions)
let myObject = {
  name: "Sample Object",
  value: 42
};
console.log("Object:", myObject);

// Arithmetic operators (+, -, *, /, %)
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 5 - 3);
console.log("Multiplication:", 5 * 3);
console.log("Division:", 5 / 3);
console.log("Modulus:", 5 % 3);

// Properties of objects and data types
console.log("'Hello'.length:", 'Hello'.length); // Property: length

// Methods of objects and data types
console.log("'hello'.toUpperCase():", 'hello'.toUpperCase()); // Method: toUpperCase

// Accessing properties and methods using dot operator
let sampleText = "JavaScript";
console.log("Character count:", sampleText.length); // property
console.log("Uppercase:", sampleText.toUpperCase()); // method

// Built-in objects: Math and Number
console.log("Math.PI:", Math.PI); // Math object property
console.log("Math.floor(4.7):", Math.floor(4.7)); // Math object method
console.log("Number.isInteger(10):", Number.isInteger(10)); // Number object method
