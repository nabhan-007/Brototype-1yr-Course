// The entry point: express middlewares → routes → error middleware → listen.
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// main.js does the same thing in Express: middlewares from top to bottom, in order.
app.use(express.json()); // body parser for JSON (pendings: "use of express.json")
// credentials:true is REQUIRED for the httpOnly refresh cookie — a wildcard origin silently drops it.
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'], credentials: true }));
app.use(cookieParser());
// Uploaded images are static files: /uploads/<file> is served straight from disk, no route needed.
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// App-owned static files (currently just the "no photo" placeholder) — local, so it works offline.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => res.json({ success: true, message: 'API running' }));
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/checkout', checkoutRoutes);

// 404 first, THEN the error handler — order matters
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
});
