/**
 * Session 1: Dev Tooling & First Script
 *
 * Run: node 01-first-script.js arg1 arg2
 *
 * Official Definition: Node.js is an open-source, cross-platform
 * JavaScript runtime environment built on Chrome's V8 engine
 * that executes JS server-side with an event-driven, non-blocking I/O model.
 */

console.log("Hello Node!");

// process.version returns the current Node.js version
console.log("Node version:", process.version);

// process.argv — argument vector
// [0] = path to Node.js
// [1] = path to this script
// [2]... = user-provided arguments
console.log("Full argv:", process.argv);
console.log("Script:", process.argv[1]);
console.log("User args:", process.argv.slice(2));

// __dirname and __filename — always available in Node
console.log("Directory:", __dirname);
console.log("File:", __filename);
