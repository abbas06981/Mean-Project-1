const Category = require("../db/schemas/category");

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

module.exports = {
    createCategory,
    updateCategory
};
