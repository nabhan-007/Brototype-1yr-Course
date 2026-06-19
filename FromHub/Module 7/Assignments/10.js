/*
Write a function using map() to square all numbers in an array.
E.g.: Input → [1, 2, 3, 4]
Output → [1, 4, 9, 16]
*/

let myArray = [1, 2, 3, 4];

let sqrArray = myArray.map((x) => x * x);
console.log(sqrArray);
