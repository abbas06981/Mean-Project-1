const Product = require("../schemas/products");

const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: "Product added successfully", product: product.toObject() });
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }
};
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products.map(product => product.toObject()));
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product.toObject());
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};


const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct,
        });
    } catch (error) {
        console.error("Update error:", error); // 👈 log full error
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};



module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct
}