// Auth routes: register, login, refresh, logout.
// Two tokens, two lifetimes:
//   ACCESS token  — short (15 min default). Sent in the Authorization header, never in a cookie.
//   REFRESH token — long (7 days). httpOnly cookie: JavaScript cannot read it, so XSS cannot steal it.
// The client sends the access token; when it expires it calls /refresh and gets a new one.
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const ACCESS_TTL = process.env.ACCESS_TOKEN_TTL || '15m';
const REFRESH_TTL = process.env.REFRESH_TOKEN_TTL || '7d';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET;

const signAccess = (user) =>
  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: ACCESS_TTL });

const signRefresh = (user) =>
  jwt.sign({ id: user._id }, REFRESH_SECRET, { expiresIn: REFRESH_TTL });

const cookieOptions = {
  httpOnly: true,                                  // no document.cookie access → XSS cannot exfiltrate it
  sameSite: 'lax',                                 // cross-site POSTs cannot carry it
  secure: process.env.NODE_ENV === 'production',   // HTTPS only in prod; localhost is http
  path: '/api/auth',                               // only the auth endpoints ever receive it
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// POST /api/auth/register  → 201 Created (pendings: HTTP 200 vs 201)
router.post('/register', async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ success: false, message: 'name, email, password are required' });
    }
    // Client-side validation is a courtesy; the server is the trust boundary.
    if (/\d/.test(name)) {
      return res.status(400).json({ success: false, message: 'Name cannot contain numbers' });
    }
    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    const user = await User.create({ email, password, name }); // hashing happens in the pre-save hook
    res.status(201).json({ success: true, data: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    next(err); // async errors are forwarded to the error middleware
  }
});

// POST /api/auth/login → returns a JWT. 200 (not 201): nothing was created, a session token was issued.
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'email and password are required' });
    }
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    // payload = claims (who the token is about); signature proves the server issued it
    const token = signAccess(user);
    res.cookie('refreshToken', signRefresh(user), cookieOptions); // httpOnly → frontend JS never sees it
    res.json({ success: true, token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/refresh → new ACCESS token from the cookie. 401 = cookie missing/expired → log in again.
router.post('/refresh', async (req, res, next) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) {
      return res.status(401).json({ success: false, message: 'No refresh token' });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, REFRESH_SECRET); // signature + expiry, same check as any JWT
    } catch (err) {
      return res.status(401).json({ success: false, message: 'Refresh token expired — log in again' });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, message: 'User no longer exists' });
    }
    res.json({ success: true, token: signAccess(user) });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/logout → clears the cookie. The access token dies on its own when it expires.
router.post('/logout', (req, res) => {
  res.clearCookie('refreshToken', { path: '/api/auth' });
  res.json({ success: true, message: 'Logged out' });
});

module.exports = router;
