# 🧠 Exam Brain Dump: Module 7 — JavaScript Fundamentals

> **Date:** June 18, 2026  
> **Domain:** Web Development using MERN Stack  
> **Result:** Theory 7/10 · Practical 6/10 · Overall 6.5/10 ✅

---

## 📝 Theory Questions

### Q1. What is JavaScript?

> ✅ Answered confidently

JavaScript is a `high-level`, interpreted, `single-threaded` programming language that is `synchronous` by default but `supports asynchronous` programming, widely used to build interactive and dynamic web applications.

---

### Q2. What is meant by `high-level` and `synchronous`?

> ⚠️ Needs revision

- **High-level:** A language that abstracts away hardware details (memory management, CPU registers). You write human-readable code; the engine handles the rest. Contrast with low-level languages like C/Assembly.
- **Synchronous:** Code executes line by line, top to bottom. Each line waits for the previous one to finish before running. JavaScript uses callbacks, promises, and `async/await` to handle asynchronous operations without blocking.

---

### Q3. What is meant by a `Scripting language`?

> ⚠️ Needs revision

A scripting language is a programming language that is interpreted (not compiled ahead of time) and is typically used to automate tasks, manipulate data, or control other software. JavaScript started as a scripting language for browsers but has since evolved into a full-fledged programming language used on both client and server sides.

---

### Q4. What is `DOM` and `DOM Manipulation`?

> ⚠️ Needs revision

- **DOM (Document Object Model):** A tree-like representation of an HTML document created by the browser. Each HTML element becomes a node in this tree.
- **DOM Manipulation:** The process of using JavaScript to dynamically read, add, modify, or remove elements and their attributes from the DOM. Example: `document.getElementById('id').textContent = 'Hello';`

---

### Q5. What are `Primitive` and `Non-Primitive` data types? What is `mutability`?

> ⚠️ Needs revision

- **Primitive:** Immutable, stored by value. Types: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.
- **Non-Primitive:** Mutable, stored by reference. Types: `object`, `array`, `function`.
- **Mutability:** The ability to change a value after it's created. Non-primitive types are mutable because you modify the contents at the same memory reference (e.g., `arr.push(4)` changes the original array).

---

### Q6. What is `Hoisting` and how do `var`, `let`, and `const` react?

> ⚠️ Needs revision

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase.

| Declaration | Hoisted? | Initialized?      | Accessible before declaration? |
| ----------- | -------- | ----------------- | ------------------------------ |
| `var`       | ✅ Yes   | ✅ As `undefined` | Yes (returns `undefined`)      |
| `let`       | ✅ Yes   | ❌ No             | ❌ No (`ReferenceError` — TDZ) |
| `const`     | ✅ Yes   | ❌ No             | ❌ No (`ReferenceError` — TDZ) |

> **TDZ** = Temporal Dead Zone: the period between entering the scope and the declaration being reached.

---

### Q7. What is a `Higher-Order Function`? What are `Function Statements` vs `Function Expressions`?

> ⚠️ Partially answered — flagged as pending

- **Higher-Order Function:** A function that either (a) takes another function as an argument, or (b) returns a function. Examples: `map()`, `filter()`, `reduce()`.

- **Function Statement (Declaration):**

  ```javascript
  function greet() {
    return "Hello";
  }
  // ✅ Hoisted — can be called before it's defined
  ```

- **Function Expression:**

  ```javascript
  const greet = function () {
    return "Hello";
  };
  // ❌ NOT hoisted — calling before definition throws an error
  ```

---

### Q8. What is the relationship between `Hoisting` and `Execution Context`?

> ❌ Could not answer — flagged as pending

During the **creation phase** of an Execution Context, the JS engine scans the code and:

1. Allocates memory for variables (`var` → `undefined`, `let`/`const` → uninitialized).
2. Stores entire function declarations in memory.

This is why hoisting works — the memory allocation happens _before_ any code runs. Hoisting is literally a side effect of how Execution Contexts are created.

---

### Q9. What is `Execution Context` and `Call Stack`?

> ❌ Could not answer — flagged as pending

- **Execution Context:** The environment in which JavaScript code is evaluated and executed. It contains: the Variable Environment, Scope Chain, and `this` binding. Every function call creates a new Execution Context.
- **Call Stack:** A LIFO (Last In, First Out) data structure that keeps track of Execution Contexts. When a function is called, its context is pushed onto the stack. When it returns, it's popped off.

---

---

## 💻 Practical Questions

### P1. Ternary Operator — Largest of 2 numbers

> ✅ Solved

```javascript
let a = 1,
  b = 2;

let largest = a > b ? a : b;
console.log(largest);
```

---

### P2. Ternary Operator — Largest of 3 numbers (one line)

> ✅ Solved — follow-up to P1

```javascript
let a = 1,
  b = 2,
  c = 3;

let largest = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(largest);
```

---

### P3. Arrow Function — Basic sum

> ✅ Solved

```javascript
const sum = (a, b) => a + b;

console.log(sum(6, 7));
```

---

### P4. Arrow Function — Sum of `n` parameters

> ⚠️ Solved with `for...of`, but the `reduce` version had a bug

**My answer during the exam (using `for...of`):**

```javascript
const sum = (...n) => {
  let total = 0;
  for (const num of n) {
    total += num;
  }
  return total;
};
```

**Corrected `reduce` version:**

```javascript
// ❌ ORIGINAL (had a bug: used `args` instead of `n`)
// const sum = (...n) => args.reduce((acc, n) => acc + n, 0);

// ✅ FIXED
const sum = (...n) => n.reduce((acc, val) => acc + val, 0);
// Also: the inner parameter was named `n` which shadowed the rest param — renamed to `val`
```

---

### P5. Remove duplicates from an Array — Using `Set`

> ✅ Solved

```javascript
let arr = [1, 2, 2, 3, 3];

let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
```

---

### P6. Remove duplicates — Using `filter`

> ✅ Solved — follow-up to P5

```javascript
let arr = [1, 2, 2, 3, 3];

let uniqueArr = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(uniqueArr);
```

---

### P7. Remove duplicates — Using `reduce`

> ⚠️ Struggled — flagged as pending topic

```javascript
let arr = [1, 2, 2, 3, 3];

let uniqueArr = arr.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);

console.log(uniqueArr);
```

---

### P8. Merge two Objects using spread

> ✅ Solved — but code had a variable name typo

```javascript
let obj1 = { a: 1, b: 2, d: 3 };
let obj2 = { b: 3, c: 4 };

// ❌ ORIGINAL (used `first` & `second` instead of `obj1` & `obj2`)
// let obj3 = { ...first, ...second };

// ✅ FIXED
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 3, c: 4, d: 3 }
```

> **Examiner's follow-up:** "Before running this, what would `b` be in `obj3`?"  
> **Answer:** `3` — because the later spread overwrites the earlier key.

---

### P9. Delete a key from an Object

> ✅ Solved — follow-up to P8

```javascript
let obj1 = { a: 1, b: 2, d: 3 };
let obj2 = { b: 3, c: 4 };

let obj3 = { ...obj1, ...obj2 };

delete obj3.b;

console.log(obj3); // { a: 1, c: 4, d: 3 }
```

---

---

## 📊 Self-Assessment Summary

| #   | Question                                  | Type      | Result                   |
| --- | ----------------------------------------- | --------- | ------------------------ |
| Q1  | What is JavaScript?                       | Theory    | ✅ Confident             |
| Q2  | High-level & Synchronous                  | Theory    | ⚠️ Shaky                 |
| Q3  | Scripting language                        | Theory    | ⚠️ Shaky                 |
| Q4  | DOM & DOM Manipulation                    | Theory    | ⚠️ Shaky                 |
| Q5  | Primitive vs Non-Primitive & Mutability   | Theory    | ⚠️ Shaky                 |
| Q6  | Hoisting with var, let, const             | Theory    | ⚠️ Shaky                 |
| Q7  | Higher-Order Functions & Function types   | Theory    | ⚠️ Partial               |
| Q8  | Hoisting & Execution Context relationship | Theory    | ❌ Couldn't answer       |
| Q9  | Execution Context & Call Stack            | Theory    | ❌ Couldn't answer       |
| P1  | Ternary — largest of 2                    | Practical | ✅ Solved                |
| P2  | Ternary — largest of 3                    | Practical | ✅ Solved                |
| P3  | Arrow function — basic                    | Practical | ✅ Solved                |
| P4  | Arrow function — n params                 | Practical | ⚠️ Bug in reduce version |
| P5  | Remove duplicates — Set                   | Practical | ✅ Solved                |
| P6  | Remove duplicates — filter                | Practical | ✅ Solved                |
| P7  | Remove duplicates — reduce                | Practical | ⚠️ Struggled             |
| P8  | Merge objects — spread                    | Practical | ✅ Solved (typo fixed)   |
| P9  | Delete object key                         | Practical | ✅ Solved                |

---

## 🔑 Key Takeaways

1. **Practical coding is strong** — you solved most problems on the spot.
2. **Theory definitions are the weak link** — you know _how_ to use things but struggle to _explain_ them.
3. **`reduce()` needs dedicated practice** — it came up twice and was shaky both times.
4. **Execution Context & Call Stack** are fundamental to understanding JS internals — prioritize learning these.
5. **Watch for variable name typos** — the `args` vs `n` bug and `first`/`second` vs `obj1`/`obj2` would have caused runtime errors.
