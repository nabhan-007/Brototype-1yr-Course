/*
Write a function to remove duplicates from an array using a Set
E.g.: Input → [1, 3, 4, 5, 6, 2, 7, 2, 4, 5]
Output → [1, 3, 4, 5, 6, 2, 7]
*/

let myArray = [1, 3, 4, 5, 6, 2, 7, 2, 4, 5];

let newArray = [...new Set(myArray)];
console.log(newArray);
