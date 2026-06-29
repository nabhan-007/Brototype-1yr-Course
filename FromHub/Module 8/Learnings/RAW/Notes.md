# JavaScript

## Execution Context

- It has two components: `Memory` and `Code`.
- Two phases: `Creation` and `Execution`.
- In creation phase: value `undefined` is assigned for variables and the whole function in-case of functions (`hoisting`).
- When a function is invoked with `()` then, a new `EC` is created. And when that function finishes, that partiular `EC` is deleted. And when all the functions and others are done, the `GEC` is deleted.

> In a function `sum(a, b)`; `a` and `b` are parameters and the actual values that gets sent are `arguments`. Eg: sum(6, 7) ; Here, 6 and 7 are arguments.

## Call Stack

- AKA:
  - Execution Context Stack
  - Program Stack
  - Control Stack
  - Runtime Stack
  - Machine Stack
- Startig is `GEC`
- Follows `LIFO`

## Scope

- In the following code, the `x` is declared again in the each function and thus it's memory is limited to that function.

  ```JavaScript
  let x = 1;

  A();
  B();

  console.log(x);

  function A() {
  let x = 10;
  console.log(x);
  }

  function B() {
  let x = 100;
  console.log(x);
  }

  // 10
  // 100
  // 1
  ```

- What is Lexical Scope?
  > (Search for answer)

## Scope Chain

_Definition_: The scope chain is the ordered list of lexical environments JavaScript uses to resolve an identifier. When code references a variable, the engine looks first in the current (innermost) scope, then up through each outer (enclosing) scope, and finally in the global scope.

## Closure

> (definition)

## Function

- `Function Statement`(AKA `function declaration`): It is the classic, named way to define a reusable block of code in JavaScript.

- `Function Expression`: A function expression is a function created inside an expression and usually `stored in a variable` or passed as a value. It can be anonymous or named and behaves like any other value you assign or pass around.

- Main difference between the above two is regarding it's hoisting. i.e, only function statement works properly.

- `First Class Functions`: A first‑class function is a function `treated like any other value`, you can assign it to variables, pass it as an argument, return it from another function, and store it in data structures. (❌ Not clear: Higher order function is a part of this.)

## Event Loop

> Refer NoteBook

## Functional Programming

- DRY Principle (Don't Repeat Yourself)
- Programming paradigm where we write code in such a way that it describes the result and not the approach.

## Promises

- A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.
- PromiseStates: [`pending`, `fulfilled`, `rejected`].

## Async/Await

- Uses the `async` and `awiat` keyword.
- Always returns a promise. If you returned some other data then, it will be wrapped in promise automatically.

```JavaScript
async function hw() {
  return "Hello World";
}

const data = hw();
data.then((res) => console.log(res));
```

## Promise APIs

- In `promise.all()`; it waits for all to finish. But, if one of the promises gets rejected then, it will immediately throw an error for that particular promoise neither affecting nor waiting for others.
- `promise.allSettled()`: Wait and show all at the end, regardless of whether one error.
- `promise.race()`: The frist one to settle regardless of whether it's resolved or error. returns one.
- `promise.any()`: Waites for the first resolve and returns one. If all fail then, an `AggregateError` is returned.

## Others

- where ever an execution context is created; a `this` keyword is created for it. Even for the functional execution context. In case of `GEC` : `this ==== window`

- `Undefind` and `Not Defind (RefernceError)` : Both different.
