let x = 1;

A();
B();

console.log(x);

function A() {
  let x = 10;
  console.log(x);
}

function B() {
  let x = 100;
  console.log(x);
}
