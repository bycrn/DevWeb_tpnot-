const mongoose = require("mongoose");
const Product = require("./models/product");
const seedDatabase = require("./seed");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/webshop");
    console.log("MongoDB connected");

    const count = await Product.countDocuments();
    if (count === 0) {
      console.log("Inserting default products");
      await seedDatabase();
    } else {
      console.log("Products collection is not empty");
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

module.exports = connectDB;
