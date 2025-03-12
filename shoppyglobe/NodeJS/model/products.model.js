import mongoose from "mongoose";
const {Schema}=mongoose;

const productSchema=new Schema({
    title: String,
    images: String,
    description: String,
    rating: String,
});

const productModel=mongoose.model("Products",productSchema);
export default productModel;