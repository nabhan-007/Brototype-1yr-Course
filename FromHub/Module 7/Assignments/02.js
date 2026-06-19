/*
Write a function to merge two sorted arrays using a while loop
E.g.: Input → A = [1, 3, 5, 7], B = [2, 4, 6, 8, 9]
Output → [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
function mergeSortedArrays(A, B) {
  let C = [];
  let aIndex = 0;
  let bIndex = 0;

  // 1. Compare elements until one array is fully traversed
  while (aIndex < A.length && bIndex < B.length) {
    if (A[aIndex] < B[bIndex]) {
      C.push(A[aIndex++]);
    } else {
      C.push(B[bIndex++]);
    }
  }

  // 2. If elements remain in A, push them to C
  while (aIndex < A.length) {
    C.push(A[aIndex++]);
  }

  // 3. If elements remain in B, push them to C
  while (bIndex < B.length) {
    C.push(B[bIndex++]);
  }

  return C;
}

let A = [1, 3, 5, 7];
let B = [2, 4, 6, 8, 9];
console.log(mergeSortedArrays(A, B));
