/**
 * Session 3: Built-in Modules + Milestone 2
 * Official definition: Node.js built-in modules are libraries
 * included with Node.js installation — no npm install needed.
 */

// --- os module ---
const os = require('os');
console.log('Platform:', os.platform());
console.log('CPUs:', os.cpus().length, 'cores');
console.log('Free memory:', os.freemem());

// --- path module ---
const path = require('path');
console.log('Joined path:', path.join('users', 'nabhan', 'docs'));
console.log('Resolved path:', path.resolve('docs'));
console.log('__dirname:', __dirname);

// --- fs module (async) ---
const fs = require('fs');
const now = new Date().toString();
fs.writeFile(path.join(__dirname, 'datetime.txt'), now, (err) => {
  if (err) throw err;
  console.log('Date/time written to datetime.txt');
});

// --- url module ---
const url = require('url');
const myUrl = new URL('/login?user=nabhan&age=25', 'http://localhost:3000');
console.log('Pathname:', myUrl.pathname);
console.log('Username param:', myUrl.searchParams.get('user'));
