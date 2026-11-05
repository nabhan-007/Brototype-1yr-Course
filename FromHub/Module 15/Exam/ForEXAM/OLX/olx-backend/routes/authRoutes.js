// Routes for creating a user and logging in. Both PUBLIC (no token needed yet).
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// POST /api/auth/register  → 201 Created (pendings: HTTP 200 vs 201)
router.post('/register', async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ success: false, message: 'name, email, password are required' });
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
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ success: true, token, user: { id: user._id, email: user.email, name: user.name } });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
