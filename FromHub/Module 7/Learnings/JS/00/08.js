// Spread
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// ==========================================================

// Rest
function sum(...numbers) {
  let res = 0;
  numbers.forEach((n) => (res += n));
  return res;
}
console.log(sum(1, 2, 3));
