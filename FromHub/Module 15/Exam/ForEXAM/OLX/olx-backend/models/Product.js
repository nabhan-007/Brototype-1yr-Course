// A product = one listing. isSold flag is what makes it vanish from the public listing after checkout.
const mongoose = require('mongoose');

// Shown when a listing is saved with no photo at all (no upload, no link).
// Served by this API from public/ — a local file, so it never depends on an external host.
const PLACEHOLDER_IMAGE = '/placeholder.svg';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 1 },
    category: { type: String, required: true, trim: true },
    image: { type: String, default: PLACEHOLDER_IMAGE },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isSold: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
