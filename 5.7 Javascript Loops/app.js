// Loops perform repetitive actions, so we don’t have to code that process manually every time.

// 1. For loop with an iterator variable that increments
console.log("For loop with increment:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. For loop with an iterator variable that decrements
console.log("For loop with decrement:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 3. For loop to iterate through an array
const fruits = ["apple", "banana", "cherry"];
console.log("For loop iterating through an array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 4. Nested for loop (a loop inside another loop)
console.log("Nested for loop:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i =", i, "j =", j);
  }
}

// 5. While loop allowing different types of stopping conditions
console.log("While loop with a stopping condition:");
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// 6. Importance of stopping conditions (avoiding infinite loops)
// Example here already avoids infinite loop by incrementing count.

// 7. do...while loop - runs code at least once, then checks condition
console.log("do...while loop:");
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);

// 8. Using break to leave a loop during execution
console.log("Loop with break:");
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    console.log("Breaking loop at i =", i);
    break;
  }
  console.log(i);
}
