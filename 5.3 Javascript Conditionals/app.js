// 1. if statement checks a condition and runs a task if true
let score = 85;
if (score >= 80) {
  console.log("Score is high!"); // Executes because condition is true
}

// 2. if...else statements make binary decisions
let passed = false;
if (passed) {
  console.log("You passed!");
} else {
  console.log("You failed."); // Executes because passed is false
}

// 3. else if statements add more conditions
let rating = 3;
if (rating <= 2) {
  console.log("Bad rating");
} else if (rating >= 4) {
  console.log("Great rating");
} else {
  console.log("Average rating"); // Executes because rating is 3
}

// 4. Comparison operators: <, >, <=, >=, ===, !==
let a = 7, b = 5;
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= 7); // true
console.log(a !== 5); // true
console.log(a === 7); // true

// 5. Logical and (&&) checks if BOTH expressions are true
let age = 22;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("Access granted."); // Executes: both conditions true
}

// 6. Logical or (||) checks if EITHER expression is true
let isVIP = false;
if (age >= 65 || isVIP) {
  console.log("Eligible for senior/VIP benefits.");
}

// 7. Bang operator (!) switches the truthiness/falsiness
let isClosed = false;
if (!isClosed) {
  console.log("We're open!"); // Executes because bang (!) makes false into true
}

// 8. Ternary operator simplifies concise if...else
let temp = 20;
let weather = temp > 25 ? "warm" : "cool";
console.log("Today is", weather); // "Today is cool"

// 9. switch statement for multiple matching conditions, with break keyword
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("Apple pie!");
    break;
  case "banana":
    console.log("Banana bread!"); // Executes
    break;
  case "cherry":
    console.log("Cherry tart!");
    break;
  default:
    console.log("Fruit not recognized.");
}
