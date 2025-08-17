const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    productsId: {
        type: Schema.Types.ObjectId,
        ref: "products"
    }
});
const Carts = mongoose.model("whistList", cartSchema);

module.exports = Carts
