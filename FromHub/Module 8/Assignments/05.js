/*
Write a function that accepts rest parameters and returns their sum.

E.g.: Input → sum(1, 2, 3, 4)
Output → 10
*/

function sum(...numbers) {
  let output = 0;

  for (let number of numbers) {
    output += number;
  }

  return output;
}

console.log(sum(1, 2, 3, 4));
