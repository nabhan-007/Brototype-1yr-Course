// Enable reading from stdin
process.stdin.setEncoding("utf8");

console.log("Enter your name:");

// Listen for data event
process.stdin.on("data", (input) => {
  const name = input.trim(); // Remove newline
  console.log(`Hello, ${name}!`);
  process.exit(); // Exit after reading
});
