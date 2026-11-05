// Auth middleware: guards protected routes. Reads "Authorization: Bearer <token>",
// verifies the JWT signature, and attaches the decoded user to req.user.
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // signature check = no forgery
    req.user = decoded; // { id, email }
    next();
  } catch (err) {
    // jsonwebtoken throws on invalid signature OR expiry — both mean "not authenticated"
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}

module.exports = auth;
