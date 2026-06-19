x = 10; // creates global x
console.log(x);

(function () {
  "use strict"; // Using Strict

  let x = 10; // ReferenceError (instead of creating global x)
  console.log(x);
})();
