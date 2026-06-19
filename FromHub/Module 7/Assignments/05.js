/*
Write a function that reverses a string.
E.g.: Input → "JavaScript"
Output → "tpircSavaJ"
*/

function reverseText(text) {
  let revText = "";
  for (i = text.length - 1; i >= 0; i--) {
    revText += text[i];
  }
  return revText;
}

console.log(reverseText("JavaScript"));

// Alternative:
// const reverseText = text => text.split("").reverse().join("");
// console.log(reverseText("JavaScript"));
