// Session 6: Express Middleware + Milestone 4
// Run: node 06-middleware.js

const express = require('express');
const app = express();
const PORT = 3000;

// ============================================
// THEORY RECAP IN CODE:
// Middleware = function(req, res, next) that runs BEFORE route handler
// Types: application-level, router-level, error-handling
// Built-in: express.json(), express.urlencoded(), express.static()
// ============================================

// ============================================
// MIDDLESTONE 4: Middleware in Action
// ============================================

// --- 1. Built-in Middleware: Body Parsing ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- 2. Application-level Middleware: Logger ---
// Runs on EVERY request — logs method + URL + timestamp
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();  // MUST call next() or request hangs
});

// --- 3. Custom Middleware: Request Timer ---
// Logs how long each request takes
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});

// --- 4. Route-level Middleware: Auth Check ---
// Only used on specific routes
function requireAuth(req, res, next) {
  const token = req.headers['authorization'];
  if (token === 'Bearer secret123') {
    next();  // Authorized — continue to route
  } else {
    res.status(401).json({ error: 'Unauthorized — missing or invalid token' });
  }
}

// --- 5. Custom Middleware: Validate Request Body ---
function validateUser(req, res, next) {
  const { name, age } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  if (!age || typeof age !== 'number' || age < 0 || age > 150) {
    return res.status(400).json({ error: 'Age is required and must be a number (0-150)' });
  }

  next();  // Validation passed
}

// ============================================
// ROUTES
// ============================================

// Simple routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Session 6 — Middleware demo!' });
});

// POST /users — uses validateUser middleware before creating
app.post('/users', validateUser, (req, res) => {
  const { name, age } = req.body;
  res.status(201).json({ message: 'User created', user: { name, age } });
});

// GET /admin — uses requireAuth middleware (router-level)
app.get('/admin', requireAuth, (req, res) => {
  res.json({ message: 'Welcome to the admin panel!' });
});

// GET /public — no auth needed
app.get('/public', (req, res) => {
  res.json({ message: 'This is a public page — anyone can access' });
});

// --- Response timing (using req.startTime from earlier middleware) ---
app.get('/timed', (req, res) => {
  const duration = Date.now() - req.startTime;
  res.json({ message: 'Response time measured by middleware', duration: `${duration}ms` });
});

// ============================================
// ERROR-HANDLING MIDDLEWARE
// Must have 4 params: (err, req, res, next)
// ============================================

// Route that intentionally throws an error
app.get('/crash', (req, res, next) => {
  const err = new Error('Something broke on the server!');
  err.status = 500;
  next(err);  // Pass error to error-handling middleware
});

// Error handler — Express recognizes 4-param function as error middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(`[ERROR] ${err.message}`);
  res.status(statusCode).json({
    error: err.message,
    status: statusCode
  });
});

// ============================================
// ROUTER CHAINING demo
// ============================================
const router = express.Router();

router
  .route('/items')
  .get((req, res) => {
    res.json({ items: ['item1', 'item2', 'item3'] });
  })
  .post((req, res) => {
    res.status(201).json({ message: 'Item created' });
  });

app.use('/api', router);

// --- Start server ---
app.listen(PORT, () => {
  console.log(`\n🚀 Session 6 server running at http://localhost:${PORT}`);
  console.log('\nTry these URLs:');
  console.log(`  GET    http://localhost:${PORT}/                    → welcome`);
  console.log(`  POST   http://localhost:${PORT}/users              → create user (send JSON body)`);
  console.log(`  GET    http://localhost:${PORT}/admin              → 401 (no auth)`);
  console.log(`  GET    http://localhost:${PORT}/admin              → 200 (with header: Bearer secret123)`);
  console.log(`  GET    http://localhost:${PORT}/public             → no auth needed`);
  console.log(`  GET    http://localhost:${PORT}/timed              → response time`);
  console.log(`  GET    http://localhost:${PORT}/crash              → 500 error handler`);
  console.log(`  GET    http://localhost:${PORT}/api/items          → router chaining`);
  console.log(`  POST   http://localhost:${PORT}/api/items          → router chaining`);
  console.log('\nTip: For /admin, add header: Authorization = Bearer secret123');
  console.log('Tip: For POST /users, send JSON body: {"name":"Nabhan", "age":25}');
  console.log('Tip: For /crash, watch the console for the error log.\n');
});
