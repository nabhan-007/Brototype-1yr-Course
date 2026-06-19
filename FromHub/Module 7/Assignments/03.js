/*
Write a program to count how many even and odd numbers are in an array.
E.g.: Input → [1, 2, 3, 4, 5, 6]
Output → Even: 3, Odd: 3
*/

let myArray = [1, 2, 3, 4, 5, 6];

let evenNums = 0;
let oddNums = 0;

for (i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenNums++;
  } else {
    oddNums++;
  }
}

console.log("Even: " + evenNums);
console.log("Odd: " + oddNums);
