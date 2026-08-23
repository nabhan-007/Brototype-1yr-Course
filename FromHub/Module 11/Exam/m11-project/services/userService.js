const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userSchema = require("../models/userModel");
const { isValidEmail, validateCredentials, validateRegistration } = require("../utils/validation");

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

class UserService {
  async registerUser(email, password, name, confirmPassword) {
    const validationError = validateRegistration(email, password, name, confirmPassword);
    if (validationError) return { error: validationError };

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    const existingUser = await userSchema.findOne({ email: trimmedEmail });
    if (existingUser) return { error: "User already exists" };

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await userSchema.create({ name: trimmedName, email: trimmedEmail, password: hashedPassword });
      return { success: true };
    } catch (err) {
      if (err.code === 11000) return { error: "User already exists" };
      throw err;
    }
  }

  async loginUser(email, password) {
    const validationError = validateCredentials(email, password);
    if (validationError) return { error: validationError };

    const user = await userSchema.findOne({ email: email.trim() });
    if (!user) return { error: "Invalid credentials" };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: "Invalid credentials" };

    return { success: true, user: { _id: user._id, email: user.email, name: user.name } };
  }

  async getUsers(search, page = 1, limit = 10) {
    const query = search
      ? { $or: [{ email: { $regex: escapeRegex(search), $options: "i" } }, { name: { $regex: escapeRegex(search), $options: "i" } }] }
      : {};

    const total = await userSchema.countDocuments(query);
    const users = await userSchema.find(query)
      .skip((page - 1) * limit)
      .limit(limit);
    return { users, total, page, totalPages: Math.ceil(total / limit) };
  }

  async addUser(email, password, name, confirmPassword) {
    return this.registerUser(email, password, name, confirmPassword);
  }

  async deleteUser(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return { success: true };
    await userSchema.findByIdAndDelete(id);
    return { success: true };
  }

  async updateUser(id, email, password, confirmPassword, name) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return { error: "User not found" };

    const trimmedName = (name || "").trim();
    if (!trimmedName) return { error: "Name is required" };
    if (trimmedName.length < 2) return { error: "Name must be at least 2 characters" };

    const trimmedEmail = (email || "").trim();
    if (!trimmedEmail) return { error: "Email is required" };
    if (!isValidEmail(trimmedEmail))
      return { error: "Enter a valid email address" };

    const existingUser = await userSchema.findOne({
      email: trimmedEmail,
      _id: { $ne: id },
    });
    if (existingUser) return { error: "Email already in use" };

    const updatedUser = { name: trimmedName, email: trimmedEmail };
    if (password && password.trim().length > 0) {
      if (password.trim().length < 8) {
        return { error: "Password must be at least 8 characters" };
      }
      if (password !== confirmPassword) {
        return { error: "Passwords do not match" };
      }
      updatedUser.password = await bcrypt.hash(password, 10);
    }

    await userSchema.findByIdAndUpdate(id, { $set: updatedUser });
    return { success: true };
  }
}

module.exports = new UserService();
