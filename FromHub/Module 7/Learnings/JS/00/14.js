let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[-1]);
console.log(fruits.at(-1));

// ==========================================================

console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 122

let capAndSmallDiff = 32;

yCapital = "y".codePointAt(0) - capAndSmallDiff;
console.log(String.fromCodePoint(yCapital));

// ==========================================================

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];

arr2[0] = 5;

console.log(arr1);
console.log(arr2);

// ==========================================================

console.log(true + true); // 2
console.log(true + false); // 1

// ==========================================================

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
// };

let car = new Object();

car.brand = "Toyota";
car.model = "Corolla";
console.log(car);

for (const [key, value] of Object.entries(car)) {
  console.log(key, " - ", value);
}

let { brand, model } = car; // Destructuring
console.log(brand);
console.log(model);

delete car.model;
console.log(car);

// ==========================================================

const myMap = new Map();

myMap.set(123, "Number");
myMap.set(true, "Boolean");
myMap.set({}, "Object");
myMap.set([], "Array");

console.log(myMap.get(true));

// ==========================================================

const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(20);
numbers.add(30);

console.log(numbers);

// ==========================================================

// Closure Example
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// ==========================================================

// Closure Example
function createAccount(initial = 0) {
  let balance = initial;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) throw Error("Insufficient");
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

// ==========================================================

const colors = ["Red", "Green", "Blue", "Yellow"];

const [first, second, ...third] = colors;

console.log(first); // Red
console.log(second); // Green
console.log(third); // Blue

// ==========================================================

let a = 1;
let b = 2;

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);

// ==========================================================

console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 2000);

console.log("End");
