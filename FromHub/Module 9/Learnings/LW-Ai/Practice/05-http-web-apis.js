// Session 5: HTTP & Web APIs + Milestone 3
// Run: node 05-http-web-apis.js
// Then open http://localhost:3000 in browser or use Postman

const express = require('express');
const app = express();
const PORT = 3000;

// ============================================
// THEORY RECAP IN CODE:
// HTTP Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
// Status Codes: 200, 201, 400, 401, 404, 500
// Query params: ?key=value  →  req.query
// Path params: /resource/:id  →  req.params
// ============================================

// --- Mock data (simulating a database) ---
let users = [
  { id: 1, name: "Alice", age: 25, city: "Mumbai" },
  { id: 2, name: "Bob", age: 30, city: "Delhi" },
  { id: 3, name: "Charlie", age: 22, city: "Mumbai" }
];

// ============================================
// MILESTONE 3: First Express Routes
// ============================================

// --- GET all users (with optional query filtering) ---
app.get('/users', (req, res) => {
  let result = [...users];

  // Filter by city if query param provided
  if (req.query.city) {
    result = result.filter(u => u.city.toLowerCase() === req.query.city.toLowerCase());
  }

  // Filter by age if query param provided
  if (req.query.age) {
    result = result.filter(u => u.age === parseInt(req.query.age));
  }

  console.log('Query params:', req.query);
  res.status(200).json(result);
});

// --- GET single user by ID (path param) ---
app.get('/users/:id', (req, res) => {
  console.log('Path params:', req.params);
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

// --- POST create a new user ---
app.post('/users', (req, res) => {
  // In real apps, we'd use req.body (need express.json() middleware)
  // For demo, we'll simulate
  const newUser = {
    id: users.length + 1,
    name: "New User",
    age: 28,
    city: "Bangalore"
  };

  users.push(newUser);
  res.status(201).json(newUser); // 201 = Created
});

// --- PUT full update (replace entire resource) ---
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Full replace — all fields must be provided
  users[index] = { id: id, name: "Updated Name", age: 99, city: "Chennai" };
  res.status(200).json(users[index]);
});

// --- PATCH partial update (only some fields) ---
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Partial update — only update what's sent
  user.name = "Patched Name";
  // age and city remain UNCHANGED
  res.status(200).json(user);
});

// --- DELETE a user ---
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted" });
});

// --- Validation demo (server-side) ---
app.get('/validate-age', (req, res) => {
  const age = req.query.age;

  // Server-side validation — client can't bypass this
  if (!age) {
    return res.status(400).json({ error: "Age query param is required" });
  }

  if (isNaN(age) || parseInt(age) < 0 || parseInt(age) > 150) {
    return res.status(400).json({ error: "Age must be a valid number (0-150)" });
  }

  res.status(200).json({ message: `Age ${age} is valid`, age: parseInt(age) });
});

// --- Cache-Control header demo ---
app.get('/no-cache', (req, res) => {
  res.set('Cache-Control', 'no-store'); // Never cache (for auth pages)
  res.status(200).json({ message: "This response is never cached" });
});

app.get('/cached', (req, res) => {
  res.set('Cache-Control', 'max-age=3600'); // Cache for 1 hour
  res.status(200).json({ message: "This response is cached for 1 hour" });
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`\n🚀 Session 5 server running at http://localhost:${PORT}`);
  console.log('\nTry these URLs:');
  console.log(`  GET    http://localhost:${PORT}/users              → all users`);
  console.log(`  GET    http://localhost:${PORT}/users?city=Mumbai  → filter by city`);
  console.log(`  GET    http://localhost:${PORT}/users?age=25       → filter by age`);
  console.log(`  GET    http://localhost:${PORT}/users/1            → single user (path param)`);
  console.log(`  GET    http://localhost:${PORT}/users/99           → 404 not found`);
  console.log(`  POST   http://localhost:${PORT}/users              → create user (201)`);
  console.log(`  PUT    http://localhost:${PORT}/users/1            → full update`);
  console.log(`  PATCH  http://localhost:${PORT}/users/1            → partial update`);
  console.log(`  DELETE http://localhost:${PORT}/users/1            → delete user`);
  console.log(`  GET    http://localhost:${PORT}/validate-age?age=25 → valid`);
  console.log(`  GET    http://localhost:${PORT}/validate-age        → 400 error`);
  console.log(`  GET    http://localhost:${PORT}/no-cache            → no-cache header`);
  console.log(`  GET    http://localhost:${PORT}/cached              → 1hr cache header`);
  console.log('\nTip: Use Postman or browser DevTools Network tab to see status codes and headers.\n');
});
