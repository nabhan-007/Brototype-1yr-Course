let arr = [1, 2, 3];
let res;

let add = (a, b) => a + b;
console.log(add(arr[0], arr[1]));
console.log("==========================================================");

res = arr.map((x) => x * 2); // Returns [2, 4 , 6]
console.log(res);
console.log("==========================================================");

res = arr.filter((x) => x % 2 !== 0); // Returns [1, 3]
console.log(res);
console.log("==========================================================");

res = arr.reduce((sum, x) => sum + x, 0); // Returns 6
console.log(res);
console.log("==========================================================");
