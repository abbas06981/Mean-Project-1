const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: String,
    shortDescription: String,
    description: String,
    purchasePrice: Number,
    sailingPrice: Number,
    images: Array(String),
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    }
});
const Products = mongoose.model("products", productsSchema);

module.exports = Products
