require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const adminSchema = require("../models/adminModel");

const email = process.argv[2] || "admin@test.com";
const password = process.argv[3] || "admin123";

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const existing = await adminSchema.findOne({ email });
    if (existing) {
      console.log(`Admin already exists: ${email}`);
      process.exit(0);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await adminSchema.create({ email, password: hashedPassword });
    console.log(`Admin created: ${email}`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();
