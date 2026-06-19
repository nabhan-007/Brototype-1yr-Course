/*
Write a program to display the factorial of a number using a loop
*/

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

let number = 5;
console.log("Factorial of " + number + " is: " + factorial(number));
