/*
Write a function using the ternary operator to check if a number is positive, 
negative, or zero.
E.g.: Input → 0 
Output → "Zero" 
*/

let input = 0;

let output = input === 0 ? "Zero" : input > 0 ? "Positive" : "Negative";
console.log(output);
