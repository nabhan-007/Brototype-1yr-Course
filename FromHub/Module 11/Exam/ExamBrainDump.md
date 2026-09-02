# ExamBrainDump: Module - 11 (25/08/2026)

## Not Complete [:(]

## JavaScript

### Theory

- Why is JavaScript considered a dynamically typed programming language?
- Shallow copy vs deep copy

### Practicals

---

## NodeJS

### Theory

### Practicals

```JavaScript
const products = [
    { id: 1, name: "Pen" },
  { id: 2, name: "Book" },
  { id: 1, name: "Pen" },
];

// write an arrow function to remove duplicates based on `id`
// Below code can be improved

const rd = (arr) => {
  let checkedIds = [];
  let result = [];

  for (i in arr) {
    if (!checkedIds.includes(arr[i].id)) {
      result.push(arr[i]);
      checkedIds.push(arr[i].id);
    }
  }
  return result;
};
console.log(rd(products));

```

```JavaScript
// Write an arrow function to bring all zeros to the front of the array
const products = [1, 0, 2, 0, 3];

const rd = (arr) => {
  return arr.reduce((acc, val) => {
    if (val === 0) {
      acc.unshift(val);
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
};
console.log(rd(products));

// Alternative solution
const numbers = [1, 0, 2, 0, 3];

const moveZeros = (arr) => [
  ...arr.filter(num => num === 0), // Grab all the zeros
  ...arr.filter(num => num !== 0)  // Grab everything else
];

console.log(moveZeros(numbers));
```

```JavaScript
// find the sum of two number using `callback functions`

let num1 = 1;
let num2 = 2;

function sum(num1, num2) {
  return num1 + num2;
}

function add(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(add(num1, num2, sum));
```

```JavaScript
// Middleware to print time
// Below is not how I have done it

const express = require("express");
const app = express();

app.use((req, res, next) => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  console.log(time); // the requirement
  req.currentTime = time; // good to know
  next();
});

app.get("/", (req, res) => {
  res.send(`Time: ${req.currentTime}`);
});

app.listen(3000, () => console.log("Server running..."));
```

---

## MongoDB

### Theory

### Practicals
