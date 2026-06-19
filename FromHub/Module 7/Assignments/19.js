/*
Write a function to sum only the numeric values from a mixed array.
E.g.: Input → [1, "2", 3, "four", 5]
Output → 9
*/

function calcSum(arr) {
  let sum = 0;
  for (num of arr) {
    if (typeof num === "number") {
      sum += num;
    }
  }
  return sum;
}

let myArray = [1, "2", 3, "four", 5];
console.log(calcSum(myArray));
