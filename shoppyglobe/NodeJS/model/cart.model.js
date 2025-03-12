import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
    quantity: { type: Number, required: true, default: 1 }
});

const cartModel = mongoose.model("Cart", cartSchema);
export default cartModel;
