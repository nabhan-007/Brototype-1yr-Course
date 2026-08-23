/*
Write a function to flatten a nested array one level deep.
E.g.: Input → [1, [2, 3], 4, [5, 6]]
Output → [1, 2, 3, 4, 5, 6]
*/

let nestedArray = [1, [2, 3], 4, [5, 6]];

function flatOneLevel(arr) {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc.push(...value);
    } else {
      acc.push(value);
    }
    return acc;
  }, []);
}

// ==========================================================

// nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];

// console.log(flatOneLevel(nestedArray));

// function flatAll(arr) {
//   return arr.reduce((acc, value) => {
//     if (Array.isArray(value)) {
//       acc.push(...flatAll(value));
//     } else {
//       acc.push(value);
//     }
//     return acc;
//   }, []);
// }

// console.log(flatAll(nestedArray));
