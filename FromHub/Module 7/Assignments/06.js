/*
Write a program to check whether a number is prime or not.
E.g.: Input → 13
Output → 13 is a prime number.
*/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}

let number = 13;
isPrime(number)
  ? console.log(number + " is a prime number")
  : console.log(number + " is not a prime number!!");
