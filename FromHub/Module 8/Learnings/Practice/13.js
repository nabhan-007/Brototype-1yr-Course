function cleanString(str) {
  return str.replace(/[^A-Za-z0-9]+/g, "");
}

function validatePalindrome(str) {
  str = cleanString(str).toLowerCase();
  let rev = str.toLowerCase().split("").reverse().join("");

  return str === rev ? true : false;
}

//For the purpose of user debugging.
console.log(validatePalindrome("A man, a plan, a canal: Panama"));
