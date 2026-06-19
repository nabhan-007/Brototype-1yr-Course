/*
Write a program that swaps two variables without using a third variable.
E.g.: Input → a = 5, b = 10
Output → a = 10, b = 5
*/

let a = 5;
let b = 10;

a = a + b; // 5 + 10 = 15
b = a - b; // 15 - 10 = 5
a = a - b; // 15 - 5 = 10

console.log("a = " + a);
console.log("b = " + b);
