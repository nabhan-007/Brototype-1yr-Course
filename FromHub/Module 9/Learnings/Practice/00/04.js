// let arr = [1, 2, 3, 4, 5, 6];

// let output = arr.reduce((acc, x) => {
//   if (x % 2 !== 0) {
//     if (x > acc) {
//       acc = x;
//     }
//   }
//   return acc;
// }, 0);
// console.log(output);

// // ;==========================================================

// let arr = [1, 2, 3, 0, 4, 5, 0, 6];

// let output = arr.reduce((acc, x) => {
//   if (x == 0) {
//     acc.unshift(x);
//   } else {
//     acc.push(x);
//   }
//   return acc;
// }, []);

// console.log(output);

// // ;==========================================================

// // print multiples of 5 between 1 - 100 in rev order
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let output = arr.reduce((acc, x) => {
//   if (x % 5 === 0) {
//     acc.unshift(x);
//   }
//   return acc;
// }, []);

// console.log(output);
