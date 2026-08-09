const bcrypt = require("bcrypt");
const adminSchema = require("../models/adminModel");
const { validateCredentials } = require("./userService");

class AdminService {
  async loginAdmin(email, password) {
    const validationError = validateCredentials(email, password);
    if (validationError) return { error: validationError };

    const admin = await adminSchema.findOne({ email: email.trim() });
    if (!admin) return { error: "Invalid credentials" };

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return { error: "Invalid credentials" };

    return { success: true, admin };
  }
}

module.exports = new AdminService();
