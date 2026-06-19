/*
Write a function that counts the frequency of each character in a string.
E.g.: Input → "hello"
Output → { h: 1, e: 1, l: 2, o: 1 }
*/

let string = "hello";
let frequency = {};

for (let i of string) {
  if (frequency[i]) {
    frequency[i]++;
  } else {
    frequency[i] = 1;
  }
}

console.log(frequency);
