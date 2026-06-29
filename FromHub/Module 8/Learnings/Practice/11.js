// Basic Example
async function hw() {
  return "Hello World";
}

const data = hw();
data.then((res) => console.log(res));

// ==========================================================

// Using Promise
async function hw() {
  pr = new Promise(function (resolve, reject) {
    resolve("Hello World");
  });
  return pr;
}

const data = hw();
data.then((res) => console.log(res));

// ==========================================================

// Using Await

pr1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("HW");
  }, 3000);
});

pr2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("HW");
  }, 6000);
});

async function hw() {
  // Await - Not Stopping. Just suspending the execution.

  // If reversed, everything gets printed after the highest time.
  const val1 = await pr1;
  console.log(val1);
  console.log("Hello World1");

  const val2 = await pr2;
  console.log(val2);
  console.log("Hello World2");
}

hw();

// ==========================================================

async function ghData(user) {
  const API_URL = `https://api.github.com/users/${user}`;

  try {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}

ghData("pynaabo");

// ==========================================================
