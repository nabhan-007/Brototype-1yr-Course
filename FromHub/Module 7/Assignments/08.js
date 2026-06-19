/*
Write a function to capitalize the first letter of each word in a string.
E.g.: Input → "hello world"
Output → "Hello World"
*/

function capitalize(text) {
  text = text.trim();
  text = text.split(" ");

  for (index in text) {
    // First letter to capital and slicing (taking portion) from the first index to the last (empty = last)
    text[index] = text[index][0].toUpperCase() + text[index].slice(1);
  }

  text = text.join(" ");
  return text;
}

let text = "hello world";
console.log(capitalize(text));
