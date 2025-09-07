// Objects store collections of key-value pairs.
const person = {
  // Key-value pairs (properties)
  name: "Alice",
  age: 30,
  
  // Method - property that is a function (ES6 syntax)
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing properties using dot notation and bracket notation
console.log("Name (dot notation):", person.name);
console.log("Age (bracket notation):", person["age"]);

// Adding a new property
person.city = "New York";
console.log("Added city:", person.city);

// Editing a property
person.age = 31;
console.log("Edited age:", person.age);

// Adding methods - anonymous function expression syntax
person.sayGoodbye = function() {
  console.log("Goodbye!");
};
person.sayGoodbye();

// Navigating complex nested objects
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    zip: "94101"
  },
  employees: ["Alice", "Bob", "Charlie"]
};
console.log("Company city:", company.address.city);

// Objects are mutable even when declared with const
const car = {
  brand: "Toyota",
  model: "Camry"
};
car.model = "Corolla";  // Allowed
console.log("Edited car model:", car.model);

// Objects passed by reference - changes inside functions persist
function updatePersonAge(obj) {
  obj.age = 35;
}
console.log("Age before function call:", person.age);
updatePersonAge(person);
console.log("Age after function call:", person.age);

// Iterating through objects using for...in
console.log("Iterating through person properties:")
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}
