const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String

});

const Brands = mongoose.model("brands", brandSchema);
module.exports = Brands
