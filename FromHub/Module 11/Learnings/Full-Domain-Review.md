# Full Domain Review — Modules 7–10

Module 11 is the **Full Domain**: everything from M7 (Core JS), M8 (Advanced JS + Async), M9 (Node + Express), and M10 (MongoDB) is fair game. This doc is the revision pack built around the pending topics from every exam.

---

## 1. M9 Recovery Pack (the danger zone)

M9 scored 5.3/10 after 3 attempts and left 16 pendings. These are the top priority.

### Streams — the 4 types

A **stream** is a sequence of data chunks flowing over time, instead of one whole buffer at once.

| Type | Direction | Use case |
|---|---|---|
| **Readable** | Read only | `fs.createReadStream()`, HTTP request body |
| **Writable** | Write only | `fs.createWriteStream()`, HTTP response |
| **Duplex** | Both, independent | TCP sockets |
| **Transform** | Both, modifies data | `zlib.createGzip()`, encryption |

### Piping

`pipe()` connects a readable stream straight into a writable one — automatic flow + backpressure handling.

```js
const fs = require("fs");
const readStream = fs.createReadStream("big.txt");
const writeStream = fs.createWriteStream("copy.txt");
readStream.pipe(writeStream);
```

No intermediate buffer, memory stays low, and you never hand-roll the pause/resume logic.

### `process.nextTick` vs `setImmediate`

- `process.nextTick()` — runs **before** the event loop continues, even before microtasks (Promises). Highest priority.
- `setImmediate()` — runs in the **check** phase, after I/O callbacks.

```js
console.log("start");
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));
setImmediate(() => console.log("setImmediate"));
// start → nextTick → promise → setImmediate
```

### Buffer class

A **Buffer** is a fixed-size chunk of raw binary memory, used because JS strings are UTF-16 and not byte-friendly. Used heavily in `fs`, `http`, and streams.

```js
Buffer.from("hello");           // <Buffer 68 65 6c 6c 6f>
Buffer.alloc(10);               // 10 zeroed bytes
Buffer.from([1, 2, 3]);
buf.toString("utf-8");          // back to string
buf.length;                     // byte size
```

### Concurrency and the thread pool

- Node is **single-threaded** for JS code, but uses **libuv's thread pool** to offload blocking I/O (file ops, crypto, DNS).
- Default pool size: **4 threads** (changeable via `UV_THREADPOOL_SIZE`).
- CPU-heavy JS still blocks the main thread — that's what Worker Threads are for.
- The **event loop** is how one thread juggles thousands of async I/O operations without blocking.

### Router chaining

Chain verbs on one path instead of repeating the path:

```js
router
  .route("/user/:id")
  .get(getUser)      // GET  /user/123
  .put(updateUser)   // PUT  /user/123
  .delete(deleteUser); // DELETE /user/123
```

### Dynamic routing (path params)

```js
// URL: /user/123
router.get("/user/:id", (req, res) => {
  res.send(req.params.id); // "123"
});
```

Colon `:name` captures the segment into `req.params`.

### HTTP methods and status codes

| Method | Purpose |
|---|---|
| GET | Read |
| POST | Create |
| PUT | Full replace |
| PATCH | Partial update |
| DELETE | Remove |
| OPTIONS | CORS preflight / describe server capabilities |

**Key status codes:** 200 OK · 201 Created · 301 Moved Permanently · 302 Found (temporary) · 400 Bad Request · 401 Unauthorized (not logged in / no token) · 403 Forbidden (logged in but no permission) · 404 Not Found · 500 Internal Server Error.

### PUT vs PATCH

- **PUT** — replace the whole resource. Missing fields become null/defaults.
- **PATCH** — apply a partial change, only what you send.

### Middleware — the 4 types

| Type | Signature | Example |
|---|---|---|
| Application-level | `app.use(fn)` | logger, `express.json()` |
| Router-level | `router.use(fn)` | `adminAuth.checkSession` |
| Error-handling | `(err, req, res, next)` — 4 args | catch + return 500 |
| Built-in / Third-party | from Express or npm | `express.static()`, `morgan`, `multer` |

Middleware runs in registration order — it's a pipeline every request flows through. `next()` hands off to the next layer.

### `fs` module practicals

```js
const fs = require("fs");

fs.writeFileSync("a.txt", "data");          // overwrite
fs.appendFileSync("a.txt", "\nmore");       // add to end
fs.readFileSync("a.txt", "utf-8");          // read
fs.unlinkSync("a.txt");                     // delete
```

Async (non-blocking) versions: `fs.writeFile`, `fs.appendFile`, `fs.readFile` — all take a callback or return a promise.

### `express.json()` vs `express.urlencoded()`

| Parser | Handles |
|---|---|
| `express.json()` | JSON bodies (`Content-Type: application/json`) — from fetch/REST clients |
| `express.urlencoded({ extended: true })` | Form bodies (`application/x-www-form-urlencoded`) — HTML forms |

`extended: true` uses the `qs` library (supports nested objects); `false` uses the simple querystring parser. Both put the data into `req.body`.

### Environment variables (`.env`)

```shell
npm install dotenv
```

`.env` file (never commit it):
```
PORT=3000
SESSION_SECRET=super_secret
MONGO_URL=mongodb://localhost:27017/myapp
```

Load it at the very top of the entry file:
```js
require("dotenv").config();
const port = process.env.PORT || 3000;
```

### Session destroy syntax

```js
req.session.destroy((err) => {
  res.redirect("/login");
});
```

`req.session.destroy()` clears the session store entry and calls the callback when done. (Setting `req.session.user = null` only clears that key — destroy removes the whole session.)

### Install a dev dependency

```shell
npm install --save-dev nodemon
```

`--save-dev` / `-D` puts it in `devDependencies` (only needed while developing, not in production).

### `app.locals`

Globally available data across all templates in the app:

```js
app.locals.appName = "My Store";
app.locals.user = { name: "John" };
```

Accessible in views as `appName`, `user` — no need to pass it per-route.

---

## 2. M7 / M8 / M10 Pendings

### `Object.seal()` vs `Object.freeze()`

| | seal | freeze |
|---|---|---|
| Add/delete properties | ❌ | ❌ |
| Modify existing values | ✅ | ❌ |
| Nested objects | ❌ (shallow) | ❌ (shallow) |

**Deep freeze** — freeze is shallow, so nested objects are still mutable. Recursively freeze:

```js
function deepFreeze(obj) {
  Object.keys(obj).forEach((key) => deepFreeze(obj[key]));
  return Object.freeze(obj);
}
```

### Function statements vs expressions

```js
// Statement (declaration) — HOISTED. Callable before its line.
function greet() { return "hi"; }

// Expression — NOT hoisted. Assigned to a variable at runtime.
const greet = function () { return "hi"; };
```

Anonymous function assigned to a const = expression. `function*` generators are declarations that pause/resume.

### Hoisting & execution context

- **Execution context** = the environment where code runs (global, function, eval). Each has a scope, `this`, and variable bindings.
- **Hoisting**: during the creation phase, `var` declarations and function declarations are moved to the top of their scope (values undefined for `var`, full definition for functions). `let`/`const` are also hoisted but stay in the **temporal dead zone** until their line.
- The **call stack** is a LIFO list of active function execution contexts — each call pushes a frame, each return pops it. `stack overflow` = too many frames (infinite recursion).

### `reduce()` in 30 seconds

```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((acc, curr) => acc + curr, 0); // 10
// callback(accumulator, currentValue, index, array) → new accumulator
// 2nd arg (0) is the initial value
```

Powerful beyond sums: flatten arrays, group objects, count occurrences, build objects.

### Generators — pause/resume with `yield`

```js
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = countUp();
gen.next(); // { value: 1, done: false }  → PAUSED at yield
gen.next(); // { value: 2, done: false }  → RESUMED
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }
```

- `function*` declares a generator; `yield` pauses execution and hands back a value.
- `.next()` resumes until the next `yield` or the function ends.
- Great for lazy sequences and custom iteration; pre-async/await it was used for async flows.

### MongoDB `renameCollection()`

```shell
db.students.renameCollection("pupils")
```

Valid only if the new name isn't taken. Syntax is on the collection: `db.<old>.renameCollection("<new>")`.

### Regex pattern matching (`$regex`)

```js
db.students.find({ name: { $regex: /a$/i } });  // names ending in "a", case-insensitive
db.students.find({ name: { $regex: "^A" } });   // starts with A (string form)
db.students.find({ name: /^A/i });              // shorthand
```

Flags: `i` case-insensitive, `m` multiline, `s` dot-matches-all. Anchors: `^` start, `$` end.

### How indexing works

- An **index** is a sorted data structure (B-tree) on one or more fields → the DB finds documents in O(log n) instead of a full collection scan.
- Types: single, compound (multiple fields), multikey (arrays), text (search).
- `db.users.createIndex({ email: 1 })` — `1` ascending, `-1` descending. `unique: true` enforces uniqueness.
- Verify with `.explain("executionStats")` — check `totalDocsExamined` vs `nReturned`.

### Clustered vs non-clustered collection

| | Clustered (MongoDB 5.0+) | Non-clustered (default) |
|---|---|---|
| Storage | Documents stored **in index order** on the `_id` key | Documents stored in insertion order, separate from indexes |
| Inserts | Slightly slower (must keep order) | Fast |
| Reads by range / `_id` | Very fast | Normal |
| Extra index | `_id` index is mandatory (not separate) | `_id` index exists alongside |

**Cluster key** = the field the data is physically ordered by. Enforced at creation with `clusteredIndex`.

---

## 3. Theory Rapid-Fire (likely questions)

**M7 Core JS**
- `==` vs `===` — loose vs strict (type coercion vs none).
- `var` vs `let` vs `const` — scope (function vs block), hoisting (TDZ), reassignment.
- Array methods: which mutate (`splice`, `push`, `sort`) vs return new (`map`, `filter`, `slice`, `concat`).
- What is a closure? A function that remembers its lexical scope even after the outer function returns.
- `Set` vs `Map` — unique values vs key-value; both have `size`, `.has()`, `.delete()`.

**M8 Advanced JS + Async**
- `this` in different contexts — global, method, arrow (lexical), constructor, call/apply/bind.
- call/apply/bind — invoke immediately (call: args list, apply: array) vs bind returns a new bound function.
- OOP pillars — encapsulation (`#private`), inheritance (`extends`/`super`), polymorphism (method override), abstraction.
- Promise states — pending, fulfilled, rejected. `Promise.all` (fail-fast) vs `Promise.allSettled` (waits for all).
- Event loop — call stack → web APIs → microtask queue (promises) → macrotask queue (timers, I/O).
- Callback hell → Promises → async/await — each is a readability/error-handling upgrade.

**M9 Node + Express**
- What is Node? A JS runtime built on V8 + libuv, enabling server-side JS.
- CommonJS module system — `require`, `module.exports`, `exports`.
- Event loop phases — timers → I/O → poll → check (`setImmediate`) → close; `nextTick` jumps the queue.
- Middleware — any function with `(req, res, next)` that processes a request in the pipeline.
- Sessions vs cookies — cookie stored client-side (small, can't trust), session stored server-side (only the session id goes in the cookie).
- Authentication (who are you?) vs Authorization (what can you do?).
- `req.params` vs `req.query` — path segments vs `?key=value`.
- Why `bcrypt`? Passwords hashed, never stored in plaintext; `bcrypt.compare()` verifies.

**M10 MongoDB**
- NoSQL vs SQL; MongoDB = document DB, BSON storage.
- CAP theorem — Consistency, Availability, Partition tolerance; MongoDB = **CP** (strong consistency, partition tolerant).
- JSON vs BSON — BSON is binary, adds types (ObjectId, Date, Number), faster to parse, supports indexes.
- Indexes, replication, sharding — see M10 notes for the full deep dive.

---

## 4. Practical Drills (copy-paste clean)

### reduce()

```js
// Sum
[1, 2, 3, 4].reduce((a, c) => a + c, 0); // 10
// Flatten
[[1, 2], [3], [4, 5]].reduce((a, c) => a.concat(c), []); // [1,2,3,4,5]
// Group by key
["a", "b", "a"].reduce((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc; }, {});
// Max
[3, 7, 2].reduce((a, c) => (c > a ? c : a)); // 7
```

### Generators

```js
function* fib() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const it = fib();
it.next().value; // 0
it.next().value; // 1
it.next().value; // 1
```

### fs + path

```js
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "log.txt");
fs.appendFileSync(file, new Date().toISOString() + "\n");
console.log(fs.readFileSync(file, "utf-8"));
```

### Express middleware chain

```js
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = (req, res, next) => { console.log(req.method, req.url); next(); };
app.use(logger);

app.get("/", (req, res) => res.send("ok"));

app.use((err, req, res, next) => res.status(500).send("something broke"));
```

### MongoDB shell

```shell
use fullDomain
db.students.createCollection("students")
db.students.insertMany([
  { id: 1, name: "Alice", score: 85, class: "A" },
  { id: 2, name: "Bob", score: 92, class: "B" },
  { id: 3, name: "Charlie", score: 78, class: "A" }
])
db.students.find({ name: { $regex: /a$/i } })
db.students.find({ score: { $gt: 85 }, class: { $in: ["A", "B"] } })
db.students.updateMany({}, { $inc: { score: -2 } })
db.students.aggregate([{ $match: { class: "A" } }, { $group: { _id: null, avgScore: { $avg: "$score" } } }])
db.students.renameCollection("pupils")
db.pupils.createIndex({ name: 1 })
```

Trap reminders: `$in` goes on the field (`class: { $in: [...] }`), and `$avg` needs the quoted string `"$score"`.

---

## 5. Project Tie-In

The M11 project (Node + Express + MongoDB auth app) is the real-world container for all of this. The senior reference in `FromSeniors/M11-Project-Abhin` maps directly:

| Concept | Where it lives in the project |
|---|---|
| Routes / Express Router | `routes/user.js`, `routes/admin.js` — `router.get("/login", ...)` |
| Middleware (router-level) | `middlewares/auth.js` (`checkSession`, `isLogin`, `isUserValid`), `adminAuth.js` |
| Sessions & cookies | `server.js` — `express-session` config, `req.session.user` / `req.session.admin` |
| Auth vs Authorization | Login sets session (authn); middleware gates routes (authz) |
| bcrypt / hashing | `bcrypt.hash(password, 10)`, `bcrypt.compare()` in both controllers |
| CRUD | Admin panel — create (`addUser`), read (`find`), update (`findByIdAndUpdate`), delete (`findByIdAndDelete`) |
| Body parsers | `express.urlencoded()` + `express.json()` in `server.js` |
| `.env`-style config | Session secret hardcoded in `server.js` (your version should use `dotenv`) |
| View engine | `hbs` (Handlebars) + SweetAlert2 for client UX |
| Error handling | `try/catch` in every async controller |

**Upgrade targets for your build (vs the senior's):** use `dotenv` for secrets, `nocache()` to block back-button after logout, separate `Services` layer (the task asks for Routes/Controllers/Models/**Services**), and ES6 classes.

---

## 6. Exam Talking Points (from the M11 project review)

These came out of the code review on the built project — each one is a live answer to an examiner question.

### Express 5: async errors auto-forward to errorHandler

- Express 5 automatically sends a rejected Promise from an async route handler to the error-handling middleware — no wrapper needed.
- The catch: a bare `try/catch { console.log(error) }` that sends **no response** makes the request hang forever. Either delete the try/catch (let Express forward) or render a fallback inside the catch.
- The error handler needs **4 arguments** (`(err, req, res, next)`) — that signature is what marks it as an error handler — and it must be registered **last**.

### GET vs POST for mutations

- GET must be **side-effect-free**: it's cached, bookmarked, prefetched, and crawler-followed. A delete on GET means a browser refresh or an `<img>` tag can wipe data.
- HTML forms only support GET/POST, so destructive actions use **POST** (delete did, after review) — with a session guard and a `confirm()` dialog.
- "How is your delete secured?" → session-guarded POST route + confirmation (+ CSRF token in production).

### `$regex` injection in search

- User input placed straight into `$regex` acts as a regex: `.` matches anything, `.*` matches **everything** (searching `.*` returns the whole collection), and hostile patterns can cause ReDoS.
- Fix — escape metacharacters first:

  ```js
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  ```

- It's the regex twin of SQL injection — a strong "I know the pitfalls" answer.

### `req.session.user = null` vs `req.session.destroy()`

- Setting the key to `null` clears the login flag but leaves the session record alive in the store.
- `destroy()` wipes the whole session and calls its callback — right for "account no longer exists" (`isUserValid`) and hard logout.
- In the project: user/admin logout = `null`; deleted-account guard + admin logout = `destroy()`. Know which one you used where and why.

### Static class methods as route handlers, and `this`

- A class of only `static` methods works as a handler object because the methods never touch `this` — Express's calling context doesn't matter.
- The moment a handler needs instance state, you need `.bind()` or arrow-bound class fields. Classic "what is `this` in a callback?" material (M8/M9).

### EJS locals discipline

- `<% %>` JS blocks **throw** `ReferenceError` on an undefined local — the "message is not defined" crash. `<%= %>` alone doesn't protect you.
- Rule: scan every template for `<%= ... %>` and `<% if (... ) %>` before `res.render`, and supply each name. Use `|| ""` defaults for input values.

### PRG — Post → Redirect → Get

- After a successful POST, **redirect** instead of rendering directly; otherwise a refresh resubmits the form and duplicates records.
- Success/error messages ride the query string: `/admin/dashboard?message=User created successfully`, read in the GET handler via `req.query`.

### Form validation — the server is the source of truth

- HTML `required` is **not validation**: it only rejects empty strings, so `"   "` passes, and any HTTP client skips it entirely. Whitespace-only input is the classic bypass.
- Server-side rules lived in the service layer (`validateCredentials` + `isValidEmail`) so **user register and admin add/edit share them**:
  - email → required, trimmed, `^[^\s@]+@[^\s@]+\.[^\s@]+$`
  - password → required, min 8 chars, not whitespace-only (optional on edit — blank keeps current)
- Trim at the boundary — `email.trim()` before storing — or `"a@b.com"` and `" a@b.com"` become two accounts.
- Login rule: never reveal which field was wrong (`"No user found"` vs `"Invalid password"` = **account enumeration**). Return a single generic `"Invalid credentials"`.
- Return `{ error }` from the service and let the existing form message render it — no view changes needed.

### Admin/user parity (the same rules on both sides)

- **Logout is unified on `req.session.destroy()`** — both user and admin. Setting `req.session.user = null` only clears one key and leaves the cookie alive; `destroy()` wipes the whole session server-side.
- **Sessions store identity, not a flag** — `req.session.user = { _id, email }` and `req.session.admin = { _id, email }`. A boolean flag can't be re-verified; an id can.
- **Both sides have a DB-backed guard** — user `isUserValid` and admin `isAdminValid` re-lookup the account by `session._id` on every protected request and `destroy()` the session if the account was deleted. Guards on the flag alone survive zombie sessions.
- **Validation is shared** — `validateCredentials` + `isValidEmail` live in `userService` and are imported by `adminService`, so register, login, admin login, add, and edit all enforce the same rules. Admin login also returns generic `"Invalid credentials"` (no enumeration).
- **Edit is a full mutation check** — `updateUser` rejects duplicates too (`findOne({ email, _id: { $ne: id } })`), and the controller must inspect `result.error` instead of assuming success.
- **`.lean()`** — `find()`/`findById()` for read-only rendering return plain objects: no Mongoose doc hydration overhead.

### Back button after logout — headers aren't enough

- `nocache()` sets `Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate` on every response — the first line of defence. The browser should never cache a protected page.
- But even with `no-store`, browsers can restore the last page from the **Back-Forward Cache (bfcache)** when you hit Back — no network request happens, so the server's 302 never runs and the stale logged-in UI appears.
- The reliable second line of defence is client-side:

```html
<script>
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      document.documentElement.style.visibility = "hidden";
      window.location.reload();
    }
  });
</script>
```

- `pageshow` fires on every load; `event.persisted === true` only when the page came from bfcache. Forcing a reload turns the stale render into a fresh request → protected route → no session → 302 to login.
- **Hide before reload** — set `visibility: hidden` on `<html>` *before* calling `reload()`, or the stale page paints for one frame (a split-second flash of the home page). Hiding first makes the redirect to login appear seamless.
- Order matters: `no-store` for the cache, `pageshow` reload for the bfcache, and the session guard (`isUserValid`/`isAdminValid`) as the server-side truth — three independent layers.
