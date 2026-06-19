// 1. Creating the Promise (The examiner might ask you to write this)
const fetchServerData = new Promise((resolve, reject) => {
  console.log("Status: Pending (Connecting to Ubuntu server...)");

  setTimeout(() => {
    const serverIsUp = true; // Change this to false to trigger a rejection

    if (serverIsUp) {
      resolve({ data: "Docker containers running smoothly" }); // Success!
    } else {
      reject("Error 500: Server crashed."); // Failure!
    }
  }, 2000);
});

// 2. Using the Promise (This is what you'll write 99% of the time)
fetchServerData
  .then((result) => {
    // Runs ONLY if resolve() was called
    console.log("Success:", result.data);
  })
  .catch((error) => {
    // Runs ONLY if reject() was called
    console.log("Failed:", error);
  })
  .finally(() => {
    // The Exam Trap! This runs EVERY TIME, whether it succeeded or failed.
    console.log("Connection attempt finished.");
  });
