import { createProduct } from "../controller/products.controller.js";

export function routes(app){
    app.post ("/api/products",createProduct);
}