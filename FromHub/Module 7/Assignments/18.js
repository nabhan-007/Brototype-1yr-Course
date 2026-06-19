/*
Write a function to convert a string to title case.
E.g.: Input → "my name is john"
Output → "My Name Is John"
*/

function toTitleCase(string) {
  string = string.trim().split(" ");

  for (i in string) {
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
  }

  return string.join(" ");
}

let string = "my name is john";
console.log(toTitleCase(string));
