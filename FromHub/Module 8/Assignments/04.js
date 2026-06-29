/*
Write a function that creates an object using enhanced object literals.

E.g.: Input → name = "John", age = 25
Output → { name: "John", age: 25 }
*/

function createObject(name, age) {
  return { name, age };
}

let output = createObject("John", 25);

console.log(output);
