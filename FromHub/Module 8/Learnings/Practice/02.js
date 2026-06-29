function outer() {
  const secret = "hello";
  function inner() {
    console.log(secret); // reads secret from outer's lexical scope
  }
  return inner;
}
const fn = outer();
fn(); // logs "hello"
