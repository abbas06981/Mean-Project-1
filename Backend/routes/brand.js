const express = require('express');
const router = express.Router();

const { getBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
} = require("../db/models/brandHandler");


router.get("", getBrands);
router.get("/:id", getBrandById);
router.post("", createBrand);
// UPDATE
router.put("/:id", updateBrand);   // full update
// DELETE
router.delete("/:id", deleteBrand);


module.exports = router;

