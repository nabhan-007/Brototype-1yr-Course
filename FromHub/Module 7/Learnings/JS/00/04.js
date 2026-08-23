function sum(...numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}

console.log(sum(1, 2, 3, 4));

// ==========================================================

const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
console.log(sum(1, 2, 3, 4));
