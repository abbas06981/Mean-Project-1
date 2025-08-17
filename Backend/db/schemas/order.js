const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: Date,
    items: Array(any),
    status: Number
});
const Order = mongoose.model("orders", orderSchema);

module.exports = Order
