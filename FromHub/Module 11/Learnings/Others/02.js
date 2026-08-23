// predict this output
const fs = require("fs");
console.log("A");
fs.readFile("x.txt", () => {
  console.log("B");
  setImmediate(() => console.log("C"));
  process.nextTick(() => console.log("D"));
  Promise.resolve().then(() => console.log("E"));
  setTimeout(() => console.log("F"), 0);
});
console.log("G");

// A G B D E C F
