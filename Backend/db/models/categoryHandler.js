const Category = require("../schemas/category");

const createCategory = async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name
        });

        const savedCategory = await category.save();

        res.status(201).json(savedCategory.toObject());
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create category' });
    }
};
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error });
    }
};

// GET BY ID
const getCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Error fetching category", error });
    }
};


const patchCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body; // only the fields you want to change

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
            message: "Patched successfully",
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).json({ message: "Error patching category", error });
    }
};

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const model = req.body;

        const updatedCategory = await Category.findOneAndUpdate(
            { _id: id },
            { $set: model },   // ✅ safer update
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
            message: "Updated successfully",
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error });
    }
};


const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
            message: "Deleted successfully",
            data: deletedCategory
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error });
    }
};
module.exports = {
    deleteCategory,
    createCategory,
    updateCategory,
    patchCategory,
    getCategories,
    getCategoryById
};
