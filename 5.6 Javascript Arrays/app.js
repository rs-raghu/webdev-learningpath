// 1. Array creation with []
let myArray = ['apple', 'banana', 'cherry'];

// 2. Accessing elements by index (index starts at 0)
console.log(myArray); // 'apple'

// 3. Changing an item by index
myArray = 'blueberry';
console.log(myArray); // ['apple', 'blueberry', 'cherry']

// 4. Checking the length property
console.log(myArray.length); // 3

// 5. Using .push() to add an item
myArray.push('date');
console.log(myArray); // ['apple', 'blueberry', 'cherry', 'date']

// 6. Using .pop() to remove the last item
myArray.pop();
console.log(myArray); // ['apple', 'blueberry', 'cherry']

// 7. Using .slice() (not mutating)
let slicedArray = myArray.slice(1, 3);
console.log(slicedArray); // ['blueberry', 'cherry']
console.log(myArray); // still ['apple', 'blueberry', 'cherry']

// 8. Using .shift() to remove the first item (mutating)
myArray.shift();
console.log(myArray); // ['blueberry', 'cherry']

// 9. Declaring arrays with const
const constArray = [1, 2, 3];
constArray.push(4); // Allowed: we are mutating, not reassiging
console.log(constArray); // [1, 2, 3, 4]
// constArray = [5, 6, 7]; // Not allowed: reassignment throws error

// 10. Arrays mutated inside a function keep changes
function mutateArr(arr) {
  arr = 'changed';
}

mutateArr(myArray);
console.log(myArray); // ['changed', 'cherry']

// 11. Nested arrays (arrays of arrays)
let nestedArray = [[1, 2], [3, 4], [5, 6]];
// Accessing nested array and element
console.log(nestedArray); // 3

// 12. Chaining indices to access deeper elements
let deepNestedArray = [[[10, 11]], [[12, 13]]];
console.log(deepNestedArray); // 11
