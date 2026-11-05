// Checkout: marks the cart's products as sold so they disappear from the listing.
const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// POST /api/checkout { productIds: [...] } — protected: you must be logged in to buy
router.post('/', auth, async (req, res, next) => {
  try {
    const { productIds } = req.body;
    if (!Array.isArray(productIds) || productIds.length === 0) {
      return res.status(400).json({ success: false, message: 'productIds array is required' });
    }

    // Self-purchase guard: a seller can never buy their own listing.
    // This check MUST live in the backend — the browser UI can always be bypassed (trust boundary).
    const ownCount = await Product.countDocuments({ _id: { $in: productIds }, seller: req.user.id });
    if (ownCount > 0) {
      return res.status(400).json({ success: false, message: 'You cannot buy your own listing' });
    }

    // Look up the still-unsold subset FIRST so the response can name exactly what was bought;
    // updateMany re-checks isSold inside Mongo (idempotent double-runs just touch nothing extra).
    const unsold = await Product.find({ _id: { $in: productIds }, isSold: false }).select('_id');
    const purchasedIds = unsold.map((p) => p._id.toString());
    if (purchasedIds.length > 0) {
      await Product.updateMany({ _id: { $in: purchasedIds } }, { $set: { isSold: true } });
    }
    res.json({ success: true, data: { purchased: purchasedIds.length, purchasedIds } });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
