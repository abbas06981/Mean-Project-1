const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishListSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    productsId: {
        type: Schema.Types.ObjectId,
        ref: "products"
    }
});
const WhishList = mongoose.model("wishList", wishListSchema);

module.exports = WhishList
