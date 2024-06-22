const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// CRUD operations for Products
//Create New Product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get All products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a Product
router.put('/:id', async (req, res) => {
    try {
      const product = await User.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'product not found' });
      }
  
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.price = req.body.price || product.price;
      product.quantity = req.body.quantity || product.quantity;
  
      const updateProduct = await product.save();
      res.status(200).json(updateProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;
