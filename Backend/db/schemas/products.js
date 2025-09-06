const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: String,
    shortDescription: String,
    description: String,
    price: Number,
    discount: Number,
    images: Array(String),
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    brandId: {
        type: Schema.Types.ObjectId,
        ref: "brand"
    },
    isFeatured: Boolean,
    isNew: Boolean

});
const Products = mongoose.model("products", productsSchema);

module.exports = Products
