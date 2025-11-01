const numbers = [3, 10, 18, 20];

// .forEach(): Executes a function on every array element, returns undefined
numbers.forEach((num, idx) => {
    console.log(`Element at index ${idx}: ${num}`);
});
// Output: Element at index 0: 3 ... (and so on)

// .map(): Returns a new array with transformed elements
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // Output: [9, 100, 324, 400]

// .filter(): Returns a new array with elements that pass a test
const aboveTen = numbers.filter(num => num > 10);
console.log("Above ten:", aboveTen); // Output: [18, 20]

// .findIndex(): Returns index of first matching element, or -1 if none found
const firstAboveEighteenIdx = numbers.findIndex(num => num > 18);
console.log("First index with value > 18:", firstAboveEighteenIdx); // Output: 2

// .reduce(): Returns a single value after reducing array elements with a function
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: 51
