// Product routes: public listing (unsold only), protected create/update, "mine" for the Sell page.
const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// GET /api/products?category=&minPrice=&maxPrice=&q=  — filters via QUERY PARAMETERS (server-side)
router.get('/', async (req, res, next) => {
  try {
    const { category, minPrice, maxPrice, q } = req.query;
    const filter = { isSold: false }; // sold products never appear in the listing (portal requirement)

    if (category) filter.category = category;
    if (q) filter.title = { $regex: q, $options: 'i' }; // simple text search on title
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
});

// GET /api/products/mine — ALL of this user's listings incl. SOLD ones (the UI badges them);
// the public listing stays the only place where sold items are hidden.
router.get('/mine', auth, async (req, res, next) => {
  try {
    const products = await Product.find({ seller: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
});

// POST /api/products — create a listing (PROTECTED: needs a valid JWT)
router.post('/', auth, async (req, res, next) => {
  try {
    const { title, description, price, category, image } = req.body;
    if (!title || !description || !price || !category) {
      return res.status(400).json({ success: false, message: 'title, description, price, category are required' });
    }
    const product = await Product.create({ title, description, price, category, image, seller: req.user.id });
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:id — update own listing. Uses PATH PARAMS for the id (pendings: /entity/<id>, not /update)
router.put('/:id', auth, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    // 403 FORBIDDEN vs 401 UNAUTHORIZED: token is valid (auth passed) but this user doesn't OWN the listing
    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not your listing' });
    }

    const { title, description, price, category, image } = req.body;
    if (price !== undefined && (price <= 0)) {
      return res.status(400).json({ success: false, message: 'price must be positive' });
    }
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { title, description, price, category, image },
      { new: true, runValidators: true }
    );
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id — remove own listing entirely (CRUD-complete; portal demands add/update only).
// Same ownership family as PUT: 404 if missing, 403 if it's someone else's listing.
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not your listing' });
    }

    await product.deleteOne();
    res.json({ success: true, message: 'Listing deleted' }); // 200: nothing was created, nothing is returned from Mongo
  } catch (err) {
    next(err);
  }
});

module.exports = router;
