async function retry(fn, totalAttempts = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    // Stop when no attempts remain
    if (totalAttempts <= 1) throw error;

    console.warn(
      `Attempt failed. Retries left: ${totalAttempts - 1}. Waiting ${delay}ms...`,
    );

    await new Promise((resolve) => setTimeout(resolve, delay));
    return retry(fn, totalAttempts - 1, delay);
  }
}

// A mock network request that fails twice and succeeds on the 3rd try
let attempts = 0;
const unstableApiCall = () => {
  return new Promise((resolve, reject) => {
    attempts++;
    console.log(`API Call Attempt #${attempts}`);
    if (attempts < 3) {
      reject(new Error("Network Timeout 504"));
    } else {
      resolve({ status: 200, data: "User Profile Loaded Successfully!" });
    }
  });
};

// Running the retry utility
retry(unstableApiCall, 3, 1000)
  .then((result) => console.log("Final Result:", result))
  .catch((err) => console.error("All retries failed:", err.message));
