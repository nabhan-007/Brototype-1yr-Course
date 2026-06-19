/*
Write a function to check whether a string is a palindrome.
E.g.: Input → "madam"
Output → true
*/

function ifPalindrome(string) {
  let rev = string.split("").reverse().join("");
  return string === rev;
}

let string = "madam";
console.log(ifPalindrome(string));
