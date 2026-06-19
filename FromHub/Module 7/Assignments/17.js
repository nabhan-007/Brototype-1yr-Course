/*
Write a function that removes all digits from a string.
E.g.: Input → "abc123def45"
Output → "abcdef"
*/

function removeDigits(string) {
  let result = "";

  for (let ch of string) {
    if (isNaN(ch)) {
      // checks if the character is NOT a number
      result += ch;
    }
  }

  return result;
}

let string = "abc123def45";
console.log(removeDigits(string)); // Output: "abcdef"
