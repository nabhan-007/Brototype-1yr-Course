const obj = { a: 1, b: 2, c: { d: 4 }, e: { f: { g: 5 } } };

const {
  c: { d },
  e: {
    f: { g },
  },
} = obj;

console.log(d); // 4
console.log(g); // 5
