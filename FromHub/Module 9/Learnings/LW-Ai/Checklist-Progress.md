# Module 9: Progress Tracker

**Exam:** Jul 18, 2026 | **Started:** Jul 16, 2026

## 🧰 Phase 1: Getting Started

### Dev Tooling
- [x] Set up Prettier + format on save
- [x] Install NVM for Node version management
- [x] Install Nodemon and `nocache` as dev dependency
- [x] Set up Postman for API testing
- [x] IDE debugging — breakpoints, watch variables, inspect errors
- [x] Understand `package.json` (dependencies, scripts, npm init, npm init -y)
- [x] **npm vs npx** — when to install vs when to execute directly
- [x] **REPL** — Node.js interactive shell (`node` in terminal, try JS live)
- [x] **CLI basics** — `process.argv`, running scripts with `node file.js`

### 🥇 Milestone 1: First Node Script
- [x] Create `app.js` to verify Node.js runtime
- [x] Write a short description
- [x] Link to tutorials

---

## 💡 Phase 2: Core Concepts
- [x] What is Node.js? (JavaScript runtime environment)
- [x] What is Express.js?
- [x] What is a framework and why is it used?
- [x] **Modules system** — `require()`, `exports`, `module.exports` (CommonJS)
- [x] What is a REST API? (endpoints, resources, stateless, HTTP verbs)

---

## 📦 Phase 3: Node.js Built-in Modules

### Core Module Theory
- [x] `os` — OS information
- [x] `path` — file/directory paths (`__dirname`, `__filename`, `path.join`, `path.resolve`)
- [x] `fs` — file system operations (read, write, append)
- [x] `url` — URL parsing
- [x] `http` — build a raw server **without Express**
- [x] `crypto` — cryptographic functions (optional)

### 🥇 Milestone 2: First Server
- [x] Write current date/time to a file using `fs.writeFile`
- [x] Append data to a file using `fs.appendFile`
- [x] Create a raw HTTP route in Node.js
- [x] Route returning multiplication table (route params)
- [x] Route adding two numbers (query params)
- [x] Write a short description
- [x] Link to tutorials

### Bonus exercises
- [ ] Stream pipe from one file to another
- [ ] `process.nextTick` execution order demo

---

## 🧵 Phase 4: How Node Runs Your Code
- [x] Understand the Event Loop concept
- [x] `process.nextTick` (priority — runs before micro/macro tasks)
- [x] `setImmediate` (differences from nextTick)
- [x] Events / EventEmitter (creating and handling custom events)
- [x] Map Code Execution Chart (Call Stack, Web APIs, Task Queue, Microtask Queue)

---

## 🌐 Phase 5: HTTP & Web APIs

### Theory
- [x] Web API fundamentals
- [x] HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
- [x] PUT vs PATCH (full update vs partial update)
- [x] Status codes (200, 201, 400, 401, 404, 500)
- [x] Query parameters vs Path parameters
- [x] Client-side vs server-side validations
- [x] Same-origin policy
- [x] Cache & Cache-Control headers

### 🥇 Milestone 3: First Express Routes
- [x] Work with query params in Express
- [x] Work with path params in Express
- [x] Change response status code using `res.status()`
- [x] Explore `req` / `res` methods in Express

---

## 🔗 Phase 6: Express.js — Middleware & View Engine

### Middleware Theory
- [x] Middleware concept and request lifecycle
- [x] Application-level middleware (`app.use()`)
- [x] Router-level middleware (route-specific)
- [x] Error-handling middleware (`err, req, res, next`)
- [x] `express.json()` + `express.urlencoded()` (body parsing)
- [x] `express.static` (serving static files)
- [x] Router chaining
- [x] CORS + preflight requests (OPTIONS method)

### 🥇 Milestone 4: Middleware in Action
- [x] Logger middleware (log method + URL)
- [x] Route-level middleware (log param names)
- [x] Error-handling middleware (catch + return 500)
- [x] Custom middleware to validate `req.body`

### View Engine
- [x] Decide template engine with mentor (EJS / Pug / HBS)
- [x] Implement chosen engine
- [x] Understand how view engines render dynamic content
- [x] Render a simple template with dynamic data

---

## 🎨 Phase 7: Login Page & Home Page
- [x] Design login page with Bootstrap + view engine
- [x] Design home page with Bootstrap + view engine (not blank)
- [x] Set up `dotenv` for environment variables
- [x] **localStorage** — client-side storage for tokens/preferences

---

## 🔐 Phase 8: Auth & State Management

### Core Concepts
- [x] Authentication vs Authorization
- [x] Sessions vs Cookies

### 🥇 Milestone 5: Working Login
- [x] Accept username + password from user
- [x] Validate server-side against predefined values
- [x] Correct → redirect to home page
- [x] Incorrect → show error on login page
- [x] Signout button on home page
- [x] Signout → redirect to login page
- [x] Session persists until user clicks signout
- [x] Back button blocked after signout (Cache-Control)

---

## 📤 Phase 9: File Uploads
- [x] Implement Multer for `multipart/form-data` uploads

---

## 🧠 Phase 10: Bonus Deep Dives

### Node.js Deeper Dives
- [ ] Stream types (Readable, Writable, Duplex, Transform)
- [ ] Child Process (fork, spawn, exec, execFile)
- [ ] Morgan logger
- [ ] PM2 process manager
- [ ] Content Negotiation
- [ ] Error-first callback pattern
- [ ] Idempotency in HTTP methods

### Express Deeper Dives
- [ ] `app.set()` vs `app.locals`
- [ ] CSRF protection
- [ ] MVC design pattern
- [ ] WebSocket basics

### Theory / Architecture
- [ ] Reactor pattern
- [ ] Process vs Threads
- [ ] Explain `libuv` and its role in async offloading
- [ ] Understand the Thread Pool (libuv's pool for async I/O)
- [ ] Cluster (process forking for multi-core)
- [ ] Worker threads (CPU-intensive tasks)
- [ ] Buffer (raw binary data)

---

## 📋 Admin & Submission Prep
- [x] Refer to the task explanation video
- [ ] Open the student portal and compare every task against this checklist
- [ ] Prepare topic for tech seminar
- [ ] Record + upload as unlisted YouTube video
- [ ] Record weekly progress video
- [x] Reflect on progress
- [ ] Attach Typing Club screenshot
- [x] LeetCode problems

## 🎬 Personal Tasks
- [x] Watch Shawshank Redemption
- [x] Finish reading Discipline Equals Freedom
- [x] Compile questions for mentor meeting
