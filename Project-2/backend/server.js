// the idea from the code came from the lecture on November 5th
// Initializing Server and Connecting to the Database
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose"); // import mongoose
const cors = require("cors"); // For disabling default browser security
require("dotenv").config(); // import dotenv

const { DB_URI } = process.env; // to get the variable from the dotenv file
const Product = require("./models/product"); // importing the Product model

// Middleware
server.use(express.json()); // to ensure data is transmitted as JSON
server.use(express.urlencoded({ extended: true })); // to ensure data is encoded and decoded
server.use(cors());

// Routes

// getting all products
server.get("/products", async (request, response) => {
  try {
    const products = await Product.find();
    response.json(products);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Error fetching products" });
  }
});

// posting add a product
server.post("/products", async (request, response) => {
  try {
    const { productName, brand, image, price } = request.body;

    if (!productName) {
      return response.status(400).json({ message: "productName is required" });
    }

    const newProduct = new Product({
      productName,
      brand,
      image,
      price,
    });

    const savedProduct = await newProduct.save();

    response.status(201).json({
      message: `${savedProduct.productName} added successfully`,
      product: savedProduct,
    });
  } catch (error) {
    console.log(error.message);
    response.status(400).json({ message: error.message });
  }
});

// deleting a product by the database ID
server.delete("/products/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return response
        .status(404)
        .json({ message: `Product not found with id: ${id}` });
    }

    response.json({
      message: `Product deleted successfully with id ${id}`,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

// Connecting to MongoDB and starting the server
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Database is connected\nServer is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));
