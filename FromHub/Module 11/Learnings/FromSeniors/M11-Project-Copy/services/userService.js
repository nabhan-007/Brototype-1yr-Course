const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userSchema = require("../models/userModel");
const { isValidEmail, validateCredentials } = require("../utils/validation");

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

class UserService {
  async registerUser(email, password) {
    const validationError = validateCredentials(email, password);
    if (validationError) return { error: validationError };

    const trimmedEmail = email.trim();
    if (password.trim().length < 8) {
      return { error: "Password must be at least 8 characters" };
    }

    const existingUser = await userSchema.findOne({ email: trimmedEmail });
    if (existingUser) return { error: "User already exists" };

    const hashedPassword = await bcrypt.hash(password, 10);
    await userSchema.create({ email: trimmedEmail, password: hashedPassword });
    return { success: true };
  }

  async loginUser(email, password) {
    const validationError = validateCredentials(email, password);
    if (validationError) return { error: validationError };

    const user = await userSchema.findOne({ email: email.trim() });
    if (!user) return { error: "Invalid credentials" };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: "Invalid credentials" };

    return { success: true, user };
  }

  async getUsers(search) {
    const query = search
      ? { email: { $regex: escapeRegex(search), $options: "i" } }
      : {};
    return userSchema.find(query);
  }

  async addUser(email, password) {
    const validationError = validateCredentials(email, password);
    if (validationError) return { error: validationError };

    const trimmedEmail = email.trim();
    if (password.trim().length < 8) {
      return { error: "Password must be at least 8 characters" };
    }

    const existingUser = await userSchema.findOne({ email: trimmedEmail });
    if (existingUser) return { error: "User already exists" };

    const hashedPassword = await bcrypt.hash(password, 10);
    await userSchema.create({ email: trimmedEmail, password: hashedPassword });
    return { success: true };
  }

  async deleteUser(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return { success: true };
    await userSchema.findByIdAndDelete(id);
    return { success: true };
  }

  async updateUser(id, email, password) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return { error: "User not found" };

    const trimmedEmail = (email || "").trim();
    if (!trimmedEmail) return { error: "Email is required" };
    if (!isValidEmail(trimmedEmail))
      return { error: "Enter a valid email address" };

    const existingUser = await userSchema.findOne({
      email: trimmedEmail,
      _id: { $ne: id },
    });
    if (existingUser) return { error: "Email already in use" };

    const updatedUser = { email: trimmedEmail };
    if (password && password.trim().length > 0) {
      if (password.trim().length < 8) {
        return { error: "Password must be at least 8 characters" };
      }
      updatedUser.password = await bcrypt.hash(password, 10);
    }

    await userSchema.findByIdAndUpdate(id, { $set: updatedUser });
    return { success: true };
  }
}

module.exports = new UserService();
