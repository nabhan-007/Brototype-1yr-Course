/*
Write a function to find the second-largest number in an array.
E.g.: Input → [10, 5, 20, 8, 25]
Output → 20
*/

function secondLargest(array) {
  let largest = 0;
  let secLargest = 0;

  for (let num of array) {
    if (num > largest) {
      secLargest = largest; // update second largest before changing largest
      largest = num;
    } else if (num > secLargest && num < largest) {
      secLargest = num;
    }
  }

  return secLargest;
}

let myArray = [10, 5, 20, 8, 25];
console.log(secondLargest(myArray));
