/*
Write a function that returns the sum of squares of all elements in an array using reduce()
E.g.: Input → [1, 2, 3, 4]
Output → 30
*/

let myArray = [1, 2, 3, 4];

let output = myArray.reduce((acc, num) => acc + num * num, 0);
console.log(output);
