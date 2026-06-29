/*
Write a function that uses array destructuring to extract values.

E.g.: Input → [10, 20, 30]
Output → a = 10, b = 20, c = 30
*/

function extractValues(array) {
  let [a, b, c] = array;

  console.log("a =", a);
  console.log("b =", b);
  console.log("c =", c);
}

extractValues([10, 20, 30]);
