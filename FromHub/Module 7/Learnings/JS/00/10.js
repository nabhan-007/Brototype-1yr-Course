// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     const data = "User data received!";
//     callback(data); // execute the callback
//   }, 2000);
// }

// fetchData(function (result) {
//   console.log("Callback says:", result);
// });

// The main function taking the task and the callback sticky note
function makeDosa(callback) {
  console.log("1. Chef is making the Dosa...");

  // setTimeout is a built-in JS function that takes a callback!
  // It waits 3 seconds, THEN executes the callback.
  setTimeout(() => {
    console.log("2. Dosa is ready!");
    callback(); // Ringing the pager!
  }, 3000);
}

// The callback function (what to do AFTER the dosa is ready)
function serveCustomer() {
  console.log("3. Waiter serves the Dosa to the customer.");
}

// Pass the function as an argument.
// Exam Trap: DO NOT put () after serveCustomer here!
// You are passing the function itself, not running it yet.
makeDosa(serveCustomer);
