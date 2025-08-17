const express = require('express');
const router = express.Router();
const Category = require('../models/category'); // <-- use model, not controller

router.post('/', async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name
        });

        const savedCategory = await category.save();

        // Send saved category as response
        res.status(201).json(savedCategory.toObject());
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create category' });
    }
});

module.exports = router;
