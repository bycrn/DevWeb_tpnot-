const Product = require("./models/product");

module.exports = async function seedDatabase() {
  try {
    console.log("Seeding the database...");

    const products = [
      { name: "Germinal 1", price: 10 },
      { name: "Germinal 2", price: 20 },
      { name: "Germinal 3", price: 30 },
      { name: "Germinal 4", price: 40 },
      { name: "Germinal 5", price: 50 },
      { name: "Germinal 6", price: 60 },
      { name: "Germinal 7", price: 70 },
      { name: "Germinal 8", price: 80 },
      { name: "Germinal 9", price: 90 },
      { name: "Germinal 10", price: 100 },
    ];

    await Product.insertMany(products);
    console.log("Default products inserted");

    
  } catch (error) {
    console.error("Error inserting default products :", error);
  }
};
