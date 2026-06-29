/*
Write a generator function to yield values from 1 to n.

E.g.: Input → n = 5
Output → 1, 2, 3, 4, 5
*/

function* numbers(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

let output = numbers(5);

for (let number of output) {
  console.log(number);
}
