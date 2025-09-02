// Global variable declared in the global scope (global namespace)
var globalVar = "I'm a global variable";

// Another global variable with the same name to show scope pollution (not recommended)
var globalVar = "I'm overwriting the first global variable";

// Function to demonstrate local/block scope
function scopeExample() {
  // Local variable: only accessible inside this function/block (block scope)
  let localVar = "I'm a local variable";

  // Block statement with its own block-scoped variable
  if (true) {
    const blockVar = "I'm a block-scoped variable inside if block";
    console.log(blockVar); // Accessible here
  }
  // console.log(blockVar); // Error: blockVar is not accessible outside the block

  console.log(localVar); // Accessible inside the function
  console.log(globalVar); // Global variable accessible inside function
}

scopeExample();

console.log(globalVar); // Accessible anywhere globally
// console.log(localVar); // Error: localVar not accessible outside function
// console.log(blockVar); // Error: blockVar not accessible outside if block

// Scope pollution example:
var a = 10;
var a = 20; // Re-declaring 'a' in the global scope overwrites previous value

console.log(a); // Output: 20 (shows pollution due to variable overwriting)

// Good practice: Avoid polluting global namespace by keeping variables scoped locally and with unique names
