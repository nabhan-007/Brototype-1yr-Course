// Applications of Closure
// ==========================================================
// 1. Data Privacy and Encapsulation (Private Variables)
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined (cannot access directly)
// ==========================================================
// 2. Function Factories
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(2));
console.log(triple(2));
// ==========================================================
// 3. Memoization (Caching Results)
function memoize(fn) {
  const cache = {}; // Preserved across calls

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = (n) => {
  // Imagine a heavy computation here
  return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(4)); // Computed: 16
console.log(fastSquare(4)); // Retrieved from cache: 16
// ==========================================================
// 4. Rate Limiting: Debounce and Throttle
function debounce(fn, delay) {
  let timerId; // Retained in closure

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
}, 300);
// ==========================================================
// 5. Currying and Partial Application
function sendEmail(from) {
  return function (to) {
    return function (subject) {
      return `From: ${from} | To: ${to} | Subject: ${subject}`;
    };
  };
}

const sendFromSupport = sendEmail("support@example.com");
const sendToUser = sendFromSupport("alice@example.com");

console.log(sendToUser("Your ticket is resolved."));
// ==========================================================
// 6. Event Handlers and Asynchronous Callbacks
function attachClickHandlers() {
  const buttonLabels = ["Home", "About", "Contact"];

  buttonLabels.forEach((label, index) => {
    // Each callback closes over its specific `label` and `index`
    setTimeout(
      () => {
        console.log(`Button #${index + 1}: ${label}`);
      },
      1000 * (index + 1),
    );
  });
}

attachClickHandlers();
// ==========================================================
