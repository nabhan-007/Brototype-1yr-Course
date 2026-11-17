// A user = one account. Email unique, password hashed on save (never stored raw).
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    name: { type: String, required: true, trim: true, match: [/^[A-Za-z\s.'-]+$/, 'Name cannot contain numbers'] },
  },
  { timestamps: true }
);

// "pre save" hook: runs before every user.save() — hashes the password ONCE logic, everywhere.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
