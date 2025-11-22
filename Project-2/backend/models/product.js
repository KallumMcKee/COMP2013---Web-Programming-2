//to connect to the shema similar to like the contacts.js from the lecture on November 5th we did in the lecture is the best way i can discribe it
const mongoose = require("mongoose");
const Product = mongoose.model("Product", productSchema);
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
});

module.exports = Product;
