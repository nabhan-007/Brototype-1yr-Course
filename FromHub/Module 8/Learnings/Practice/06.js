console.log("Start");

setTimeout(() => {
  console.log("Timeout!!");
}, 2500);

// Fetch a random joke from the API
fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => {
    // Print the joke setup and punchline
    console.log(data.setup);
    console.log(data.punchline);
  })
  .catch((error) => console.error("Error fetching joke:", error));

console.log("End");
