import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes/products.routes.js";
const app=new express();
app.listen(2500,()=>{
    console.log("server is running on port 2500")
});
mongoose.connect(
    "mongodb+srv://ksshoppyglobe:karthiksai12@cluster0.hs81j.mongodb.net/"
);
const db=mongoose.connection;
db.on("open",()=>{
    console.log("Database connected successfully")
});
routes(app);