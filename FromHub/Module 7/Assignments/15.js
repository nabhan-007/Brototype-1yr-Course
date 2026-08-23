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

// ==========================================================

// Without using in-built modules
function ifPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

let string = "madam";
console.log(ifPalindrome(string));
