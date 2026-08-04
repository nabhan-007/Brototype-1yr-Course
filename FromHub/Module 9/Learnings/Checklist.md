# Module 9: Node.js + Express — Full Stack Foundations

**What you'll build by the end:** A login-protected web app with EJS views, file uploads, session management, and a home page that shows personalized content.

**Sources:** RAW.md + Task Video Syllabus + Senior Guidelines + other-sources.md

> **Senior's advice:** Theory matters more than checking boxes. Understand _why_ before you code _what_. But don't get stuck reading — alternate between learning and building.

---

## 🧰 Phase 1: Getting Started

> **Goal:** Set up your environment and write your first Node.js script.

### Dev Tooling

- [x] Set up Prettier + format on save
- [ ] Install NVM for Node version management
- [ ] Install Nodemon and `nocache` as dev dependency
- [ ] Set up Postman for API testing
- [ ] IDE debugging — breakpoints, watch variables, inspect errors
- [ ] Understand `package.json` (dependencies, scripts, npm init, npm init -y)
- [ ] **npm vs npx** — when to install vs when to execute directly
- [ ] **REPL** — Node.js interactive shell (`node` in terminal, try JS live)
- [ ] **CLI basics** — `process.argv`, running scripts with `node file.js`

### 🥇 Milestone 1: First Node Script

- [ ] Create `app.js` to verify Node.js runtime
- [ ] Write a short description
- [ ] Link to tutorials

---

## 💡 Phase 2: Core Concepts

> **Goal:** Understand what Node and Express are, how modules work, and what REST means.

### Theory

- [ ] What is Node.js? (JavaScript runtime environment)
- [ ] What is Express.js?
- [ ] What is a framework and why is it used?
- [ ] **Modules system** — `require()`, `exports`, `module.exports` (CommonJS)
- [ ] What is a REST API? (endpoints, resources, stateless, HTTP verbs)

### Practice

- [ ] Write a short description
- [ ] Link to tutorials

---

## 📦 Phase 3: Node.js Built-in Modules

> **Goal:** Use Node's built-in modules to work with files, paths, URLs, and create a raw server.

> **Order:** Start with `os` (easiest) → `path` → `fs` → `url` → `http` (hardest) → `crypto` (optional).

### Core Module Theory

- [ ] `os` — OS information (start here — simplest)
- [ ] `path` — file/directory paths (`__dirname`, `__filename`, `path.join`, `path.resolve`)
- [ ] `fs` — file system operations (read, write, append)
- [ ] `url` — URL parsing
- [ ] `http` — build a raw server **without Express** (this is your first server!)
- [ ] `crypto` — cryptographic functions (optional)

### 🥇 Milestone 2: First Server

- [ ] Write current date/time to a file using `fs.writeFile`
- [ ] Append data to a file using `fs.appendFile`
- [ ] Create a raw HTTP route in Node.js
- [ ] Route returning multiplication table (route params)
- [ ] Route adding two numbers (query params)
- [ ] Write a short description
- [ ] Link to tutorials

### Bonus exercises (if time)

- [ ] Stream pipe from one file to another
- [ ] `process.nextTick` execution order demo

---

## 🧵 Phase 4: How Node Runs Your Code

> **Goal:** Understand the event loop _just enough_ to know why `fs.readFile` doesn't block your server.

> **Don't over-study this.** Learn the basics, then come back after you've built real servers.

- [ ] Understand the Event Loop concept (how Node handles async without blocking)
- [ ] `process.nextTick` (priority — runs before micro/macro tasks)
- [ ] `setImmediate` (differences from nextTick)
- [ ] Events / EventEmitter (creating and handling custom events)
- [ ] Map Code Execution Chart (Call Stack, Web APIs, Task Queue, Microtask Queue)
- [ ] Write a short description
- [ ] Link to tutorials

---

## 🌐 Phase 5: HTTP & Web APIs

> **Goal:** Understand the language of the web — methods, status codes, params, and CORS.

### Theory

- [ ] Web API fundamentals
- [ ] HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
- [ ] PUT vs PATCH (full update vs partial update)
- [ ] Status codes (200, 201, 400, 401, 404, 500)
- [ ] Query parameters vs Path parameters
- [ ] Client-side vs server-side validations
- [ ] Same-origin policy
- [ ] Cache & Cache-Control headers

### 🥇 Milestone 3: First Express Routes

- [ ] Work with query params in Express
- [ ] Work with path params in Express
- [ ] Change response status code using `res.status()`
- [ ] Explore `req` / `res` methods in Express
- [ ] Write a short description
- [ ] Link to tutorials

---

## 🔗 Phase 6: Express.js — Middleware & View Engine

> **Goal:** Master Express middleware — the pipeline every request flows through. Then add a template engine to render HTML pages.

### Middleware Theory

- [ ] Middleware concept and request lifecycle
- [ ] Application-level middleware (`app.use()`)
- [ ] Router-level middleware (route-specific)
- [ ] Error-handling middleware (`err, req, res, next`)
- [ ] `express.json()` + `express.urlencoded()` (body parsing)
- [ ] `express.static` (serving static files)
- [ ] Router chaining
- [ ] CORS + preflight requests (OPTIONS method)

### 🥇 Milestone 4: Middleware in Action

- [ ] Logger middleware (log method + URL)
- [ ] Route-level middleware (log param names)
- [ ] Error-handling middleware (catch + return 500)
- [ ] Custom middleware to validate `req.body`

### View Engine

- [ ] Decide template engine with mentor (EJS / Pug / HBS)
- [ ] Implement chosen engine
- [ ] Understand how view engines render dynamic content
- [ ] Render a simple template with dynamic data
- [ ] Write a short description
- [ ] Link to tutorials

---

## 🎨 Phase 7: Login Page & Home Page

> **Goal:** Build the UI — login form and home page using Bootstrap + your template engine.

- [ ] Design login page with Bootstrap + view engine
- [ ] Design home page with Bootstrap + view engine (not blank)
- [ ] Set up `dotenv` for environment variables
- [ ] **localStorage** — client-side storage for tokens/preferences (browser DevTools)
- [ ] Write a short description
- [ ] Link to tutorials

---

## 🔐 Phase 8: Auth & State Management

> **Goal:** Wire up login — accept credentials, manage sessions, and block back-button after logout.

> **This is the hardest phase. Take your time — every checkbox here is a real security decision.**

### Core Concepts

- [ ] Authentication vs Authorization — define the boundary
- [ ] Sessions vs Cookies — define the boundary

### 🥇 Milestone 5: Working Login

- [ ] Accept username + password from user
- [ ] Validate server-side against predefined values
- [ ] Correct → redirect to home page
- [ ] Incorrect → show error on login page
- [ ] Signout button on home page
- [ ] Signout → redirect to login page
- [ ] Session persists until user clicks signout
- [ ] Back button blocked after signout (Cache-Control)
- [ ] Write a short description (Sessions & Cookies)
- [ ] Write a short description (Auth / Authz)
- [ ] Write a short description (Server-side login)
- [ ] Link to tutorials

---

## 📤 Phase 9: File Uploads

> **Goal:** Accept file uploads using Multer.

- [ ] Implement Multer for `multipart/form-data` uploads
- [ ] Write a short description
- [ ] Link to tutorials

---

## 🧠 Phase 10: Bonus Deep Dives

> **Come back to these after you've built the full app.** They'll make more sense with real code in your muscle memory.

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

> **Do these in parallel or at the end — they're about documenting and submitting, not learning new concepts.**

### Task Explanation Video

- [x] Refer to the task explanation video
- [x] Write a short description

### Portal Cross-Check

- [ ] Open the student portal and compare every task against this checklist
- [ ] Ensure no portal task is missing a description or tutorial link
- [ ] Confirm all audio summaries and screenshots are attached
- [ ] Mark any gaps found and fix them before submission

### Tech Seminar

- [ ] Prepare topic (e.g. TCP/IP)
- [ ] Record + upload as unlisted YouTube video
- [ ] Write a short description

### Progress Video

- [x] Record weekly progress
- [x] Upload as unlisted YouTube video
- [x] Write a short description

### Reflection

- [x] Were you satisfied with your progress?
- [x] New concepts/skills learned and their impact
- [x] Last review mistakes — how did you address them?
- [x] What strategies did you adopt differently?
- [x] Write a short description

---

## 📅 Parallel Tasks (Daily)

- [ ] Typing Club — at least 1 hour/day (cap at 1hr)
- [ ] Write a short description (Typing)
- [ ] Attach final Typing Club screenshot
- [x] LeetCode problems — optimized, passing all tests
- [x] Write a short description (LeetCode)

---

## 🎬 Personal Tasks (Syllabus Requirements)

- [x] Watch Shawshank Redemption (themes: hope, institutionalization, consistency)
- [x] Attach audio summary
- [x] Write a short description
- [x] Finish reading Discipline Equals Freedom
- [x] Attach audio summary
- [x] Write a short description
- [x] Compile questions for the mentor meeting
