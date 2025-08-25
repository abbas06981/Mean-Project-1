const express = require('express');
const router = express.Router();

const { deleteCategory,
    createCategory,
    updateCategory,
    patchCategory,
    getCategories,
    getCategoryById } = require("../db/models/categoryHandler");


router.get("", getCategories);
router.get("/:id", getCategoryById);
router.post("", createCategory);
// UPDATE
router.put("/:id", updateCategory);   // full update
router.patch("/:id", patchCategory);  // partial update

// DELETE
router.delete("/:id", deleteCategory);

module.exports = router;