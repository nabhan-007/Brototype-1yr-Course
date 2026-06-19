/*
Write a function to count the number of vowels in a string.
E.g.: Input → "Javascript"
Output → 3
*/

function vowelsCount(string) {
  string = string.toLowerCase();

  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let letter of string) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

let string = "JavaScript";
console.log(vowelsCount(string));
