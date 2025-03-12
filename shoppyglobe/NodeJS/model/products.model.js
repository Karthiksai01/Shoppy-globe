import mongoose from "mongoose";
const {Schema}=mongoose;

const productSchema=new Schema({
    name: String,
    price: String,
    description: String,
    stock: Number,
});

const productModel=mongoose.model("Products",productSchema);
export default productModel;