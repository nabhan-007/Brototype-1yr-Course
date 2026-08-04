/**
 * Session 4: Event Loop, nextTick, setImmediate, EventEmitter
 *
 * Official: Event Loop is the mechanism that allows Node.js to perform
 * non-blocking I/O despite being single-threaded, by offloading operations
 * to libuv and the OS kernel.
 */

// --- Execution order demo ---
console.log('A');

setTimeout(() => console.log('setTimeout'), 0);

process.nextTick(() => console.log('nextTick'));

Promise.resolve().then(() => console.log('Promise'));

setImmediate(() => console.log('setImmediate'));

console.log('B');
// Expected: A, B, nextTick, Promise, setTimeout, setImmediate

// --- EventEmitter demo ---
const EventEmitter = require('events');

class LoginSystem extends EventEmitter {}

const loginSystem = new LoginSystem();

// Register listeners
loginSystem.on('userLoggedIn', (username) => {
  console.log(`Logger: ${username} logged in at ${new Date().toISOString()}`);
});

loginSystem.on('userLoggedIn', (username) => {
  console.log(`Email: Sending welcome email to ${username}`);
});

// Emit the event — both listeners fire
loginSystem.emit('userLoggedIn', 'Nabhan');
