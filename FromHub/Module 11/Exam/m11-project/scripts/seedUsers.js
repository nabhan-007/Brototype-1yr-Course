const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("../models/userModel");

dotenv.config({ quiet: true });

const users = [
  { name: "Aarav Menon", email: "aarav@gmail.com" },
  { name: "Diya Nair", email: "diya.nair@gmail.com" },
  { name: "Rohan Patel", email: "rohan.patel@gmail.com" },
  { name: "Ananya Sharma", email: "ananya.s@gmail.com" },
  { name: "Vikram Das", email: "vikram.das@gmail.com" },
  { name: "Meera Joshi", email: "meera.joshi@gmail.com" },
  { name: "Arjun Reddy", email: "arjun.reddy@gmail.com" },
  { name: "Priya Iyer", email: "priya.iyer@gmail.com" },
  { name: "Karthik Rao", email: "karthik.rao@gmail.com" },
  { name: "Nisha Gupta", email: "nisha.gupta@gmail.com" },
  { name: "Rahul Verma", email: "rahul.verma@gmail.com" },
  { name: "Sneha Pillai", email: "sneha.p@gmail.com" },
  { name: "Aditya Singh", email: "aditya.singh@gmail.com" },
  { name: "Pooja Menon", email: "pooja.menon@gmail.com" },
  { name: "Siddharth Kumar", email: "sid.kumar@gmail.com" },
  { name: "Ishita Bose", email: "ishita.bose@gmail.com" },
  { name: "Nikhil Thomas", email: "nikhil.t@gmail.com" },
  { name: "Divya Rajan", email: "divya.rajan@gmail.com" },
  { name: "Manav Desai", email: "manav.d@gmail.com" },
  { name: "Aisha Khan", email: "aisha.khan@gmail.com" },
  { name: "Pranav Kulkarni", email: "pranav.k@gmail.com" },
  { name: "Tanya Chopra", email: "tanya.c@gmail.com" },
  { name: "Gaurav Mishra", email: "gaurav.m@gmail.com" },
  { name: "Ritika Sen", email: "ritika.sen@gmail.com" },
  { name: "Varun Bhat", email: "varun.bhat@gmail.com" },
];

const DEFAULT_PASSWORD = "User@123";

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    const docs = users.map((u) => ({
      name: u.name,
      email: u.email,
      password: hashedPassword,
    }));

    const result = await User.insertMany(docs);
    console.log(`Seeded ${result.length} users (password: ${DEFAULT_PASSWORD})`);

    await mongoose.disconnect();
    console.log("Done.");
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
