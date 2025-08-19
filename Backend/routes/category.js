const express = require('express');
const router = express.Router();

const { createCategory, updateCategory } = require("../handler/categoryHandler");

router.post("", createCategory);
router.put("/:id", updateCategory);

module.exports = router;