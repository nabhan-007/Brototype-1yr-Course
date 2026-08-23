# JavaScript Study Guide — Module 11 Exam

> 58 topics compiled from 12 months of examiner questions across 10+ students.
> Format: 2-3 line answer + code example + doc URL.
> Priority: 🔴 High (asked 4-8x) | 🟡 Medium (2-3x) | 🟢 Low (1-2x)

---

## 🔴 High Priority (13 topics)

### 1. Event Propagation (Capture → Target → Bubble)

Events flow through three phases: **capture** (root → target), **target** (on the element), then **bubble** (target → root). By default, handlers run in the bubble phase. Use `addEventListener` with 3rd arg `true` for capture.

```js
parent.addEventListener('click', () => console.log('parent'), true);  // capture
child.addEventListener('click', () => console.log('child'));           // bubble
// Click child → "parent" then "child"
```

`event.stopPropagation()` stops the flow. `event.stopImmediatePropagation()` stops other handlers on same element.

Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

---

### 2. Event Handlers vs Event Listeners

| | Event Handler | Event Listener |
|---|---|---|
| **Syntax** | `el.onclick = fn` | `el.addEventListener('click', fn)` |
| **Multiple** | Only ONE per event | Unlimited per event |
| **Removal** | `el.onclick = null` | `el.removeEventListener('click', fn)` |
| **Phase** | Bubble only | Capture or bubble |

```js
el.onclick = () => console.log('A');  // overwritten by next assignment
el.onclick = () => console.log('B');  // only B fires

el.addEventListener('click', () => console.log('A'));
el.addEventListener('click', () => console.log('B'));  // both fire
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

---

### 3. Arrow Function vs Regular Function

Five key differences:
1. **`this`**: Arrow inherits from enclosing scope (lexical). Regular gets `this` from caller.
2. **`arguments`**: Arrow has no `arguments` object. Regular does.
3. **`new`**: Arrow cannot be used as constructor. Regular can.
4. **`prototype`**: Arrow has no `prototype` property.
5. **Hoisting**: Neither is hoisted (both are expressions when assigned to variables).

```js
const obj = {
  name: 'Alice',
  regular() { console.log(this.name); },     // "Alice"
  arrow: () => { console.log(this.name); },  // undefined (inherits global/window)
};
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

---

### 4. Closure (Applications)

A closure is a function that **remembers the variables** from its outer scope even after the outer function has returned.

```js
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}
const c = counter();
c.increment(); c.increment();
c.getCount(); // 2
```

**Applications**: data privacy, function factories, memoization, event handlers, partial application, module pattern.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

---

### 5. Promise Methods

```js
Promise.all([p1, p2, p3])         // resolves when ALL resolve; rejects on first reject
Promise.allSettled([p1, p2, p3])  // always resolves; returns {status: 'fulfilled'|'rejected'}[]
Promise.race([p1, p2, p3])        // resolves/rejects with FIRST settled
Promise.any([p1, p2, p3])         // resolves with FIRST fulfilled; rejects only if ALL reject
```

```js
const p1 = Promise.resolve(1);
const p2 = Promise.reject('err');
Promise.allSettled([p1, p2]);
// [{status:'fulfilled', value:1}, {status:'rejected', reason:'err'}]
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

---

### 6. Async/Await

`async` function always returns a Promise. `await` pauses execution until a Promise settles. Errors caught with `try/catch`.

```js
async function fetchUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  } catch (err) {
    console.error('Failed:', err.message);
  }
}
```

**vs `.then()`**: Async/await is syntactic sugar — easier to read, debug, and handle sequential async operations. Under the hood, same microtask queue.

Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

---

### 7. Destructuring (Nested)

Extract values from nested objects/arrays in one line.

```js
const user = { name: 'Ali', address: { city: 'Riyadh', zip: '12345' } };

// Nested object destructuring
const { name, address: { city, zip } } = user;
// name='Ali', city='Riyadh', zip='12345'

// Default values
const { name: n, phone = 'N/A' } = user;  // phone = 'N/A'

// Array destructuring
const [first, , third] = [10, 20, 30];  // first=10, third=30

// Function parameter destructuring
function greet({ name, address: { city } }) {
  console.log(`${name} from ${city}`);
}
greet(user); // "Ali from Riyadh"
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

---

### 8. Prototype / Prototype Chaining

Every object has an internal `[[Prototype]]` link. When a property isn't found on an object, JS walks up the **prototype chain** until it finds it or reaches `null`.

```js
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return `${this.name} speaks`; };

const dog = new Animal('Rex');
dog.speak();                    // "Rex speaks" (found on prototype)
dog.constructor === Animal;     // true
Object.getPrototypeOf(dog) === Animal.prototype; // true
```

`Object.create(proto)` creates an object with a specific prototype.

Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

---

### 9. Class / OOP (Encapsulation, Polymorphism)

```js
class Shape {
  #color; // private field
  constructor(color) { this.#color = color; }
  get color() { return this.#color; }       // encapsulation via getter
  area() { return 0; }                       // base method
  describe() { return `${this.#color} shape, area: ${this.area()}`; }
}

class Circle extends Shape {
  #radius;
  constructor(color, radius) { super(color); this.#radius = radius; }
  area() { return Math.PI * this.#radius ** 2; } // polymorphism
}

const c = new Circle('red', 5);
c.area();        // ~78.54 (Circle's version)
c.describe();    // "red shape, area: ~78.54"
```

- **Encapsulation**: `#private` fields + getters/setters
- **Polymorphism**: same method name, different behavior in subclasses
- **Inheritance**: `extends` + `super()`

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

---

### 10. Function Borrowing (call, apply, bind)

Use one function on a different object's context.

```js
const greet = function(greeting) { return `${greeting}, ${this.name}`; };
const user = { name: 'Sara' };

greet.call(user, 'Hello');              // "Hello, Sara" (immediate, args individually)
greet.apply(user, ['Hello']);            // "Hello, Sara" (immediate, args as array)
const borrowed = greet.bind(user);       // returns new function, `this` locked
borrowed('Hello');                       // "Hello, Sara"
```

**When to use**: borrowing Array methods (`Array.prototype.forEach.call`), partial application with `bind`, callback context fixing.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

---

### 11. Timer Functions (setTimeout, setInterval, clearInterval)

```js
// setTimeout: execute once after delay
const id = setTimeout(() => console.log('done'), 1000);
clearTimeout(id); // cancel

// setInterval: execute repeatedly
const intervalId = setInterval(() => console.log('tick'), 1000);
clearInterval(intervalId); // stop

// Important: setTimeout/setInterval are macrotasks
// They do NOT block execution — code after them runs immediately
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
// Output: A, C, B  (setTimeout callback is macrotask, runs after current call stack)
```

**Countdown timer practical:**
```js
let count = 10;
const timer = setInterval(() => {
  console.log(count);
  if (count === 0) clearInterval(timer);
  count--;
}, 1000);
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

---

### 12. Pure Functions & Side Effects

A **pure function**: same input → same output, no side effects.

```js
// Pure
const add = (a, b) => a + b;

// Impure (depends on external state)
let tax = 0.1;
const calculateTotal = (price) => price + price * tax;  // changes if tax changes

// Impure (mutates external state)
const users = [];
const addUser = (user) => { users.push(user); }; // side effect: mutates users array
```

**Side effects**: modifying outer variables, DOM, network calls, console.log, Math.random().

**Why it matters**: testable, predictable, no hidden dependencies.

Docs: https://developer.mozilla.org/en-US/docs/Glossary/Pure_function

---

### 13. Event Loop & Code Execution Order

Three queues: **Call Stack** → **Microtask Queue** → **Macrotask Queue**.

Execution order per tick:
1. Run everything in call stack
2. Drain ALL microtasks (Promises, `queueMicrotask`, `MutationObserver`)
3. Run ONE macrotask (setTimeout, setInterval, I/O)
4. Repeat

```js
console.log('1');                          // sync (call stack)
setTimeout(() => console.log('2'), 0);     // macrotask
Promise.resolve().then(() => console.log('3')); // microtask
console.log('4');                          // sync

// Output: 1, 4, 3, 2
```

**Key rule**: Microtasks ALWAYS before macrotasks. All microtasks drain before next macrotask.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop

---

## 🟡 Medium Priority (20 topics)

### 14. Generator Functions

Functions that can **pause and resume** using `yield`. Returns an iterator.

```js
function* countTo(n) {
  for (let i = 1; i <= n; i++) yield i;
}
const gen = countTo(3);
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }
```

**Use cases**: lazy evaluation, infinite sequences, async workflows, iterable protocols.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

---

### 15. Proxy Object

Intercepts and customizes operations on objects (get, set, delete, etc.).

```js
const handler = {
  get(target, prop) {
    console.log(`Accessing ${prop}`);
    return prop in target ? target[prop] : 'Property not found';
  },
  set(target, prop, value) {
    if (typeof value !== 'number') throw new TypeError('Only numbers allowed');
    target[prop] = value;
    return true;
  }
};

const nums = new Proxy({}, handler);
nums.x = 10;       // OK
// nums.y = 'hi';  // TypeError
console.log(nums.x);  // "Accessing x" → 10
console.log(nums.z);  // "Accessing z" → "Property not found"
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

---

### 16. Memoization

Cache function results based on arguments to avoid recomputation.

```js
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize((n) => n <= 1 ? 1 : n * factorial(n - 1));
factorial(5); // computed
factorial(5); // cached (instant)
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

---

### 17. Currying

Transform a multi-arg function into a chain of single-arg functions.

```js
// Manual currying
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
multiply(3)(4); // 12

// Generic curry helper
const curry = (fn) => {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length >= arity) return fn(...args);
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}

const add = curry((a, b, c) => a + b + c);
add(1)(2)(3);     // 6
add(1, 2)(3);     // 6
```

Docs: https://developer.mozilla.org/en-US/docs/Glossary/Currying

---

### 18. Debouncing vs Throttling

Both control function execution rate, but differently:

| | Debounce | Throttle |
|---|---|---|
| **When** | After user STOPS action | During user action at fixed interval |
| **Use case** | Search input, form validation | Scroll events, resize |
| **Behavior** | Resets timer each call | Runs once per interval |

```js
// Debounce: wait until pause
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Throttle: run at most once per interval
function throttle(fn, interval) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
}
```

Docs: https://developer.mozilla.org/en-US/docs/Glossary/Debounce

---

### 19. Variable Shadowing & TDZ

**Shadowing**: inner variable blocks outer of same name.
```js
let x = 10;
{
  let x = 20; // shadows outer x — ILLEGAL in `let` if same scope
  console.log(x); // 20
}
console.log(x); // 10

function demo(x) {
  let x = 5; // SyntaxError: can't re-declare block-scoped variable
}
```

**Temporal Dead Zone**: `let`/`const` are hoisted but inaccessible before declaration.
```js
console.log(a); // ReferenceError (TDZ)
let a = 5;

console.log(b); // undefined (var is hoisted and initialized)
var b = 5;
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone

---

### 20. Shallow Copy vs Deep Copy vs Spread

**Shallow copy**: copies one level deep. Nested objects still reference original.
```js
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };           // spread (shallow)
const shallow2 = Object.assign({}, original);

shallow.nested.b = 99;
original.nested.b; // 99 — shared reference!
```

**Deep copy**: independent copy at all levels.
```js
const deep = structuredClone(original);     // modern (preferred)
const deep2 = JSON.parse(JSON.stringify(original)); // older (loses functions/dates)
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

---

### 21. Pass by Value vs Pass by Reference

**Primitives** (string, number, boolean, null, undefined, symbol, bigint): passed by VALUE. Copying creates independent copy.
```js
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)
```

**Objects** (including arrays, functions): passed by REFERENCE (reference is copied by value).
```js
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;
console.log(obj1.x); // 99 (both point to same object)
```

Note: JavaScript is strictly "pass by value" — but the value of an object variable is the reference.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

---

### 22. Nullish Operator (??) & Optional Chaining (?.)

**Nullish coalescing** (`??`): default value only for `null`/`undefined` (NOT `''` or `0`).
```js
const input = '';
input || 'default';  // 'default' (falsy!)
input ?? 'default';  // '' (nullish only)

0 || 'default';  // 'default'
0 ?? 'default';  // 0
```

**Optional chaining** (`?.`): safely access nested properties.
```js
const user = { address: { city: 'Riyadh' } };
user?.address?.city;       // 'Riyadh'
user?.phone?.number;       // undefined (no error)
user?.address?.zip?.code;  // undefined
arr?.[0]?.name;            // safe array access
fn?.();                    // safe function call
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

---

### 23. Rest Parameter & Spread Operator

**Rest** (`...args`): collects remaining arguments into an array.
```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3); // 6

// Must be LAST parameter
function log(prefix, ...messages) { /* ... */ }
```

**Spread** (`...`): expands an iterable into individual elements.
```js
const a = [1, 2, 3];
const b = [...a, 4, 5];     // [1,2,3,4,5]
Math.max(...a);              // 3

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a:1, b:2, c:3}
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

---

### 24. Default Parameters

```js
function greet(name = 'Guest', time = 'day') {
  return `Good ${time}, ${name}!`;
}
greet();                    // "Good day, Guest!"
greet('Ali');               // "Good day, Ali!"
greet('Ali', 'morning');    // "Good morning, Ali!"
```

Default values are evaluated **left to right** at call time.
```js
function add(a = b + 1, b = 1) { return a + b; }
add(); // 3 (a=2, b=1)
// add(0) → NaN (a=0, b=1) — a is explicitly provided, so default not used
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

---

### 25. Factory Function

A function that returns a new object (alternative to `new` + class).

```js
function createUser(name, role) {
  return {
    name,
    role,
    introduce() { return `I'm ${name}, a ${role}`; },
  };
}

const admin = createUser('Sara', 'admin');
admin.introduce(); // "I'm Sara, a admin"
```

**vs Classes**: no `new`, no `this`, no `prototype`, naturally encapsulated.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_inheritance_using_setprototypeof

---

### 26. Array.reduce() Practicals

```js
// Sum of positive numbers in mixed array
const mixed = [1, -2, 3, 'a', 4, null, 5];
const sumPos = mixed
  .filter(n => typeof n === 'number' && n > 0)
  .reduce((acc, n) => acc + n, 0);  // 13

// Count characters in string array
const words = ['hello', 'world'];
const charCount = words.reduce((acc, word) => acc + word.length, 0); // 10

// Find longest string
const longest = words.reduce((a, b) => a.length >= b.length ? a : b); // 'hello' or 'world'

// Group by property
const people = [{name:'A', dept:'IT'}, {name:'B', dept:'HR'}, {name:'C', dept:'IT'}];
const grouped = people.reduce((acc, p) => {
  (acc[p.dept] = acc[p.dept] || []).push(p);
  return acc;
}, {}); // { IT: [{...}, {...}], HR: [{...}] }
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

---

### 27. Map vs Object vs Set vs WeakSet vs WeakMap

| | Map | Object | Set | WeakSet | WeakMap |
|---|---|---|---|---|---|
| **Keys** | Any type | Strings/Symbols only | Values (any) | Objects only | Objects only |
| **Ordered** | Yes | Yes (recent) | Yes | No | No |
| **Size** | `.size` | `Object.keys().length` | `.size` | N/A | N/A |
| **Iterable** | Yes | Not directly | Yes | No | No |
| **Weak refs** | No | No | No | Yes (GC eligible) | Yes (GC eligible) |

```js
const map = new Map();
map.set('key1', 'value1');
map.get('key1');      // 'value1'
map.has('key1');      // true
map.size;             // 1

const set = new Set([1, 2, 2, 3]);
set.size;  // 3 (duplicates removed)
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

---

### 28. Object.seal / Immutability

```js
// Object.seal: can modify existing properties, cannot add/remove
const obj = { a: 1, b: 2 };
Object.seal(obj);
obj.a = 10;   // OK
obj.c = 3;    // silent fail (or error in strict mode)

// Object.freeze: cannot modify, add, or remove any property
const frozen = { a: 1 };
Object.freeze(frozen);
frozen.a = 99;  // silent fail (or error in strict mode)

// Deep freeze (nested objects)
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach(v => { if (typeof v === 'object') deepFreeze(v); });
  return obj;
}
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

---

### 29. localStorage vs sessionStorage

| | localStorage | sessionStorage |
|---|---|---|
| **Scope** | Same origin, shared across tabs | Same origin, per tab |
| **Lifetime** | Until explicitly cleared | Until tab/window closes |
| **Size** | ~5-10 MB | ~5-10 MB |
| **API** | Same | Same |

```js
localStorage.setItem('user', JSON.stringify({name: 'Ali'}));
JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');
localStorage.clear();

sessionStorage.setItem('token', 'abc123');
sessionStorage.getItem('token'); // 'abc123'
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

---

### 30. ES6 Features / ECMAScript

**ECMAScript** is the specification (standard). **JavaScript** is the implementation. ES6 (ES2015) introduced major features:

- `let` / `const` (block scoping)
- Arrow functions `=>`
- Template literals `` `Hello ${name}` ``
- Destructuring `const {a, b} = obj`
- Spread/rest `...`
- Classes `class Foo {}`
- Promises `new Promise()`
- Modules `import`/`export`
- `Map`, `Set`, `WeakMap`, `WeakSet`
- `Symbol`, `Iterators`, `Generators`
- Default parameters, rest parameters
- `for...of` loop

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

---

### 31. Implicit Type Coercion / Falsy Values

JS automatically converts types in certain contexts:

```js
'5' - 1;     // 4 (string → number)
'5' + 1;     // '51' (number → string)
true + 1;    // 2
'' == false;  // true
null == undefined; // true (loose equality)
null === undefined; // false
```

**Falsy values** (8 total): `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`

**Everything else is truthy**, including: `'0'`, `'false'`, `[]`, `{}`, `new Number(0)`.

```js
Boolean('0');   // true (non-empty string)
Boolean('');    // false
Boolean([]);    // true
```

Docs: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

---

### 32. IIFE (Immediately Invoked Function Expression)

Executes immediately after definition. Creates a private scope.

```js
// Classic IIFE
(function() {
  const secret = 42;
  console.log(secret); // 42
})();

// secret is not accessible outside

// Arrow IIFE
(() => {
  console.log('runs immediately');
})();
```

**Purpose**: avoid polluting global scope, initialize modules, create closures.

Docs: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

---

### 33. Timer/Callback Execution Order

```js
console.log('start');

setTimeout(() => console.log('timeout1'), 0);

Promise.resolve().then(() => console.log('promise1'));

setTimeout(() => console.log('timeout2'), 0);

Promise.resolve().then(() => console.log('promise2'));

console.log('end');

// Output: start, end, promise1, promise2, timeout1, timeout2
```

**Rule**: All microtasks (Promise) drain between each macrotask (setTimeout).

```js
setTimeout(() => console.log('1'), 0);
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3')).then(() => console.log('4'));
// Output: 3, 4, 1, 2
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop

---

### 34. Console Tricks

```js
console.log('A' - 1);   // NaN (string - number = NaN)
console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality)
console.log(1 + +'1');   // 2 (unary + converts '1' to number 1)
console.log([] == []);   // false (different references)
console.log([] == ![]);  // true (![] = false, [] == false → '' == false → true)

typeof null;          // 'object' (historical bug)
typeof undefined;     // 'undefined'
typeof NaN;           // 'number'
typeof {};            // 'object'
typeof [];            // 'object' (use Array.isArray())
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

---

### 35. Ternary Operator / if..else vs ternary

```js
// Ternary: condition ? ifTrue : ifFalse
const age = 20;
const status = age >= 18 ? 'adult' : 'minor';

// Nested ternary (avoid — hard to read)
const score = 90;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';

// Better: use if..else for complex logic
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
}
```

**When to use ternary**: simple assignments, inline conditions in template literals.
**When to use if..else**: multiple conditions, complex logic, side effects.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

---

## 🟢 Lower Priority (20 topics)

### 36. Generator Functions (Print 1-10 reversed with yield)

```js
function* reverseRange(n) {
  for (let i = n; i >= 1; i--) yield i;
}
for (const num of reverseRange(10)) {
  console.log(num); // 10, 9, 8, ... 1
}
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

---

### 37. Function Borrowing Practical — bind()

```js
function introduce(greeting, punct) {
  return `${greeting}, I'm ${this.name}${punct}`;
}
const person = { name: 'Zara' };

// Partial application with bind
const zaraIntro = introduce.bind(person, 'Hello');
zaraIntro('!'); // "Hello, I'm Zara!"
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

---

### 38. Garbage Collector

JS automatically frees memory by removing objects with no references. The **mark-and-sweep** algorithm marks reachable objects from roots (global, call stack) and deletes the rest.

```js
function demo() {
  let obj = { data: 'large' };
  // obj is GC'd after function returns (no more references)
}
```

**Memory leaks**: forgotten timers, closures holding large objects, detached DOM references.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

---

### 39. Strict Mode

```js
'use strict';

// Prevents:
x = 10;           // ReferenceError (undeclared variable)
delete Object.prototype; // TypeError
0123;             // Octal literal error
```

Enables better error catching. Required for classes, modules, ES6+ by default in many environments.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

---

### 40. DOM Manipulation Methods

```js
document.getElementById('id');
document.querySelector('.class');        // first match
document.querySelectorAll('div > p');    // all matches (NodeList)
document.createElement('div');
element.appendChild(child);
element.removeChild(child);
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.setAttribute('href', 'url');
element.textContent = 'text';
element.innerHTML = '<b>bold</b>';
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model

---

### 41. BOM vs DOM

| | BOM | DOM |
|---|---|---|
| **What** | Browser Object Model | Document Object Model |
| **Object** | `window` | `document` |
| **Deals with** | Browser window, navigator, history, location | HTML/CSS structure |
| **Standard** | No (varies by browser) | Yes (W3C standard) |

```js
// BOM
window.location.href;      // current URL
window.history.back();     // go back
navigator.userAgent;       // browser info
window.alert('hi');        // browser alert

// DOM
document.getElementById('app');
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window

---

### 42. Prototyping / Why name.reverse() Not Possible

```js
const name = 'hello';
// name.reverse is undefined — strings don't have reverse()

// Fix: convert to array
[...name].reverse().join(''); // 'olleh'
Array.from(name).reverse().join(''); // 'olleh'

// Why: String.prototype doesn't have reverse()
// Array.prototype does
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

---

### 43. Map Datatype (Map vs Object for iteration)

```js
const map = new Map();
map.set('a', 1);
map.set('b', 2);

// Map preserves insertion order, iterable with for...of
for (const [key, val] of map) {
  console.log(key, val);
}

// Convert Object ↔ Map
const obj = { x: 1, y: 2 };
const mapFromObj = new Map(Object.entries(obj));
const objFromMap = Object.fromEntries(map);
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

---

### 44. Null / is null an object?

```js
typeof null;    // 'object' (historical bug in JS — never fixed for compatibility)
typeof undefined; // 'undefined'

null == undefined;   // true (loose equality coerces)
null === undefined;  // false (different types)
```

**`null`**: intentional absence of value. **`undefined`**: uninitialized variable.
Neither has properties. `Object.keys(null)` throws TypeError.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

---

### 45. Void Operator

Evaluates an expression and returns `undefined`.

```js
void 0;           // undefined
void (1 + 2);     // undefined

// Used in HTML to prevent navigation
// <a href="javascript:void(0)">Click</a>

// Modern alternative: event.preventDefault()
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void

---

### 46. Object Methods / Method Syntax

```js
// Method shorthand (ES6)
const obj = {
  name: 'Ali',
  greet() { return `Hi ${this.name}`; },  // shorthand
};

// Equivalent to:
const obj2 = {
  name: 'Ali',
  greet: function() { return `Hi ${this.name}`; },
};

// Object.keys / values / entries
Object.keys(obj);    // ['name', 'greet']
Object.values(obj);  // ['Ali', ƒ]
Object.entries(obj); // [['name', 'Ali'], ['greet', ƒ]]
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

---

### 47. '' == [] (Reference Comparison)

```js
[] == [];   // false (different object references)
[] == ![];  // true (unbelievable but true!)

// Why: ![] → false
// [] == false → '' == false → 0 == 0 → true

// Best practice: use === for all comparisons
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

---

### 48. Iteration Methods (some, every, filter, Array.from)

```js
const nums = [1, 2, 3, 4, 5];

nums.some(n => n > 3);    // true (at least one)
nums.every(n => n > 0);   // true (all)
nums.filter(n => n % 2 === 0); // [2, 4]

Array.from('hello');       // ['h','e','l','l','o']
Array.from({length: 3}, (_, i) => i * 2); // [0, 2, 4]
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

---

### 49. JSON Methods

```js
const obj = { name: 'Ali', age: 25 };

// Serialization
const json = JSON.stringify(obj);  // '{"name":"Ali","age":25}'
JSON.stringify(obj, null, 2);      // pretty-printed with 2-space indent

// Deserialization
const parsed = JSON.parse(json);  // { name: 'Ali', age: 25 }

// Common use: deep cloning (with limitations)
const clone = JSON.parse(JSON.stringify(obj));

// Limitations: loses functions, undefined, Date→string, Infinity→null
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

---

### 50. Web APIs / Browser APIs

```js
// Fetch API
fetch('/api/data').then(r => r.json());

// Geolocation
navigator.geolocation.getCurrentPosition(pos => console.log(pos));

// LocalStorage / SessionStorage
localStorage.setItem('key', 'val');

// Notification API
new Notification('Hello!');

// Intersection Observer (lazy loading)
const observer = new IntersectionObserver(entries => { /* ... */ });
observer.observe(element);
```

Docs: https://developer.mozilla.org/en-US/docs/Web/API

---

### 51. Operator Precedence

Key order (highest first):
1. Grouping `()`
2. Member access `.`, `[]`
3. Unary `!`, `typeof`, `void`, `delete`
4. Arithmetic `*`, `/`, `%`
5. Arithmetic `+`, `-`
6. Comparison `<`, `>`, `<=`, `>=`
7. Equality `==`, `===`, `!=`, `!==`
8. Logical `&&`
9. Logical `||`
10. Ternary `? :`
11. Assignment `=`, `+=`

```js
2 + 3 * 4;   // 14 (multiplication first)
(2 + 3) * 4; // 20 (grouping first)
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

---

### 52. `1 | 2` vs `1 || 2`

```js
1 | 2;   // 3 (bitwise OR: 01 | 10 = 11 = 3)
1 || 2;  // 1 (logical OR: 1 is truthy, returns 1)
0 || 2;  // 2 (0 is falsy, returns 2)
```

**Bitwise OR** (`|`): works on binary representation of numbers.
**Logical OR** (`||`): short-circuit evaluation, returns first truthy value.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR

---

### 53. Removing Object Keys / Array Elements

```js
// Remove object key
const obj = { a: 1, b: 2, c: 3 };
delete obj.b;           // returns true, obj = { a: 1, c: 3 }
const { b, ...rest } = obj; // rest = { a: 1, c: 3 }

// Remove array element
const arr = [1, 2, 3, 4];
arr.splice(1, 1);       // removes index 1, arr = [1, 3, 4]
arr.filter(x => x !== 3); // [1, 4] (non-mutating)
const [first, ...remaining] = arr; // remaining = [3, 4]

// Remove nth element
const removeNth = (arr, n) => arr.filter((_, i) => i !== n);
```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

---

## Bonus: Common Practical Patterns

### Interchange first and last chars of string
```js
const swap = s => s.length <= 1 ? s : s[s.length-1] + s.slice(1, -1) + s[0];
swap('hello'); // 'oellh'
```

### Remove vowels from string
```js
'hello'.replace(/[aeiou]/gi, ''); // 'hll'
```

### Count uppercase characters in array
```js
const countUpper = arr => arr.join('').match(/[A-Z]/g)?.length || 0;
countUpper(['Hello', 'World']); // 2
```

### Check if number has fraction
```js
const hasFraction = n => !Number.isInteger(n);
hasFraction(3.14); // true
hasFraction(5);    // false
```

### Check if object is empty
```js
const isEmpty = obj => Object.keys(obj).length === 0;
isEmpty({}); // true
isEmpty({a:1}); // false
```

### Create nested object immutable
```js
const deepFreeze = (obj) => {
  Object.freeze(obj);
  Object.values(obj).forEach(v => { if (typeof v === 'object' && v !== null) deepFreeze(v); });
  return obj;
};
```

### Print multiples of 3 between 1-100 in reverse
```js
for (let i = 99; i >= 1; i -= 3) console.log(i);
```

### Convert function to single line
```js
// if..else → ternary
const isEven = n => n % 2 === 0 ? 'even' : 'odd';
```

### Promise example with fetch
```js
fetch('/api/users')
  .then(res => {
    if (!res.ok) throw new Error('Network error');
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Debounce practical
```js
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce((e) => {
  console.log('Searching:', e.target.value);
}, 300));
```

### Print 1-10 in gap of 1 second
```js
for (let i = 1; i <= 10; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```

### Cancel setTimeout after 1 second
```js
const id = setTimeout(() => console.log('never'), 5000);
setTimeout(() => clearTimeout(id), 1000);
```

### Count students from each class
```js
const students = [{name:'A', class:1}, {name:'B', class:2}, {name:'C', class:1}];
const count = students.reduce((acc, s) => {
  acc[s.class] = (acc[s.class] || 0) + 1;
  return acc;
}, {}); // {1: 2, 2: 1}
```

### Variadic function (sum + average)
```js
const stats = (...nums) => ({
  sum: nums.reduce((a, b) => a + b, 0),
  avg: nums.reduce((a, b) => a + b, 0) / nums.length,
});
stats(1, 2, 3, 4); // { sum: 10, avg: 2.5 }
```

### Second youngest person
```js
const people = [{name:'A', age:30}, {name:'B', age:20}, {name:'C', age:25}];
const sorted = [...people].sort((a, b) => a.age - b.age);
sorted[1]; // {name:'C', age:25}
```

### Remove duplicate even numbers
```js
const arr = [2, 4, 2, 6, 4, 8];
[...new Set(arr)].filter(n => n % 2 === 0); // [2, 4, 6, 8]
```

### Spread object and change a key
```js
const original = { a: 1, b: 2, c: 3 };
const { b, ...rest } = original;
const modified = { ...rest, b: 99 }; // { a: 1, c: 3, b: 99 }
```

### Elements common in two arrays
```js
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const common = a.filter(x => b.includes(x)); // [3, 4]
// Or: [...new Set(a)].filter(x => b.includes(x)) for uniqueness
```

---

### 54. Dynamic Typing

JS variables have **no fixed type** — the type is determined at runtime by the value assigned. Same variable can hold a number, then a string.

```js
let x = 5;      // number
x = "hello";    // now string (no error)
x = true;       // now boolean

typeof x; // "boolean"
```

**Terms to mention**: dynamically typed, type determined at runtime, `typeof` operator, no compile-time type checking.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

### 55. Modern Alternatives for IIFE

IIFE was used to create block scope before ES6. Now `let`/`const` inside `{}` blocks do the same thing — no IIFE needed.

```js
// Old way (IIFE for isolation)
(function() {
  var secret = 42;
})();

// Modern way (block scoping)
{
  let secret = 42;
  const PI = 3.14;
}
// secret and PI not accessible outside the block
```

**Terms to mention**: `let`/`const` block scoping replaced IIFE, ES6 block scope, module pattern.

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

---

### 56. Is JS Fully Interpreted?

**No.** Modern JS engines (V8, SpiderMonkey) use **JIT (Just-In-Time) compilation**. Code is parsed → compiled to bytecode → hot paths are optimized to machine code.

```js
// Execution flow:
// 1. Parser → AST (Abstract Syntax Tree)
// 2. Interpreter → bytecode (quick startup)
// 3. Profiler → identifies "hot" functions
// 4. Compiler (TurboFan/IonMonkey) → optimized machine code
// 5. Deoptimization if assumptions break (e.g., type changes)
```

**Terms to mention**: JIT compilation, V8 engine, bytecode, hot path, optimization/deoptimization, not purely interpreted.

Docs: https://v8.dev/blog

---

### 57. Browser Web APIs

The JS engine itself only handles core language (variables, functions, objects). **Web APIs** are provided by the **browser** (not JS) — `setTimeout`, `fetch`, DOM manipulation, `localStorage`, etc.

```js
// These are NOT part of the JS spec:
setTimeout(() => {}, 1000);     // Timer API (browser)
fetch('/api');                   // Fetch API (browser)
document.getElementById('x');   // DOM API (browser)
localStorage.setItem('k', 'v'); // Storage API (browser)

// They live in the browser's global scope (window),
// alongside JS built-ins (Array, Object, Promise)
```

**Terms to mention**: Web APIs provided by browser environment, not the JS engine, `window` object, DOM, Fetch, Timer APIs, event loop integration.

Docs: https://developer.mozilla.org/en-US/docs/Web/API

---

### 58. Practical: Sum of Non-Prime Numbers in an Array

```js
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.filter(n => !isPrime(n)).reduce((acc, n) => acc + n, 0);
// 1 + 4 + 6 + 8 + 9 + 10 = 38
console.log(sum); // 38

// Also: negative numbers, 0, and 1 are non-prime by definition
```

---

*Generated from 12 months of examiner questions. For full docs, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript*
