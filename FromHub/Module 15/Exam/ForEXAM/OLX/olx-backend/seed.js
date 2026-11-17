// seed.js — one-shot demo data filler. Run: node seed.js
// Wipes products, keeps/creates the two demo accounts, inserts realistic listings (a couple SOLD for the badge demo).
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');

// Real product photos from Wikimedia Commons (CC-licensed), 960px thumbs — one per listing.
const W = (path) => `https://thumb.wikimedia.org/wikipedia/commons/thumb/${path}`;

async function ensureUser(email, name, password) {
  const found = await User.findOne({ email });
  if (found) return found;
  return User.create({ email, name, password }); // pre-save hook hashes the password
}

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  const demo = await ensureUser('demo@olx.com', 'Demo User', 'demo123');
  const test = await ensureUser('testuser@olx.com', 'Test User', 'test123');

  await Product.deleteMany({});

  const data = [
    // demo user — 5 live listings + 1 already sold
    { seller: demo._id, title: 'Royal Enfield Classic 350', description: '34,000 km driven, single owner, papers clear, insurance till 2027', price: 145000, category: 'Vehicles', isSold: false,
      image: W('7/73/Royal_Enfield_Classic_350.jpg/960px-Royal_Enfield_Classic_350.jpg') },
    { seller: demo._id, title: 'iPhone 13 128GB', description: 'Blue, 91% battery health, bill and box available', price: 48000, category: 'Phones', isSold: false,
      image: W('9/91/Back_of_the_iPhone_13_Pro.jpg/960px-Back_of_the_iPhone_13_Pro.jpg') },
    { seller: demo._id, title: '3-Seater Fabric Sofa', description: 'Grey, bought 2024, no tears, cushions included', price: 18000, category: 'Furniture', isSold: false,
      image: W('c/c5/Cozy_living_room_with_a_gray_sofa.jpg/960px-Cozy_living_room_with_a_gray_sofa.jpg') },
    { seller: demo._id, title: 'Philips Air Fryer HD9200', description: 'Used twice, everything in the box, no scratches', price: 4500, category: 'Electronics', isSold: false,
      image: W('d/d3/Airfryer_Convert.jpg/960px-Airfryer_Convert.jpg') },
    { seller: demo._id, title: 'Study Table with Chair', description: 'Wooden table 4ft + comfortable chair, negotiable', price: 2500, category: 'Furniture', isSold: false,
      image: W('7/77/Big_Desk_Home_Office_Carrollton_New_Orleans.jpg/960px-Big_Desk_Home_Office_Carrollton_New_Orleans.jpg') },
    { seller: demo._id, title: 'Split AC 1.5 Ton', description: 'Kelvinator, 3 years old, serviced last month — SOLD', price: 22000, category: 'Other', isSold: true,
      image: W('9/97/DAIKIN_AIR_CONDITIONER_INDOOR_UNIT.jpg/960px-DAIKIN_AIR_CONDITIONER_INDOOR_UNIT.jpg') },
    // test user — 4 live listings + 1 already sold
    { seller: test._id, title: 'Samsung Galaxy S22', description: 'Phantom black, 2 years old, slight scratch on back glass', price: 35000, category: 'Phones', isSold: false,
      image: W('9/9e/Back_of_the_Samsung_Galaxy_S22.jpg/960px-Back_of_the_Samsung_Galaxy_S22.jpg') },
    { seller: test._id, title: 'Full Cricket Kit', description: 'Bat, gloves, pads, helmet, kit bag — size SH', price: 5500, category: 'Other', isSold: false,
      image: W('3/38/Cricket_bat_at_Fenner%27s_Field_ground%2C_Cambridge_University_Cricket_Club%2C_England_01.jpg/960px-Cricket_bat_at_Fenner%27s_Field_ground%2C_Cambridge_University_Cricket_Club%2C_England_01.jpg') },
    { seller: test._id, title: 'Dell 24 Inch Monitor', description: 'Full HD IPS panel, HDMI + VGA, incl. stand', price: 9500, category: 'Electronics', isSold: false,
      image: W('e/e1/Dell_Computer_Monitor.png/960px-Dell_Computer_Monitor.png') },
    { seller: test._id, title: 'Hero Sprint Bicycle', description: '26 inch, recently serviced, brakes changed', price: 7000, category: 'Vehicles', isSold: false,
      image: W('9/92/Azor_Oma_Oklahoma_R3D_Violet_Matt.jpg/960px-Azor_Oma_Oklahoma_R3D_Violet_Matt.jpg') },
    { seller: test._id, title: 'Microwave Oven 20L', description: 'Solo microwave, working perfectly, light defect — SOLD', price: 6000, category: 'Electronics', isSold: true,
      image: W('b/bb/Microwave_Oven.jpg/960px-Microwave_Oven.jpg') },
  ];

  for (const p of data) {
    await Product.create(p);
  }

  const counts = await Product.aggregate([{ $group: { _id: '$seller', total: { $sum: 1 }, unsold: { $sum: { $cond: ['$isSold', 0, 1] } } } }]);
  console.log('Seeded products:', JSON.stringify(counts.map((c) => ({ user: String(c._id) === String(demo._id) ? 'demo' : 'test', total: c.total, live: c.unsold }))));
  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
