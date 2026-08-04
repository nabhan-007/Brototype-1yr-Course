/*
Write a generator function to produce first n even numbers.

E.g.: Input → n = 4
Output → 0, 2, 4, 6
*/

function* evenNumbers(n) {
  for (let i = 0; i < n; i++) {
    yield i * 2;
  }
}

let output = evenNumbers(4);

console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
