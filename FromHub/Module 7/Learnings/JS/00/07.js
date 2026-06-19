function outer() {
  console.log("Hello from outer!");
  return function inner() {
    return "Hello from inner!";
  };
}
let fn = outer();
console.log(fn());
