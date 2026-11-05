// LAST in the middleware chain. Two jobs:
// 1. notFound — nothing matched the URL → 404
// 2. errorHandler — any next(err) / thrown error lands here → structured JSON + correct status code
//    (portal requirement h: Express error-handling middleware)

const notFound = (req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
};

const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Server error';

  // Mongoose validation error (e.g. required field missing) → 400
  if (err.name === 'ValidationError') status = 400;
  // bad ObjectId in a URL path or request body (e.g. /api/products/xyz) → 400, never 500
  if (err.name === 'CastError') { status = 400; message = 'Invalid ID format'; }
  // duplicate key (unique email raced past the findOne) → 400
  if (err.code === 11000) { status = 400; message = 'Duplicate field value'; }
  // bad JSON body → 400
  if (err.type === 'entity.parse.failed') status = 400;

  res.status(status).json({ success: false, message });
};

module.exports = { notFound, errorHandler };
