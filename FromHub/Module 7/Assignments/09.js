/*
Write a function that removes all falsy values from an array.
E.g.: Input → [0, 1, false, 2, "", 3]
Output → [1, 2, 3]
*/

let myArray = [0, 1, false, 2, "", 3];

for (i in myArray) {
  if (!myArray[i]) {
    myArray.splice(i, 1);
  }
}

console.log(myArray);
