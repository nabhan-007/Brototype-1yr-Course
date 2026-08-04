# ExamBrainDump: Module - 8 (29/06/2026)

## Theory

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `Object.seal()` and `Object.freeze()`? What is the difference between them?
- How do you check if an object is sealed or frozen?
- What is `Deep freeze` and how is it different from a shallow freeze?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `hoisting`?
- What is the difference between `function statements` and `function expressions`, and how does each behave when hoisted?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is a `callback`? What is `callback hell`?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Is chaining (nesting) possible with the ternary operator?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `optional chaining` (`?.`) and when would you use it?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What are `rest` and `spread` operators? How do they differ?
- What is `destructuring` and how does it work with arrays and objects?
- What are `Enhanced Object Literals`?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What are `async` and `await`? How do they work?
- How do you pause and resume a function's execution using `yield` and generators?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is `inheritance`? Is multiple inheritance possible in JavaScript?

</div>

<hr style="border: 2px solid #888; border-radius: 6px">

## Practicals

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// What will be the output? (Logical OR vs Nullish Coalescing)

let a = 0 || 100
let b = 0 ?? 100

console.log(a, b)
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// What will be the output? (Spread operator with arrays)

let arr = [1, 2]
let newArr = [...arr, ...arr];
console.log(newArr)
```

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Find the largest number from the given array using reduce

const nums = [5, 12, 4, 20, 9];
```

```JavaScript
// Count the number of occurrences of `apple` in the given array using reduce

const fruits = ["apple", "banana", "apple", "orange", "banana"];
```

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Create two files `A.js` and `B.js` with the following code in each
export const value = 10; // A.js
export const value = 20; // B.js

// Now import these both to `main.js` and print both values
```

</div>
