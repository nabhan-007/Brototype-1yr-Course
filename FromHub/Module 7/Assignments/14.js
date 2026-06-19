/*
Write a function that reverses an array using a loop.
E.g.: Input → [1, 2, 3, 4]
Output → [4, 3, 2, 1]
*/

function reverseArray(arr) {
  let revArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }

  return revArray;
}

let myArray = [1, 2, 3, 4];
console.log(reverseArray(myArray));
