import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controller/products.controller.js";

export function routes(app) { // ✅ Named export
    app.post("/api/product", createProduct);
    app.get("/api/products", getAllProducts);
    app.get("/api/products/:id", getProductById);
    app.put("/api/products/:id", updateProduct);
    app.delete("/api/products/:id", deleteProduct);
}
