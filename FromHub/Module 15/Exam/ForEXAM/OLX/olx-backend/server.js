// The entry point: express middlewares → routes → error middleware → listen.
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// main.js does the same thing in Express: middlewares from top to bottom, in order.
app.use(express.json()); // body parser for JSON (pendings: "use of express.json")
app.use(cors());         // allow the Vite dev server (unknown port 5173) to call this API

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
