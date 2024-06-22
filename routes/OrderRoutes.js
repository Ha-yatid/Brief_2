// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// CRUD operations for Orders
//Create New Order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//Get all order
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products').populate('user');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
