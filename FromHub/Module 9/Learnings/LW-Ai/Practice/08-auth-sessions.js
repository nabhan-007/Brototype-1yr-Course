// Session 8: Auth & State Management + Milestone 5
// Run: node 08-auth-sessions.js
// Then open http://localhost:3000/login

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;

// ============================================
// BODY PARSING + VIEW ENGINE
// ============================================
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

// ============================================
// CACHE-CONTROL: Block back-button after logout
// ============================================
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// ============================================
// SESSION SETUP
// ============================================
app.use(session({
  secret: 'nabhan-exam-prep-2026',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 30  // 30 minutes
  }
}));

// ============================================
// MOCK USER DATABASE
// ============================================
const USERS = {
  admin: { username: 'admin', password: 'admin123' },
  nabhan: { username: 'nabhan', password: 'pass123' }
};

// ============================================
// ROUTES
// ============================================

// --- LOGIN PAGE ---
app.get('/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/home');  // Already logged in
  }
  res.render('login', { error: null });
});

// --- LOGIN SUBMIT ---
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Server-side validation
  if (!username || !password) {
    return res.render('login', { error: 'Username and password are required' });
  }

  // Check credentials against mock database
  const user = USERS[username];
  if (user && user.password === password) {
    req.session.user = { username: user.username };
    res.redirect('/home');
  } else {
    res.render('login', { error: 'Invalid username or password' });
  }
});

// --- HOME PAGE (protected) ---
app.get('/home', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');  // Not logged in → redirect
  }
  res.render('home', { user: req.session.user });
});

// --- LOGOUT ---
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.clearCookie('connect.sid');  // Remove session cookie
    res.redirect('/login');
  });
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`\n🚀 Session 8 server running at http://localhost:${PORT}/login`);
  console.log('\nLogin credentials:');
  console.log('  Username: admin   Password: admin123');
  console.log('  Username: nabhan  Password: pass123');
  console.log('\nWhat to test:');
  console.log('  1. Login with correct credentials → see home page');
  console.log('  2. Login with wrong credentials → see error on login page');
  console.log('  3. Click "Signout" → back to login');
  console.log('  4. After logout, press Back button → should NOT show home page (Cache-Control)');
  console.log('  5. Open /home directly without login → redirects to /login\n');
});
