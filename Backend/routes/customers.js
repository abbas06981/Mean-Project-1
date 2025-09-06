const express = require('express');
const router = express.Router();
const {
    getNewProducts,
    getFeaturedProducts
} = require('../db/models/productHandler');


router.get("/home/new-products", getNewProducts);
router.get("/home/featured-products", getFeaturedProducts);


module.exports = router;