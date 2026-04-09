// routes.js
const express = require('express');
const router = express.Router();

// Mock data
const products = [
    { id: 101, name: 'Laptop', price: 999 },
    { id: 102, name: 'Smartphone', price: 699 }
];

// GET all products
router.get('/products', (req, res) => {
    res.json({ success: true, count: products.length, data: products });
});

// GET single product
router.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
});

// POST new product
router.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 101,
        name: req.body.name || 'Unknown',
        price: req.body.price || 0
    };
    products.push(newProduct);
    res.status(201).json({ success: true, data: newProduct });
});

// Adding some padding lines here to make the file larger.
// These are just comments.
// We are building a REST API layout.
// Using Express Router helps organize code better.
// Line 35
// Line 36
// Line 37
// Line 38
// Line 39
// Line 40

module.exports = router;
