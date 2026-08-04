# Module - 9

## Node.js

- Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It executes JavaScript outside the browser — on the server-side. It uses an event-driven, non-blocking I/O model that makes it lightweight, efficient, and perfect for data-intensive real-time applications.

## Framework

- A framework is a pre-built structure of code that provides standardized solutions to common problems. It dictates the architecture and flow of your application, guiding how you organize code.

## REPL (Read-Eval-Print Loop)

## CLI Basics (Command Line Interface) & process.argv

- CLI = Command Line Interface — the terminal/command prompt where you type commands.
- Example:
  If you run:
  node app.js hello world

  process.argv gives you:

  ```JSON
  [
  "C:\\Program Files\\nodejs\\node.exe", // the node program itself
  "C:\\Users\\you\\app.js", // your script file
  "hello", // first argument
  "world" // second argument
  ]
  ```

- process.argv[0] = path to Node.js
- process.argv[1] = path to your script
- process.argv[2] onwards = your actual arguments

## npm vs npx

### npm = Node Package Manager

- Full form: Node Package Manager
- What it does: Installs packages (downloads them from the internet into your project)
- npm install express → downloads express into node_modules/ folder, adds it to package.json
- The package is now permanently available in your project

### npx = Node Package Execute

- What it does: Runs a package WITHOUT permanently installing it
- npx create-react-app my-app → downloads create-react-app temporarily, runs it, then discards it
- Saves disk space and keeps your project clean
  > Exam-ready explanation:
  > "npm is used to install packages that your project depends on. The package gets saved in node_modules and added to package.json. npx is used to execute a package once without permanently installing it — it downloads a temporary copy, runs it, and deletes it after."

## Nodemon

- Full form: "Node Monitor" (shortened to nodemon)
- The problem: Every time you change your code, you have to manually stop the server (Ctrl+C) and restart it (node app.js). This gets annoying after 50 times.
- The solution: Nodemon watches your files. When you save a change, it automatically restarts the server for you.
- Install: `npm install --save-dev nodemon`
- `--save-dev` means it goes into devDependencies (only needed during development, not on the live server)
- Usage: Instead of node app.js, run `npx nodemon app.js` or add a script: `"dev": "nodemon app.js"`

## CommonJS

- CommonJS is Node.js's module system that uses require() to import modules and module.exports or exports to export functionality. Each file in Node.js is treated as a separate module with its own scope.

## REST API

- Full form: `RE`presentational `S`tate `T`ransfer `A`pplication `P`rogramming `I`nterface
- API (Application Programming Interface): A way for two pieces of software to talk to each other. Like a waiter taking your order to the kitchen.
- REST: A set of rules for how that API should work.
  Official definition for exam:
  REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources represented as URLs (endpoints). It is stateless — each request from a client contains all the information needed to process it.
- Key properties of a REST API:
  1. Stateless (Server doesn't remember past requests. Each request is independent.)
  2. Resource-based (URLs represent things(resources), not actions: `/users` not `/getUsers`)
  3. Uses HTTP methods (GET = read, POST = create, PUT = update, DELETE = delete)
  4. Returns data usually as JSON

## Built-in Modules

### 1. os — Operating System Module

- The os module provides operating system-related utility methods and properties.

  ```JavaScript
  const os = require('os');

  os.platform();     // 'win32' (Windows), 'darwin' (Mac), 'linux'
  os.arch();         // 'x64'
  os.hostname();     // your computer's name
  os.cpus();         // array of CPU core objects
  os.freemem();      // free memory in bytes
  os.totalmem();     // total memory in bytes
  os.homedir();      // home directory path
  os.userInfo();     // { username, uid, gid, shell, homedir }
  ```

- Why it matters: Useful for system monitoring apps, performance tools, or logging server environment info.

### 2. path — Path Module

- The path module provides utilities for working with file and directory paths.

### 3. fs — File System Module

- The fs module enables interacting with the file system in a modeled way.
- Two styles: Synchronous (Sync) and Asynchronous

  ```JavaScript
  const fs = require('fs');

  // WRITE a file (overwrites if exists)
  fs.writeFileSync('file.txt', 'Hello World');          // Sync
  fs.writeFile('file.txt', 'Hello World', (err) => {    // Async
    if (err) throw err;
    console.log('File written!');
  });

  // READ a file
  const data = fs.readFileSync('file.txt', 'utf-8');    // Sync
  fs.readFile('file.txt', 'utf-8', (err, data) => {     // Async
    if (err) throw err;
    console.log(data);
  });

  // APPEND to a file
  fs.appendFileSync('file.txt', '\nMore content');      // Sync
  fs.appendFile('file.txt', '\nMore content', (err) => { // Async
    if (err) throw err;
    console.log('Content appended!');
  });

  // CHECK if file exists
  fs.existsSync('file.txt');  // true or false
  ```

### 4. url — URL Module

- The url module provides utilities for URL resolution and parsing.

  ```JavaScript
  const url = require('url');

  const myUrl = new URL('https://example.com/login?user=nabhan&age=25');

  myUrl.protocol;     // 'https:'
  myUrl.hostname;     // 'example.com'
  myUrl.pathname;     // '/login'
  myUrl.search;       // '?user=nabhan&age=25'
  myUrl.searchParams; // URLSearchParams { 'user' => 'nabhan', 'age' => '25' }
  myUrl.searchParams.get('user'); // 'nabhan'
  ```

### 5. http — HTTP (HyperText Transfer Protocol) Module (Build a Raw Server)

- The http module provides the ability to create HTTP servers and make HTTP requests.

  ```JavaScript
  const http = require('http');

  const server = http.createServer((req, res) => {
    // req = incoming request (url, method, headers)
    // res = outgoing response (what we send back)

    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home Page');
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About Page');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  ```

- Multiplication table route:

  ```JavaScript
  const http = require('http');
  const url = require('url');

  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    if (parsedUrl.pathname === '/table') {
      const num = parseInt(parsedUrl.searchParams.get('num')) || 1;
      let result = '';
      for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}\n`;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    }
  });
  ```

- Sum route with query params:

```JavaScript
 // URL: http://localhost:3000/add?a=5&b=3
 if (parsedUrl.pathname === '/add') {
   const a = parseInt(parsedUrl.searchParams.get('a')) || 0;
   const b = parseInt(parsedUrl.searchParams.get('b')) || 0;
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end(`Sum: ${a + b}`);
 }
```

---

- `app.use(express.urlencoded({ extended: true }));` => This middleware tells Express to understand form data (like when you submit a login form). `extended: true` means it can handle complex data structures (like `nested objects or arrays`), not just simple key=value pairs.
