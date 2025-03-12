import productModel from "../model/products.model.js";

export function createProduct(req,res){
    const {title,images,description,rating}=req.body;

    const newProduct=new productModel({
        title,images,description,rating,

    })

    newProduct
        .save()
        .then((data)=>{
        if(!data){
            return res.status(400).send("something went wrong");
        }
        res.send(data);
        })
        .catch(err=>res.status(500).json({message:err.message}));
}