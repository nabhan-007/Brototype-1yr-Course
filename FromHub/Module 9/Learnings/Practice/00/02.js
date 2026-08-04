// Find sum of the given Object
const ab = { a: [3, 343], adf: 333 };
const sum = Object.values(ab)
  .flat() // flatten arrays into a single list
  .reduce((acc, val) => acc + val, 0);

console.log(sum); // 679
