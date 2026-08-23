# Node.js / Express Study Guide — Module 11 Exam

> 55 topics compiled from 12 months of examiner questions across 10+ students.
> Format: 2-3 line answer + code example + doc URL.
> Priority: 🔴 High (asked 4-8x) | 🟡 Medium (2-3x) | 🟢 Low (1-2x)

---

## 🔴 High Priority (17 topics)

### 1. Spawn vs Fork

Both create child processes, but fork is Node-specific.

| | spawn | fork |
|---|---|---|
| **Module** | `child_process` | `child_process` |
| **Communication** | stdio pipes (manual) | IPC channel built-in |
| **Use case** | Any executable (`ls`, `python`, etc.) | Other Node.js processes |
| **Returns** | `ChildProcess` object | `ChildProcess` with `send()` |

```js
const { spawn, fork } = require('child_process');

// Spawn: run any command
const ls = spawn('ls', ['-la']);
ls.stdout.on('data', (data) => console.log(data.toString()));
ls.on('close', (code) => console.log(`Exit: ${code}`));

// Fork: run Node.js file with IPC
const child = fork('./worker.js');
child.send({ task: 'process', data: [1, 2, 3] });
child.on('message', (msg) => console.log('Result:', msg));
```

Docs: https://nodejs.org/api/child_process.html

---

### 2. Middleware (Application / Router / Error)

Three levels of middleware:

```js
// 1. Application-level (runs on ALL requests)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 2. Router-level (runs on routes using this router)
router.use('/admin', (req, res, next) => {
  if (!req.session.admin) return res.redirect('/admin/login');
  next();
});

// 3. Error-handling (4 args — Express detects 4 params = error middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});
```

**Position matters**: middleware runs in order of registration. Error middleware must be LAST.

Docs: https://expressjs.com/en/guide/using-middleware.html

---

### 3. Router Chaining vs router.all

**Router chaining**: multiple `.get()`, `.post()` etc. on same router — normal route definitions.

```js
router.get('/login', handler1);
router.get('/dashboard', handler2);
router.post('/login', handler3);
```

**router.all**: matches ALL HTTP methods on a path.

```js
// Catches GET, POST, PUT, DELETE, etc. on /api/users
router.all('/api/users', (req, res, next) => {
  console.log('Any method to /api/users');
  next();
});
```

**When to use `router.all`**: catch-all middleware for a path (auth checks, logging). Not for specific handlers.

Docs: https://expressjs.com/en/guide/routing.html

---

### 4. app.set / app.all / app.locals

```js
// app.set: configure app-level settings
app.set('view engine', 'ejs');     // set template engine
app.set('views', './views');       // set views directory
app.set('env', 'production');      // set environment

// app.get: retrieve a setting
app.get('view engine'); // 'ejs'

// app.all: same as router.all but at app level
app.all('/api/*', (req, res, next) => {
  // runs for ALL methods on any /api/* path
  next();
});

// app.locals: app-wide shared data (accessible in all templates)
app.locals.siteName = 'My App';
// In EJS: <%= siteName %>

// vs res.locals: per-request data (only in that request's templates)
res.locals.user = req.session.user;
```

Docs: https://expressjs.com/en/4x/api.html

---

### 5. httpOnly Cookie

A cookie that JavaScript in the browser **cannot read** (prevents XSS theft).

```js
res.cookie('sessionId', 'abc123', {
  httpOnly: true,    // JS can't access document.cookie for this
  secure: true,      // HTTPS only
  sameSite: 'strict', // CSRF protection
  maxAge: 3600000,   // 1 hour in ms
});

// Express session already uses httpOnly by default:
app.use(session({
  secret: 'key',
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60,  // 1 hour
  }
}));
```

Docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

---

### 6. Sessions & Cookies Workflow

1. Client sends login credentials
2. Server validates → creates session data stored server-side
3. Server sends **session ID** to client via `Set-Cookie` header
4. Client sends cookie with session ID on every subsequent request
5. Server looks up session data using the ID

```js
// Express session setup
app.use(session({
  secret: process.env.SESSION_SECRET,  // signs the cookie
  resave: false,                        // don't save session if unmodified
  saveUninitialized: false,             // don't create session until something stored
  cookie: { maxAge: 1000 * 60 * 60 }
}));

// Store user in session
req.session.user = { _id: user._id, email: user.email };

// Access in subsequent requests
if (req.session.user) { /* logged in */ }

// Destroy session (logout)
req.session.destroy((err) => { res.redirect('/login'); });
```

Docs: https://expressjs.com/en/advanced/best-practice-security.html

---

### 7. Query Params vs Path Params

```js
// Path params: part of the URL pattern
app.get('/users/:id', (req, res) => {
  req.params.id; // '123' from /users/123
});

// Query params: after the ? in URL
app.get('/search', (req, res) => {
  req.query.q;    // 'node' from /search?q=node
  req.query.page; // '2' from /search?q=node&page=2
});
```

| | Path Params | Query Params |
|---|---|---|
| **Syntax** | `/users/:id` | `/search?q=node` |
| **Required** | Yes (part of route) | No (optional) |
| **Use case** | Resource identification | Filtering, sorting, pagination |
| **Access** | `req.params.id` | `req.query.q` |

Docs: https://expressjs.com/en/guide/routing.html

---

### 8. CORS / Preflight Request

**CORS** (Cross-Origin Resource Restriction): browser security that blocks requests to a different origin (protocol + host + port).

```js
// Express: manual CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Or use the cors package
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
```

**Preflight**: browser sends `OPTIONS` request before actual request (for non-simple methods like PUT/DELETE or custom headers). Server must respond with CORS headers.

Docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

---

### 9. HTTP OPTIONS / Headers / Status Codes

**OPTIONS**: returns allowed methods for a resource. Used in CORS preflight.

```js
app.options('/api/users', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  });
  res.sendStatus(204);
});
```

**Key headers:**
| Header | Purpose |
|--------|---------|
| `Content-Type` | Body format (`application/json`) |
| `Authorization` | Auth token (`Bearer xxx`) |
| `Cache-Control` | Caching rules |
| `Set-Cookie` | Server sets cookies |
| `Accept` | Client's preferred response format |

**Status codes:**
| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 301/302 | Redirect |
| 400 | Bad Request |
| 401 | Unauthorized (no auth) |
| 403 | Forbidden (no permission) |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Unprocessable Entity |
| 500 | Internal Server Error |

Docs: https://nodejs.org/api/http.html

---

### 10. Child Process (Ways to Create)

Four ways in `child_process`:

```js
const { exec, execFile, spawn, fork } = require('child_process');

// 1. exec: runs command in shell, buffers output (small outputs)
exec('ls -la', (err, stdout) => console.log(stdout));

// 2. execFile: runs executable directly (no shell)
execFile('node', ['script.js'], (err, stdout) => console.log(stdout));

// 3. spawn: streams output (large outputs, real-time)
const child = spawn('ls', ['-la']);
child.stdout.on('data', (data) => process.stdout.write(data));

// 4. fork: spawn for Node.js files with IPC channel
const worker = fork('./worker.js');
worker.send({ task: 'heavy-computation' });
```

**When to use which:**
- Small output, simple command → `exec`
- No shell needed → `execFile`
- Large/real-time output → `spawn`
- Node-to-Node communication → `fork`

Docs: https://nodejs.org/api/child_process.html

---

### 11. Concurrency vs Parallelism / Process vs Threads

| | Concurrency | Parallelism |
|---|---|---|
| **Definition** | Multiple tasks making progress (interleaved) | Multiple tasks running simultaneously |
| **Node.js** | Single-threaded event loop handles I/O concurrently | Worker threads / cluster for CPU parallelism |

**Processes vs Threads:**
| | Process | Thread |
|---|---|---|
| **Memory** | Separate heap | Shared heap |
| **Communication** | IPC (slow) | Shared memory (fast) |
| **Node.js** | `child_process.fork()` | `worker_threads` |

**Node.js achieves concurrency via**: event loop + libuv thread pool (for I/O, DNS, crypto). NOT via threads for normal web requests.

```js
// Node is single-threaded for JS execution
// But libuv uses a thread pool (default 4 threads) for I/O operations
```

Docs: https://nodejs.org/docs/latest/api/cli.html

---

### 12. Worker Threads

For CPU-intensive tasks without blocking the main thread.

```js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main thread
  const worker = new Worker(__filename, { workerData: { n: 40 } });
  worker.on('message', (result) => console.log('Result:', result));
  worker.on('error', (err) => console.error(err));
} else {
  // Worker thread
  let result = 0;
  for (let i = 0; i < workerData.n; i++) result += i;
  parentPort.postMessage(result);
}
```

**vs fork**: Worker threads share memory (SharedArrayBuffer), fork uses separate processes.

Docs: https://nodejs.org/api/worker_threads.html

---

### 13. Error Handling Middleware

Must have **exactly 4 parameters** — Express uses arity to identify error middleware.

```js
// Regular middleware (3 params)
app.use((req, res, next) => {
  // ...
  next(); // pass to next
});

// Error middleware (4 params — MUST have all 4)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Trigger error middleware:
app.get('/risky', (req, res, next) => {
  try {
    doSomethingRisky();
  } catch (err) {
    next(err); // pass error to error middleware
  }
});

// Or throw in async route:
app.get('/async', async (req, res) => {
  const data = await riskyOperation(); // if throws, Express catches
  res.json(data);
});
```

Docs: https://expressjs.com/en/guide/error-handling.html

---

### 14. Environment Variables / .env vs dotenv

```bash
# .env file (not committed to git)
PORT=3000
DB_URI=mongodb://localhost:27017/mydb
SESSION_SECRET=mysecretkey
NODE_ENV=development
```

```js
// Load .env into process.env
require('dotenv').config();

// Access anywhere
process.env.PORT         // '3000'
process.env.DB_URI       // 'mongodb://...'
process.env.NODE_ENV     // 'development'

// .env vs dotenv:
// .env = file that stores key-value pairs
// dotenv = npm package that loads .env file into process.env
// Environment variables = OS-level values (process.env)
```

**Best practice**: Never commit `.env` to git. Use `.env.example` with placeholder values.

Docs: https://www.npmjs.com/package/dotenv

---

### 15. Event-Driven Architecture / EventEmitter

Node.js is built on events. `EventEmitter` is the core class.

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register listener
emitter.on('data', (chunk) => console.log('Got:', chunk));

// Emit event
emitter.emit('data', 'hello');  // "Got: hello"

// Once listener (fires only once)
emitter.once('done', () => console.log('fired once'));

// Remove listener
const handler = () => console.log('test');
emitter.on('event', handler);
emitter.removeListener('event', handler);
```

**Real-world**: HTTP server, streams, custom events in apps.
```js
const server = http.createServer();
server.on('request', (req, res) => { /* ... */ });
server.on('listening', () => console.log('Server started'));
```

Docs: https://nodejs.org/api/events.html

---

### 16. RESTful API

**Representational State Transfer** — architectural style for APIs:

| Principle | Description |
|-----------|-------------|
| Resource-based | URLs represent resources (`/users`, `/posts`) |
| Stateless | Each request contains all needed info |
| HTTP methods | GET (read), POST (create), PUT (update), DELETE (remove) |
| Status codes | Meaningful responses (200, 201, 404, 500) |
| JSON | Common data format |

```js
// RESTful routes for users
GET    /api/users          → list all users
GET    /api/users/:id      → get one user
POST   /api/users          → create user
PUT    /api/users/:id      → update user (full)
PATCH  /api/users/:id      → update user (partial)
DELETE /api/users/:id      → delete user
```

**Idempotency**: GET, PUT, DELETE are idempotent (same request = same result). POST is not.

Docs: https://restfulapi.net/

---

### 17. CommonJS vs ES Modules

| | CommonJS | ES Modules |
|---|---|---|
| **Syntax** | `require()` / `module.exports` | `import` / `export` |
| **Loading** | Synchronous (loaded at runtime) | Asynchronous (parsed at compile time) |
| **Value** | Copy of value | Live binding (reference) |
| **File extension** | `.js` | `.mjs` or set `"type": "module"` in package.json |
| **Top-level `this`** | `module.exports` | `undefined` |
| **Node.js** | Default | Use `"type": "module"` or `.mjs` |

```js
// CommonJS
const express = require('express');
module.exports = { helper };

// ES Modules
import express from 'express';
export const helper = () => {};
export default app;

// Dynamic import (works in both)
const module = await import('./module.js');
```

Docs: https://nodejs.org/api/esm.html

---

## 🟡 Medium Priority (21 topics)

### 18. Cluster Module

Fork Node.js processes across CPU cores.

```js
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isPrimary) {
  // Fork workers equal to CPU cores
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died, restarting...`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.end('Hello from worker ' + process.pid);
  }).listen(3000);
}
```

Docs: https://nodejs.org/api/cluster.html

---

### 19. Content Negotiation

Client and server agree on response format via headers.

```js
// Server-side: respond based on Accept header
app.get('/api/data', (req, res) => {
  res.format({
    'text/html': () => res.send('<h1>Data</h1>'),
    'application/json': () => res.json({ data: 'value' }),
    'text/plain': () => res.send('Data: value'),
    default: () => res.status(406).send('Not Acceptable'),
  });
});

// Client sends: Accept: application/json
```

Docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation

---

### 20. Static Files

Serve files directly without route handlers.

```js
app.use(express.static('public')); // serves files from ./public
app.use(express.static(path.join(__dirname, 'uploads')));

// URL: http://localhost:3000/styles/style.css → ./public/styles/style.css
// URL: http://localhost:3000/images/logo.png → ./public/images/logo.png

// With virtual prefix
app.use('/static', express.static('public'));
// URL: /static/styles/style.css → ./public/styles/style.css
```

Docs: https://expressjs.com/en/starter/static-files.html

---

### 21. express.urlencoded vs express.json

```js
// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));
// Content-Type: application/x-www-form-urlencoded
// req.body = { email: 'a@b.com', password: '123' }

// Parse JSON bodies (API requests)
app.use(express.json());
// Content-Type: application/json
// req.body = { "email": "a@b.com", "password": "123" }

// `extended: true` uses qs library (nested objects)
// `extended: false` uses querystring (flat key-values only)
```

Docs: https://expressjs.com/en/api.html

---

### 22. Body Parser

Extracts the entire request body and attaches it to `req.body`.

```js
// In modern Express (4.16+), body parsers are built-in:
app.use(express.json());          // JSON body parser
app.use(express.urlencoded());    // URL-encoded body parser

// Raw body
app.use(express.raw({ type: 'application/octet-stream' }));

// Text body
app.use(express.text());

// Previously: separate `body-parser` package (now built-in)
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
```

Docs: https://expressjs.com/en/api.html

---

### 23. Session Configuration (saveUninitialized, maxAge, resave)

```js
app.use(session({
  secret: process.env.SESSION_SECRET, // signs cookie
  resave: false,
  // Don't save session back to store if unmodified
  // Set false to avoid race conditions with concurrent requests

  saveUninitialized: false,
  // Don't create session until something is stored
  // Set false for: compliance with laws (GDPR), login sessions
  // Set true for: persistent sessions, flash messages

  cookie: {
    maxAge: 1000 * 60 * 60,  // 1 hour (in ms)
    // maxAge vs expiry: maxAge (ms) sets cookie expiry client-side
    // expiry (seconds) is deprecated, use maxAge
    secure: false,            // true in production (HTTPS only)
    httpOnly: true,
  }
}));
```

Docs: https://www.npmjs.com/package/express-session

---

### 24. CSRF / XSS

**CSRF** (Cross-Site Request Forgery): attacker tricks user into making unintended requests using their session.
```js
// Prevention: CSRF tokens
const csrf = require('csurf');
app.use(csrf({ cookie: true }));

// In form: <input type="hidden" name="_csrf" value="<%= csrfToken() %>">
// In route: check req.body._csrf === req.csrfToken()
```

**XSS** (Cross-Site Scripting): attacker injects malicious scripts into pages.
```js
// Prevention:
// 1. Sanitize user input (e.g., DOMPurify, express-validator)
// 2. Escape output in templates (EJS escapes by default: <%= %>)
// 3. Use httpOnly cookies (JS can't steal session)
// 4. Content-Security-Policy header
res.setHeader('Content-Security-Policy', "default-src 'self'");
```

Docs: https://owasp.org/www-community/attacks/csrf

---

### 25. Browser Cache / Browser Storage

**Cache types:**
| Storage | Size | Scope | Duration |
|---------|------|-------|----------|
| localStorage | ~5-10MB | Same origin | Until cleared |
| sessionStorage | ~5-10MB | Same origin + tab | Until tab closes |
| Cookies | ~4KB | Per domain | Set by expiry |
| IndexedDB | ~50MB+ | Same origin | Until cleared |
| Cache API | varies | Per origin | Until cleared |

**Browser cache** (HTTP caching):
```js
// Server-side cache control
res.set('Cache-Control', 'no-store');       // never cache
res.set('Cache-Control', 'max-age=3600');   // cache for 1 hour
res.set('ETag', '"abc123"');                // version identifier

// nocache package (used in your project)
app.use(nocache()); // sets Cache-Control: no-store, no-cache, must-revalidate
```

Docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching

---

### 26. HTTP Method Overriding

Use PUT/DELETE when client only supports GET/POST.

```js
// Client sends POST with _method=DELETE
// <form method="POST" action="/users/123">
//   <input type="hidden" name="_method" value="DELETE">
// </form>

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Now this route handles the POST→DELETE:
app.delete('/users/:id', (req, res) => { /* ... */ });
```

Docs: https://www.npmjs.com/package/method-override

---

### 27. writeHead vs setHeader

```js
// setHeader: sets one header (can be called multiple times before writeHead)
res.setHeader('Content-Type', 'application/json');
res.setHeader('X-Custom', 'value');

// writeHead: sets status + ALL headers at once (sends them immediately)
res.writeHead(200, {
  'Content-Type': 'text/plain',
  'X-Custom': 'value'
});

// Key difference:
// setHeader → lazy (sent when first writeHead or write happens)
// writeHead → immediate (sends headers right away, can't set more after)
```

Docs: https://nodejs.org/api/http.html

---

### 28. Same Origin Policy

Browser security: a script from origin A can only access data from origin A.

**Same origin** = same protocol + host + port:
```
http://example.com:3000  ← same origin as:
http://example.com:3000  ✓

http://example.com       ← different port:
http://example.com:3000  ✗

http://example.com       ← different protocol:
https://example.com      ✗

http://example.com       ← different host:
http://api.example.com   ✗
```

**Solutions**: CORS headers, JSONP (legacy), proxy server, postMessage.

Docs: https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

---

### 29. fs Module

```js
const fs = require('fs');
const fsp = require('fs/promises'); // promise-based API

// Synchronous (blocks event loop — avoid in server)
const data = fs.readFileSync('file.txt', 'utf-8');
fs.writeFileSync('file.txt', 'hello');

// Asynchronous (callback)
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Async/Await (preferred)
const content = await fsp.readFile('file.txt', 'utf-8');
await fsp.writeFile('file.txt', 'hello world');
await fsp.unlink('file.txt');   // delete file
const stats = await fsp.stat('file.txt'); // file info
```

Docs: https://nodejs.org/api/fs.html

---

### 30. Streams / Transform Streams

Handle large data without loading everything into memory.

```js
const fs = require('fs');
const { Transform } = require('stream');

// Readable stream
const readStream = fs.createReadStream('large-file.txt', 'utf-8');
readStream.on('data', (chunk) => console.log('Got chunk:', chunk.length));

// Writable stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('hello');
writeStream.end();

// Transform stream (modifies data in between)
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

// Pipe them together
readStream.pipe(upperCase).pipe(writeStream);
```

Docs: https://nodejs.org/api/stream.html

---

### 31. Buffer

Handle binary data directly.

```js
// Create buffers
const buf1 = Buffer.from('hello');
const buf2 = Buffer.alloc(10);        // 10 zeroed bytes
const buf3 = Buffer.allocUnsafe(10);  // 10 uninitialized bytes (faster)

// Convert
buf1.toString();          // 'hello'
buf1.toString('base64');  // 'aGVsbG8='
Buffer.from('aGVsbG8=', 'base64').toString(); // 'hello'

// Operations
Buffer.concat([buf1, buf2]).length;
buf1.length; // 5
```

Docs: https://nodejs.org/api/buffer.html

---

### 32. Path Module

```js
const path = require('path');

path.join(__dirname, 'views', 'home.ejs');  // joins path segments
path.resolve('views', 'home.ejs');           // resolves to absolute path
path.extname('file.txt');                     // '.txt'
path.basename('/users/ali/file.txt');         // 'file.txt'
path.dirname('/users/ali/file.txt');          // '/users/ali'
path.parse('/users/ali/file.txt');
// { root: '/', dir: '/users/ali', base: 'file.txt', ext: '.txt', name: 'file' }
```

Docs: https://nodejs.org/api/path.html

---

### 33. Phases in Event Loop

Six phases (in order):

```
   ┌───────────────────────┐
┌─>│        Timers         │ ← setTimeout, setInterval callbacks
│  └───────────┬───────────┘
│  ┌───────────┴───────────┐
│  │   Pending Callbacks   │ ← TCP errors, etc.
│  └───────────┬───────────┘
│  ┌───────────┴───────────┐
│  │      Idle, Prepare    │ ← internal
│  └───────────┬───────────┘
│  ┌───────────┴───────────┐
│  │        Poll           │ ← incoming I/O (file, network)
│  └───────────┬───────────┘
│  ┌───────────┴───────────┐
│  │        Check          │ ← setImmediate callbacks
│  └───────────┬───────────┘
│  ┌───────────┴───────────┐
│  │   Close Callbacks     │ ← socket.on('close')
│  └───────────┬───────────┘
└──────────────┘
```

**Between each phase**: microtask queue drains (Promise callbacks, process.nextTick).

```js
setImmediate(() => console.log('immediate'));
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));

// Output: nextTick, promise, timeout, immediate (or immediate before timeout — depends)
```

Docs: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-loop

---

### 34. libuv

A C++ library that provides Node.js with:
- **Event loop** implementation
- **Thread pool** (default 4 threads) for async I/O (fs, dns, crypto)
- **Async networking** (TCP, UDP, Unix sockets)
- **Cross-platform support** (Windows, Linux, macOS)

```js
// Increase thread pool size for heavy I/O
// process.env.UV_THREADPOOL_SIZE = 8; // max 1024

// libuv handles:
// - File system operations
// - DNS lookups
// - Some crypto operations
// - Child process management
```

**Key point**: JS runs single-threaded, but libuv's thread pool handles I/O off the main thread.

Docs: https://docs.libuv.org/en/v1.x/

---

### 35. Socket

Bidirectional communication channel (TCP/UDP).

```js
// TCP server
const net = require('net');
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('Client:', data.toString());
    socket.write('Hello from server');
  });
  socket.on('end', () => console.log('Client disconnected'));
});
server.listen(3000);

// WebSocket (via ws package)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
wss.on('connection', (ws) => {
  ws.on('message', (data) => console.log(data.toString()));
  ws.send('Hello client');
});
```

Docs: https://nodejs.org/api/net.html

---

### 36. How to Secure a Node.js Application

1. **Use HTTPS** — encrypt traffic
2. **Helmet** — set security headers
```js
const helmet = require('helmet');
app.use(helmet());
```
3. **Rate limiting** — prevent brute force
```js
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
```
4. **Input validation** — sanitize user input
5. **httpOnly cookies** — prevent XSS session theft
6. **CSRF tokens** — prevent cross-site requests
7. **Store secrets in .env** — never hardcode
8. **Hash passwords** — bcrypt
9. **CORS** — restrict origins
10. **Dependencies** — `npm audit`, keep updated

Docs: https://expressjs.com/en/advanced/best-practice-security.html

---

### 37. package-lock.json

Locks exact dependency versions for **reproducible installs**.

```json
// package.json: "express": "^4.18.0" (allows 4.18.x updates)
// package-lock.json: "express": "4.18.2" (exact version installed)

// Benefits:
// 1. Same install on every machine/CI
// 2. Prevents breaking changes from minor updates
// 3. Speeds up npm install (cached)
```

- `npm install` uses lock file
- `npm ci` — clean install from lock file only (CI/CD)
- Don't edit lock file manually

Docs: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json

---

### 38. app.locals vs res.locals

| | app.locals | res.locals |
|---|---|---|
| **Scope** | Global (all requests) | Per-request only |
| **Persistence** | Until server restarts | Dies with request |
| **Template access** | `<%= siteName %>` | `<%= user %>` |
| **Use case** | Site-wide config, DB connection | Current user, flash messages |

```js
app.locals.siteName = 'My App';       // available in ALL templates
app.locals.db = mongoose.connection;   // shared DB reference

res.locals.user = req.session.user;    // only in THIS request
res.locals.flash = req.flash();        // only in THIS request
```

Docs: https://expressjs.com/en/4x/api.html#app.locals

---

### 39. setImmediate() vs setTimeout()

```js
// setTimeout: callback runs in timers phase
setTimeout(() => console.log('timeout'), 0);

// setImmediate: callback runs in check phase (after poll)
setImmediate(() => console.log('immediate'));

// Inside I/O callback, setImmediate ALWAYS runs first:
const fs = require('fs');
fs.readFile('file.txt', () => {
  setImmediate(() => console.log('1st')); // check phase
  setTimeout(() => console.log('2nd'), 0); // timers phase
});
// Output: 1st, 2nd (setImmediate runs before next timers phase)
```

Docs: https://nodejs.org/api/timers.html

---

## 🟢 Lower Priority (14 topics)

### 40. Morgan (HTTP Logger)

```js
const morgan = require('morgan');
app.use(morgan('dev'));
// Output: GET / 200 12.345 ms
```

Docs: https://www.npmjs.com/package/morgan

---

### 41. Cookie Parser

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cookieParser('signed-secret')); // enables signed cookies

// Access cookies
app.get('/', (req, res) => {
  console.log(req.cookies);           // { sessionId: 'abc' }
  console.log(req.signedCookies);     // signed ones (tamper-proof)
});
```

Docs: https://www.npmjs.com/package/cookie-parser

---

### 42. npx

Execute npm packages **without installing** globally.

```js
npx create-react-app my-app     // runs create-react-app without global install
npx nodemon server.js           // runs nodemon for this invocation only

// Difference from npm:
// npm install -g nodemon → permanently installs
// npx nodemon → runs once, can be garbage collected
```

Docs: https://docs.npmjs.com/cli/v9/commands/npx

---

### 43. REPL (Read-Eval-Print-Loop)

Node's interactive shell:
```bash
node        # enters REPL
> 1 + 2     # 3
> .help     # shows commands
> .save     # saves session to file
> .load     # loads file into REPL
> .exit     # exits (or Ctrl+D)
```

Docs: https://nodejs.org/api/repl.html

---

### 44. Crypto Module

```js
const crypto = require('crypto');

// Hash passwords
const hash = crypto.createHash('sha256').update('password').digest('hex');

// Random bytes
const token = crypto.randomBytes(32).toString('hex');

// HMAC
const hmac = crypto.createHmac('sha256', 'secret').update('message').digest('hex');
```

Note: For password hashing, use **bcrypt** (not crypto directly) — bcrypt handles salting.

Docs: https://nodejs.org/api/crypto.html

---

### 45. Read/Write HTTP Headers

```js
// Set response headers
res.setHeader('X-Custom-Header', 'value');
res.set('Content-Type', 'application/json');

// Read request headers
req.headers['content-type'];
req.headers['authorization'];
req.get('User-Agent');
req.ip; // client IP
```

Docs: https://nodejs.org/api/http.html

---

### 46. localhost

`localhost` resolves to `127.0.0.1` (IPv4) or `::1` (IPv6) — the loopback address. Only accessible from the same machine.

```js
app.listen(3000, 'localhost', () => {
  console.log('Only accessible from this machine');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Accessible from any network interface');
});
```

Docs: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

---

### 47. process.nextTick()

Executes callback **after current operation** but BEFORE event loop continues.

```js
console.log('A');
process.nextTick(() => console.log('B'));
console.log('C');
// Output: A, C, B (nextTick runs before any I/O or timers)
```

**vs setImmediate**: nextTick runs before event loop phase continues. setImmediate runs in the next phase.

Docs: https://nodejs.org/api/process.html

---

### 48. Request Body Structure

```js
// HTTP Request structure:
// {
//   method: 'POST',
//   url: '/api/users',
//   headers: {
//     'content-type': 'application/json',
//     'authorization': 'Bearer token123',
//     'cookie': 'sessionId=abc'
//   },
//   body: { email: 'a@b.com', password: '123' }  // parsed by body parser
// }

// Express parsed properties:
req.body;     // parsed body (POST/PUT)
req.params;   // route parameters
req.query;    // query string parameters
req.headers;  // request headers
req.method;   // 'GET', 'POST', etc.
req.url;      // '/api/users?page=1'
req.path;     // '/api/users'
req.cookies;  // parsed cookies
```

Docs: https://expressjs.com/en/4x/api.html#req

---

### 49. app.all vs router.all

Same behavior at different levels:
```js
// app.all: catches ALL methods for a path at app level
app.all('/api/*', (req, res, next) => {
  // runs for GET /api/anything, POST /api/anything, etc.
  next();
});

// router.all: same but scoped to router
router.all('/', (req, res, next) => {
  // runs for all methods on this router's root
  next();
});
```

Docs: https://expressjs.com/en/4x/api.html#app.all

---

### 50. Changing HTTP Status Code When Rendering

```js
// Default: Express sends 200
res.render('error');

// Set status before render
res.status(404).render('404');

// Or inline
res.render('error', { status: 404 });

// In EJS, access it:
// <h1>Error <%= status %></h1>

// Sending status with JSON
res.status(404).json({ error: 'Not found' });

// Status with send
res.sendStatus(204); // sends only status code, no body
```

Docs: https://expressjs.com/en/4x/api.html#res.status

---

### 51. application middleware — custom middleware practical

```js
// Logger middleware
const logger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
  });
  next();
};

// Auth middleware
const auth = (req, res, next) => {
  if (!req.session.user) return res.redirect('/login');
  next();
};

// Error wrapper for async routes
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/dashboard', auth, asyncHandler(async (req, res) => {
  const data = await fetchData();
  res.render('dashboard', { data });
}));
```

Docs: https://expressjs.com/en/guide/writing-middleware.html

---

### 52. DevDependency (npm i -D)

```bash
npm install nodemon --save-dev    # adds to devDependencies
npm install -D eslint prettier    # short form

// In package.json:
{
  "dependencies": { "express": "^4.18.0" },      // needed in production
  "devDependencies": { "nodemon": "^3.0.0" }     // only for development
}

// npm install → installs both
// npm install --production → only dependencies
// npm ci (CI) → uses lock file, installs both
```

Docs: https://docs.npmjs.com/cli/v9/commands/npm-install

---

## Bonus: Common Practical Patterns

### API endpoint to find sum (query + path params)
```js
// GET /api/math/add/5?b=3
app.get('/api/math/add/:a', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.query.b);
  res.json({ sum: a + b });
});
```

### API endpoint to divide 2 numbers
```js
app.get('/api/divide', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b required' });
  if (Number(b) === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
  res.json({ result: Number(a) / Number(b) });
});
```

### Add logging middleware
```js
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});
```

### Store session secret in ENV
```js
// .env
SESSION_SECRET=a-strong-random-string-here

// server.js
app.use(session({
  secret: process.env.SESSION_SECRET,
  // ...
}));
```

### Change HTTP status on render
```js
// For 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});
```

### Prevent POST requests in API
```js
app.get('/api/data', (req, res) => {
  res.json({ data: [1, 2, 3] });
});

// No POST handler = 404 by default
// Or explicitly:
app.all('/api/data', (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
});
```

### Using env in production
```js
const isProd = process.env.NODE_ENV === 'production';

app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: isProd ? 100 : 1000 }));

app.listen(process.env.PORT || 3000);
```

---

### 53. res.write vs res.send vs res.end

**`res.send()`**: sends a complete response (buffers everything, sets Content-Type automatically, ends the response).

**`res.write()`**: sends a **chunk** of the response body. Response is NOT ended — you can call it multiple times, then finish with `res.end()`. Used for streaming.

**`res.end()`**: ends the response with optional data chunk. Must call this after `res.write()`.

```js
// res.send: simple one-shot
res.send('Hello World');

// res.write: streaming/chunked response
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.write('Line 1\n');
res.write('Line 2\n');
res.end('Done');

// res.write in Express (rare — Express prefers res.send)
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('chunk 1\n');
  setTimeout(() => {
    res.write('chunk 2\n');
    res.end();
  }, 1000);
});
```

| Method | Sets headers? | Ends response? | Use case |
|--------|--------------|----------------|----------|
| `res.send()` | Yes (auto) | Yes | Normal responses |
| `res.write()` | No | No | Streaming chunks |
| `res.end()` | No | Yes | Finish after write |

Docs: https://nodejs.org/api/http.html#responsewritechunk-encoding-callback

---

### 54. Parts of HTTP Request and Response

**Request** (client → server):
- **Method**: GET, POST, PUT, PATCH, DELETE
- **URL/URI**: resource path + query params
- **Headers**: metadata (Content-Type, Authorization, Accept, Cookie)
- **Body**: data payload (POST/PUT/PATCH only)
- **HTTP Version**: 1.0, 1.1, 2.0

**Response** (server → client):
- **Status Code**: 200 (OK), 404 (Not Found), 500 (Server Error), etc.
- **Headers**: metadata (Content-Type, Set-Cookie, Cache-Control)
- **Body**: the actual data (HTML, JSON, file, etc.)
- **HTTP Version**: 1.1, 2.0

```js
// Request parts in Express:
req.method;    // "GET"
req.url;       // "/users?page=1"
req.headers;   // { 'content-type': 'application/json', ... }
req.body;      // { name: "Ali" } (parsed by body parser)
req.params;    // { id: "123" }
req.query;     // { page: "1" }

// Response parts in Express:
res.statusCode;     // 200 (set implicitly)
res.setHeader('X-Custom', 'value');
res.json({ ok: true });  // sends body + headers + status
```

Docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

---

### 55. Minimum Threads Needed for Concurrency in Node.js

**Zero extra threads** for I/O concurrency. Node.js uses a **single-threaded event loop** — thousands of concurrent I/O operations are handled by the event loop + OS-level async I/O (epoll/kqueue), NOT by threads.

```js
// Node handles 10,000 concurrent HTTP requests with ONE thread:
app.get('/data', async (req, res) => {
  const result = await db.query('SELECT * FROM users');
  // DB query is offloaded to OS async I/O (libuv thread pool for DNS/fs/crypto)
  // Main thread is FREE to handle other requests while waiting
  res.json(result);
});
```

**The thread pool (default 4 threads)** is only for specific blocking I/O: `fs` operations, `dns.lookup`, `crypto`. Normal network I/O (HTTP, TCP, UDP) uses OS-level async — no threads needed.

**For CPU-bound tasks**: Use `worker_threads` or `cluster.fork()` — but that's parallelism, not concurrency.

**Terms to mention**: single-threaded event loop, OS-level async I/O (epoll/kqueue), libuv thread pool (4 default, for fs/dns/crypto only), concurrency ≠ parallelism.

Docs: https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop

---

*Generated from 12 months of examiner questions. For full docs, visit https://nodejs.org/docs/latest/api/ and https://expressjs.com/*
