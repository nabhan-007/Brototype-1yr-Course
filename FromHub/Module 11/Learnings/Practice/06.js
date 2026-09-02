// // Print from 1 to 10 every second
// let count = 1;
// const id = setInterval(() => {
//   console.log(count);

//   if (count === 10) {
//     clearInterval(id);
//   }
//   count++;
// }, 1000);

// // My complicated way
// function a() {
//   let a = 0;
//   return function b() {
//     a += 1;
//     return a;
//   };
// }

// let counter = a();

// const id = setInterval(() => {
//   let num = counter();
//   if (num <= 10) {
//     console.log(num);
//   } else {
//     clearInterval(id);
//   }
// }, 1000);

// // Using generator function
// function* createCounter() {
//   for (let i = 1; i <= 10; i++) {
//     yield i;
//   }
// }

// const counter = createCounter();

// const id = setInterval(() => {
//   const result = counter.next();
//   if (result.done) {
//     clearInterval(id);
//   } else {
//     console.log(result.value);
//   }
// }, 1000);

// // Using SetTimeout
// let count = 0;
// const counter = (i) => {
//   setTimeout(() => {
//     console.log(++count);
//   }, i * 1000);
// };

// for (let i = 1; i <= 10; i++) {
//   counter(i);
// }
