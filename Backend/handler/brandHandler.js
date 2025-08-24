const Brands = require("../db/schemas/brand");


const getBrands = async (req, res) => {
    try {
        const brands = await Brands.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ message: "Error fetching brands", error });
    }
};

const getBrandById = async (req, res) => {
    try {
        const id = req.params.id;
        const brand = await Brands.findById(id);

        if (!brand) {
            return res.status(404).json({ message: "Brand not found" });
        }

        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: "Error fetching brand", error });
    }
};

const createBrand = async (req, res) => {
    try {
        const brand = new Brands({
            name: req.body.name
        });

        const savedBrand = await brand.save();

        res.status(201).json(savedBrand.toObject());
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create brand' });
    }
};
const updateBrand = async (req, res) => {
    try {
        const id = req.params.id;
        const model = req.body;

        const updatedBrand = await Brands.findOneAndUpdate(
            { _id: id },
            { $set: model },   // ✅ safer update
            { new: true }
        );

        if (!updatedBrand) {
            return res.status(404).json({ message: "Brand not found" });
        }

        res.status(200).json({
            message: "Updated successfully",
            data: updatedBrand
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating brand", error });
    }
};

const deleteBrand = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedBrand = await Brands.findByIdAndDelete(id);

        if (!deletedBrand) {
            return res.status(404).json({ message: "Brand not found" });
        }

        res.status(200).json({
            message: "Deleted successfully",
            data: deletedBrand
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting brand", error });
    }
}
module.exports = {
    getBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
};