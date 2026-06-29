/*
Write a function that takes another function as an argument (callback) and executes it.

E.g.: Input → greet(() => "Hello")
Output → "Hello"
*/

function greet(callback) {
  let output = callback();

  console.log(output);
}

greet(() => "Hello");
