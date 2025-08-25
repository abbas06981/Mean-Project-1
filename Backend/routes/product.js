const router = require('express').Router();
const { addProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct } = require('../db/models/productHandler');



router.get("", getAllProducts);
router.get("/:id", getProductById);
router.post("", addProduct);
// UPDATE
router.put("/:id", updateProduct);   // full update
// DELETE
router.delete("/:id", deleteProduct);


module.exports = router;