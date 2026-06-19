/*
Write a function to flatten a nested array one level deep.
E.g.: Input → [1, [2, 3], 4, [5, 6]]
Output → [1, 2, 3, 4, 5, 6]
*/

let nestedArray = [1, [2, 3], 4, [5, 6]];

let flatArray = nestedArray.flat();
console.log(flatArray);
