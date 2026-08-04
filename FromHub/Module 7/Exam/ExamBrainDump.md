# ExamBrainDump: Module - 7 (18/06/2026)

## Theory

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is JavaScript?<br><br>
  JavaScript is a `high-level`, interpreted, `single-threaded` programming language that is `synchronous` by default but `supports asynchronous` programming, widely used to build interactive and dynamic web applications.

- What is meant by `high-level` and `synchronous` ?

- What is meant by a `Scripting language`?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `DOM` and `DOM Manipulation`?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `Primitive` and `Non-Primitive` data types?
- What is `mutability` and how `Non-Primitive` data types are `mutated`?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `Hoisting` and how each `declaration (var, let and const)` reacts?

- what is the relationship between `hoisting` and `execution context`?

- What is `execution context` and `call stack`?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `higher order function`?
- what is `function as statements` and `function as expressions`?

</div>

<hr style="border: 2px solid #888; border-radius: 6px">

## Practicals

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Using ternary operator find the largest between 2 numbers

let a = 1, b = 2;

let largest = (a > b) ? a : b;
console.log(largest);
```

```JavaScript
// Now, using ternary operator find the largest between 3 numbers (one line)

let a = 1, b = 2, c = 3;

let largest = (a > b)
                ? (a > c ? a : c)
                : (b > c ? b : c);
console.log(largest);
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Write an example for an arrow function

const sum = (a, b) => a + b;

console.log(sum(6, 7));
```

```JavaScript
// Modify the arrow function to take `n` parameters

// `acc`: Accumulator
const sum = (...n) => n.reduce((acc, val) => acc + val, 0);

// I solved this using `for...of` loop
const sum = (...n) => {
  let total = 0;
  for (const num of n) {
    total += num;
  }
  return total;
};
```

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Initialize an Array with duplicates and remove the duplicates

let arr = [1, 2, 2, 3, 3];

let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
```

```JavaScript
// Now, remove the duplicates using the array method `filter`

let arr = [1, 2, 2, 3, 3];

let uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(uniqueArr);
```

```JavaScript
// Now, remove the duplicates using the array method `reduce`

let arr = [1, 2, 2, 3, 3];

let uniqueArr = arr.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);

console.log(uniqueArr);
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Reviewer gave me these two objects

let obj1 = { a: 1, b: 2, d: 3 };
let obj2 = { b: 3, c: 4 };
```

```JavaScript
// Combine these two objects into one

let obj1 = { a: 1, b: 2, d: 3 };
let obj2 = { b: 3, c: 4 };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Before letting me execute the code, I was asked what would be the value of `b` in `obj3`
// It is `3`. Because, the later one over-writes the old.
```

```JavaScript
// delete the `key` - `b` from `obj3`

let obj1 = { a: 1, b: 2, d: 3 };
let obj2 = { b: 3, c: 4 };

let obj3 = { ...obj1, ...obj2 };

delete obj3.b;

console.log(obj3);
```

</div>
