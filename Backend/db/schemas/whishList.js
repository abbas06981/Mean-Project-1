const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whishListSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    productsId: {
        type: Schema.Types.ObjectId,
        ref: "products"
    }
});
const WhishList = mongoose.model("whistList", whishListSchema);

module.exports = WhishList
